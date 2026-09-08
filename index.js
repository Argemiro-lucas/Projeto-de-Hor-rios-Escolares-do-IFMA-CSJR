const bancoHorariosPadrao = {
    informatica: {
        atual: [{ hora: "07:30 - 08:20", seg: "Introdução à Computação<span class='professor'>Prof. Alan</span>", ter: "Algoritmos I<span class='professor'>Prof. Carlos</span>", qua: "Matemática Discreta<span class='professor'>Prof. José</span>", qui: "Algoritmos I<span class='professor'>Prof. Carlos</span>", sex: "Inglês Técnico<span class='professor'>Prof. Valter</span>" }],
        proximo: [
            { hora: "07:30 - 08:20", seg: "Algoritmos<span class='professor'>Prof. Carlos</span>", ter: "Banco de Dados<span class='professor'>Prof. Ana</span>", qua: "Matemática<span class='professor'>Prof. José</span>", qui: "Algoritmos<span class='professor'>Prof. Carlos</span>", sex: "Física<span class='professor'>Prof. Marcos</span>" },
            { hora: "08:20 - 09:10", seg: "Algoritmos<span class='professor'>Prof. Carlos</span>", ter: "Banco de Dados<span class='professor'>Prof. Ana</span>", qua: "Matemática<span class='professor'>Prof. José</span>", qui: "Redes de Computadores<span class='professor'>Prof. Roberto</span>", sex: "Física<span class='professor'>Prof. Marcos</span>" }
        ],
        "2026.1": [{ hora: "07:30 - 08:20", seg: "Fundamentos de TI<span class='professor'>Prof. Marcelo</span>", ter: "Lógica Aplicada<span class='professor'>Prof. Bruno</span>", qua: "Metodologia Científica<span class='professor'>Prof. Kátia</span>", qui: "Fundamentos de TI<span class='professor'>Prof. Marcelo</span>", sex: "Sociologia<span class='professor'>Prof. Rita</span>" }]
    },
    adm: {
        atual: [{ hora: "07:30 - 08:20", seg: "Teoria da Adm.<span class='professor'>Prof. Ricardo</span>", ter: "Matemática Financeira<span class='professor'>Prof. Sergio</span>", qua: "Comunicação Org.<span class='professor'>Prof. Aline</span>", qui: "Teoria da Adm.<span class='professor'>Prof. Ricardo</span>", sex: "Metodologia<span class='professor'>Prof. Sandra</span>" }],
        proximo: [{ hora: "07:30 - 08:20", seg: "Contabilidade<span class='professor'>Prof. Julia</span>", ter: "Gestão de Pessoas<span class='professor'>Prof. Ricardo</span>", qua: "Economia<span class='professor'>Prof. Sergio</span>", qui: "Contabilidade<span class='professor'>Prof. Julia</span>", sex: "Direito<span class='professor'>Prof. Sandra</span>" }],
        "2026.1": [{ hora: "07:30 - 08:20", seg: "Introdução à Adm.<span class='professor'>Prof. Ricardo</span>", ter: "Sociologia das Org.<span class='professor'>Prof. Sandra</span>", qua: "Estatística Básica<span class='professor'>Prof. Sergio</span>", qui: "Introdução à Adm.<span class='professor'>Prof. Ricardo</span>", sex: "Filosofia<span class='professor'>Prof. Rita</span>" }]
    },
    jogos: {
        atual: [{ hora: "07:30 - 08:20", seg: "História dos Jogos<span class='professor'>Prof. Carla</span>", ter: "Lógica de Jogos<span class='professor'>Prof. Lucas</span>", qua: "Desenho Vetorial<span class='professor'>Prof. Bruno</span>", qui: "Lógica de Jogos<span class='professor'>Prof. Lucas</span>", sex: "Roteirização<span class='professor'>Prof. Amanda</span>" }],
        proximo: [{ hora: "07:30 - 08:20", seg: "Modelagem 3D<span class='professor'>Prof. Bruno</span>", ter: "Roteiro e Narrativa<span class='professor'>Prof. Carla</span>", qua: "Motores de Jogos<span class='professor'>Prof. Diego</span>", qui: "Modelagem 3D<span class='professor'>Prof. Bruno</span>", sex: "Programação de Jogos<span class='professor'>Prof. Lucas</span>" }],
        "2026.1": [{ hora: "07:30 - 08:20", seg: "Pixel Art<span class='professor'>Prof. Bruno</span>", ter: "Matemática para Jogos<span class='professor'>Prof. Diego</span>", qua: "Game Design I<span class='professor'>Prof. Carla</span>", qui: "Pixel Art<span class='professor'>Prof. Bruno</span>", sex: "Ética e Jogos<span class='professor'>Prof. Amanda</span>" }]
    },
    eletro: {
        atual: [{ hora: "07:30 - 08:20", seg: "Eletricidade Básica<span class='professor'>Prof. Fernando</span>", ter: "Desenho Técnico<span class='professor'>Prof. Marcio</span>", qua: "Química Geral<span class='professor'>Prof. Patricia</span>", qui: "Eletricidade Básica<span class='professor'>Prof. Fernando</span>", sex: "Física Aplicada<span class='professor'>Prof. Fabio</span>" }],
        proximo: [{ hora: "07:30 - 08:20", seg: "Circuitos Elétricos<span class='professor'>Prof. Fernando</span>", ter: "Automação<span class='professor'>Prof. Patricia</span>", qua: "Instalações<span class='professor'>Prof. Marcio</span>", qui: "Circuitos Elétricos<span class='professor'>Prof. Fernando</span>", sex: "Eletrônica Digital<span class='professor'>Prof. Fabio</span>" }],
        "2026.1": [{ hora: "07:30 - 08:20", seg: "Segurança em Elétrica<span class='professor'>Prof. Fernando</span>", ter: "Introdução à Eng.<span class='professor'>Prof. Marcio</span>", qua: "Cálculo Vetorial<span class='professor'>Prof. Igor</span>", qui: "Segurança em Elétrica<span class='professor'>Prof. Fernando</span>", sex: "Instrumentação<span class='professor'>Prof. Fabio</span>" }]
    }
};

// Carrega os dados do localStorage (compartilhado com adm.html).
// Na primeira visita, usa os dados padrão e já salva no localStorage.
let bancoHorarios;
const dadosSalvos = localStorage.getItem('bancoHorarios');
if (dadosSalvos) {
    bancoHorarios = JSON.parse(dadosSalvos);
} else {
    bancoHorarios = bancoHorariosPadrao;
    localStorage.setItem('bancoHorarios', JSON.stringify(bancoHorarios));
}

function carregarTabelaHorarios(curso, semestre) {
    const corpoTabela = document.getElementById('corpoTabelaHorarios');
    const tituloGrade = document.getElementById('tituloGrade');
    const nomesCursos = { informatica: "Informática", adm: "Administração (ADM)", jogos: "Jogos Digitais", eletro: "EletroEletrônica" };
    const nomesSemestres = { atual: "Semestre Atual", proximo: "Próximo Semestre", "2026.1": "Semestre Passado (2026.1)" };

    tituloGrade.textContent = `Horários e Disciplinas: ${nomesCursos[curso]} (${nomesSemestres[semestre]})`;
    corpoTabela.innerHTML = "";

    if (bancoHorarios[curso] && bancoHorarios[curso][semestre]) {
        bancoHorarios[curso][semestre].forEach(linha => {
            const tr = document.createElement('tr');
            tr.innerHTML = `<td><strong>${linha.hora}</strong></td><td class="materia">${linha.seg}</td><td class="materia">${linha.ter}</td><td class="materia">${linha.qua}</td><td class="materia">${linha.qui}</td><td class="materia">${linha.sex}</td>`;
            corpoTabela.appendChild(tr);
        });
    } else {
        corpoTabela.innerHTML = `<tr><td colspan="6" style="color: red; padding: 20px;">Nenhum horário cadastrado.</td></tr>`;
    }
}

function atualizarVisualizacao() {
    const cursoSelecionado = document.getElementById('filtroCurso').value;
    const semestreSelecionado = document.getElementById('filtroSemestre').value;
    carregarTabelaHorarios(cursoSelecionado, semestreSelecionado);
}

document.getElementById('filtroCurso').addEventListener('change', atualizarVisualizacao);
document.getElementById('filtroSemestre').addEventListener('change', atualizarVisualizacao);

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const matricula = document.getElementById('matricula').value;
    const senha = document.getElementById('senha').value;
    const msgErro = document.getElementById('msgErro');

    if (!senha || senha.trim().length < 4) {
        msgErro.textContent = "Matrícula ou senha incorreta no SUAP.";
        msgErro.style.display = "block";
        return;
    }

        // ... (sua validação de tamanho de senha continua igual acima)

    msgErro.style.display = "none";
    let perfil = "Aluno";
    if (matricula.startsWith("20")) perfil = "Aluno";
    else if (matricula.startsWith("10")) perfil = "Professor";
    else if (matricula.startsWith("00")) perfil = "Servidor";

    // VALIDAÇÃO ADICIONAL PARA PROFESSORES CADASTRADOS NO BANCO LOCAL
    if (perfil === 'Professor') {
        const professoresCadastrados = JSON.parse(localStorage.getItem('professores') || '[]');
        const profExistente = professoresCadastrados.find(p => p.matricula === matricula);
        
        if (!profExistente) {
            msgErro.textContent = "Acesso negado: Este professor não foi cadastrado pelo Administrador.";
            msgErro.style.display = "block";
            return;
        }
        
        // Se existir, guarda o nome dele temporariamente para o painel do professor ler
        sessionStorage.setItem('nomeProfessorLogado', profExistente.nome);
    }

    // Grava as informações exigidas pelo seu comum.js
    sessionStorage.setItem('matricula', matricula);
    sessionStorage.setItem('perfil', perfil);

    if (perfil === 'Professor') {
        window.location.href = 'professor.html';
        return;
    }
    if (perfil === 'Servidor') {
        window.location.href = 'adm.html';
        return;
    }

    // Se for Aluno, o fluxo de exibir o dashboard na mesma tela continua aqui:
    document.body.classList.add('dashboard-ativo');
    document.getElementById('loginContainer').style.display = 'none';
    document.getElementById('dashboardContainer').style.display = 'block';

    document.getElementById('dashMatricula').textContent = matricula;
    document.getElementById('dashPerfil').textContent = perfil;

    atualizarVisualizacao();

});

configurarBotaoSair();
