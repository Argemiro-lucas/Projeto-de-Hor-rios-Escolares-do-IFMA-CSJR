const express = require('express');
const path = require('path');
const bcrypt = require('bcrypt');
const db = require('./db');

const app = express();

// Middleware para ler dados JSON enviados no corpo da requisição (req.body)
app.use(express.json());

// Servir os arquivos estáticos da pasta public (HTML, CSS, JS, imagens)
app.use(express.static(path.join(__dirname, '../public')));

// ROTA DE CADASTRO DE USUÁRIO (POST /api/cadastro)
app.post('/api/cadastro', async (req, res) => {
    const { matricula, senha } = req.body;

    if (!matricula || !senha) {
        return res.status(400).json({ erro: 'Preencha a matrícula e a senha.' });
    }

    try {
        // Criptografa a senha antes de salvar no MySQL
        const hash = await bcrypt.hash(senha, 12);

        // Insere na tabela usuarios (usando a coluna matricula que ajustamos no MySQL)
        await db.execute(
            'INSERT INTO usuarios (matricula, senha_hash) VALUES (?, ?)',
            [matricula, hash]
        );

        res.status(201).json({ mensagem: 'Usuário cadastrado com sucesso!' });
    } catch (erro) {
        if (erro.code === 'ER_DUP_ENTRY') {
            return res.status(400).json({ erro: 'Esta matrícula já está cadastrada.' });
        }
        console.error('Erro no cadastro:', erro);
        res.status(500).json({ erro: 'Erro interno ao cadastrar usuário.' });
    }
});

// ROTA DE LOGIN (POST /api/login)
app.post('/api/login', async (req, res) => {
    const { nome, senha } = req.body; // aceita 'nome' ou 'matricula' vindo do fetch

    const matriculaDigitada = nome;

    if (!matriculaDigitada || !senha) {
        return res.status(400).json({ erro: 'Preencha a matrícula e a senha.' });
    }

    try {
        // Consulta no banco de dados buscando pela coluna matricula
        const [rows] = await db.execute(
            'SELECT id, matricula, senha_hash FROM usuarios WHERE matricula = ?',
            [matriculaDigitada]
        );

        // Se a matrícula não for encontrada no MySQL
        if (rows.length === 0) {
            return res.status(401).json({ erro: 'Matrícula ou senha inválidas.' });
        }

        const usuario = rows[0];

        // Compara a senha digitada com o hash salvo no banco
        const senhaValida = await bcrypt.compare(senha, usuario.senha_hash);

        if (!senhaValida) {
            return res.status(401).json({ erro: 'Matrícula ou senha inválidas.' });
        }

        // Define o perfil com base nas regras do seu projeto SUAP
        let perfil = "Aluno";
        if (usuario.matricula.startsWith("10")) perfil = "Professor";
        else if (usuario.matricula.startsWith("00")) perfil = "Servidor";

        // Login aprovado! Devolve mensagem e o perfil para o front-end
        res.json({
            mensagem: 'Login efetuado com sucesso!',
            matricula: usuario.matricula,
            perfil: perfil
        });

    } catch (erro) {
        console.error('Erro no login:', erro);
        res.status(500).json({ erro: 'Erro interno no servidor.' });
    }
});

// Inicialização do servidor HTTP na porta 3000
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});