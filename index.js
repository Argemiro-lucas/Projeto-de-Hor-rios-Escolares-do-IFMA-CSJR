// index.js

// 1. BANCO DE DADOS PADRÃO ATUALIZADO: Separado por Curso, Semestre e Turno para cumprir as regras técnicas
const bancoHorariosPadrao = {
    informatica: {
        atual: {
            manha: [
                { hora: "07:30 - 08:20", seg: "Introdução à Computação<span class='professor'>Prof. Alan</span>", ter: "Algoritmos I<span class='professor'>Prof. Carlos</span>", qua: "Matemática Discreta<span class='professor'>Prof. José</span>", qui: "Algoritmos I<span class='professor'>Prof. Carlos</span>", sex: "Inglês Técnico<span class='professor'>Prof. Valter</span>" },
                { hora: "08:20 - 09:10", seg: "Introdução à Computação<span class='professor'>Prof. Alan</span>", ter: "Algoritmos I<span class='professor'>Prof. Carlos</span>", qua: "Matemática Discreta<span class='professor'>Prof. José</span>", qui: "Algoritmos I<span class='professor'>Prof. Carlos</span>", sex: "Inglês Técnico<span class='professor'>Prof. Valter</span>" }
            ],
            tarde: [
                { hora: "13:30 - 14:20", seg: "Lógica de Programação<span class='professor'>Prof. Bruno</span>", ter: "Sistemas Operacionais<span class='professor'>Prof. Alan</span>", qua: "Fundamentos de Redes<span class='professor'>Prof. Roberto</span>", qui: "Lógica de Programação<span class='professor'>Prof. Bruno</span>", sex: "Inovação Tecnológica<span class='professor'>Prof. Kátia</span>" }
            ],
            noite: [
                { hora: "19:00 - 19:50", seg: "Programação Web I<span class='professor'>Prof. Carlos</span>", ter: "Modelagem de Dados<span class='professor'>Prof. Ana</span>", qua: "Arquitetura de Computadores<span class='professor'>Prof. Alan</span>", qui: "Programação Web I<span class='professor'>Prof. Carlos</span>", sex: "Ética na Computação<span class='professor'>Prof. Rita</span>" }
            ]
        },
        proximo: {
            manha: [
                { hora: "07:30 - 08:20", seg: "Algoritmos<span class='professor'>Prof. Carlos</span>", ter: "Banco de Dados<span class='professor'>Prof. Ana</span>", qua: "Matemática<span class='professor'>Prof. José</span>", qui: "Algoritmos<span class='professor'>Prof. Carlos</span>", sex: "Física<span class='professor'>Prof. Marcos</span>" },
                { hora: "08:20 - 09:10", seg: "Algoritmos<span class='professor'>Prof. Carlos</span>", ter: "Banco de Dados<span class='professor'>Prof. Ana</span>", qua: "Matemática<span class='professor'>Prof. José</span>", qui: "Redes de Computadores<span class='professor'>Prof. Roberto</span>", sex: "Física<span class='professor'>Prof. Marcos</span>" }
            ],
            tarde: [
                { hora: "13:30 - 14:20", seg: "Engenharia de Software<span class='professor'>Prof. Marcelo</span>", ter: "Estrutura de Dados<span class='professor'>Prof. Carlos</span>", qua: "Interface Humano-Computador<span class='professor'>Prof. Kátia</span>", qui: "Estrutura de Dados<span class='professor'>Prof. Carlos</span>", sex: "Metodologia Ágil<span class='professor'>Prof. Bruno</span>" }
            ],
            noite: [
                { hora: "19:00 - 19:50", seg: "Desenvolvimento Mobile<span class='professor'>Prof. Lucas</span>", ter: "Segurança de Sistemas<span class='professor'>Prof. Roberto</span>", qua: "Inteligência Artificial<span class='professor'>Prof. Ana</span>", qui: "Desenvolvimento Mobile<span class='professor'>Prof. Lucas</span>", sex: "Gestão de Projetos TI<span class='professor'>Prof. Marcelo</span>" }
            ]
        },
        "2026.1": {
            manha: [{ hora: "07:30 - 08:20", seg: "Fundamentos de TI<span class='professor'>Prof. Marcelo</span>", ter: "Lógica Aplicada<span class='professor'>Prof. Bruno</span>", qua: "Metodologia Científica<span class='professor'>Prof. Kátia</span>", qui: "Fundamentos de TI<span class='professor'>Prof. Marcelo</span>", sex: "Sociologia<span class='professor'>Prof. Rita</span>" }],
            tarde: [{ hora: "13:30 - 14:20", seg: "História da Tecnologia<span class='professor'>Prof. Rita</span>", ter: "Cultura Digital<span class='professor'>Prof. Marcelo</span>", qua: "Fundamentos de TI<span class='professor'>Prof. Marcelo</span>", qui: "Expressão Gráfica<span class='professor'>Prof. Bruno</span>", sex: "Metodologia<span class='professor'>Prof. Kátia</span>" }],
            noite: [{ hora: "19:00 - 19:50", seg: "Seminários de Computação<span class='professor'>Prof. Alan</span>", ter: "Sistemas Computacionais<span class='professor'>Prof. Roberto</span>", qua: "Cálculo Computacional<span class='professor'>Prof. José</span>", qui: "Sistemas Computacionais<span class='professor'>Prof. Roberto</span>", sex: "Filosofia da Ciência<span class='professor'>Prof. Rita</span>" }]
        }
    },
    eletro: {
        atual: {
            manha: [{ hora: "07:30 - 08:20", seg: "Eletricidade Básica<span class='professor'>Prof. Fernando</span>", ter: "Desenho Técnico<span class='professor'>Prof. Marcio</span>", qua: "Química Geral<span class='professor'>Prof. Patricia</span>", qui: "Eletricidade Básica<span class='professor'>Prof. Fernando</span>", sex: "Física Aplicada<span class='professor'>Prof. Fabio</span>" }],
            tarde: [{ hora: "13:30 - 14:20", seg: "Análise de Circuitos I<span class='professor'>Prof. Fernando</span>", ter: "Segurança em Instalações<span class='professor'>Prof. Igor</span>", qua: "Metrologia Científica<span class='professor'>Prof. Marcio</span>", qui: "Análise de Circuitos I<span class='professor'>Prof. Fernando</span>", sex: "Desenho Técnico Assistido<span class='professor'>Prof. Marcio</span>" }],
            noite: [{ hora: "19:00 - 19:50", seg: "Instalações Industriais<span class='professor'>Prof. Marcio</span>", ter: "Sistemas de Potência<span class='professor'>Prof. Igor</span>", qua: "Eletrotécnica Geral<span class='professor'>Prof. Fernando</span>", qui: "Instalações Industriais<span class='professor'>Prof. Marcio</span>", sex: "Sustentabilidade Energética<span class='professor'>Prof. Patricia</span>" }]
        },
        proximo: {
            manha: [{ hora: "07:30 - 08:20", seg: "Circuitos Elétricos<span class='professor'>Prof. Fernando</span>", ter: "Automação<span class='professor'>Prof. Patricia</span>", qua: "Instalações<span class='professor'>Prof. Marcio</span>", qui: "Circuitos Elétricos<span class='professor'>Prof. Fernando</span>", sex: "Eletrônica Digital<span class='professor'>Prof. Fabio</span>" }],
            tarde: [{ hora: "13:30 - 14:20", seg: "Maquinas Elétricas<span class='professor'>Prof. Marcio</span>", ter: "Controladores Lógicos<span class='professor'>Prof. Patricia</span>", qua: "Eletrônica de Potência<span class='professor'>Prof. Fabio</span>", qui: "Maquinas Elétricas<span class='professor'>Prof. Marcio</span>", sex: "Sistemas Hidráulicos<span class='professor'>Prof. Igor</span>" }],
            noite: [{ hora: "19:00 - 19:50", seg: "Fontes de Energia Renovável<span class='professor'>Prof. Igor</span>", ter: "Robótica Industrial<span class='professor'>Prof. Patricia</span>", qua: "Microcontroladores<span class='professor'>Prof. Fabio</span>", qui: "Robótica Industrial<span class='professor'>Prof. Patricia</span>", sex: "Projetos Elétricos Finais<span class='professor'>Prof. Fernando</span>" }]
        },
        "2026.1": {
            manha: [{ hora: "07:30 - 08:20", seg: "Segurança em Elétrica<span class='professor'>Prof. Fernando</span>", ter: "Introdução à Eng.<span class='professor'>Prof. Marcio</span>", qua: "Cálculo Vetorial<span class='professor'>Prof. Igor</span>", qui: "Segurança em Elétrica<span class='professor'>Prof. Fernando</span>", sex: "Instrumentação<span class='professor'>Prof. Fabio</span>" }],
            tarde: [{ hora: "13:30 - 14:20", seg: "Introdução à Eletrotécnica<span class='professor'>Prof. Marcio</span>", ter: "Geometria Analítica<span class='professor'>Prof. Igor</span>", qua: "Química Industrial<span class='professor'>Prof. Patricia</span>", qui: "Introdução à Eletrotécnica<span class='professor'>Prof. Marcio</span>", sex: "Ética Profissional<span class='professor'>Prof. Fabio</span>" }],
            noite: [{ hora: "19:00 - 19:50", seg: "Cálculo Diferencial I<span class='professor'>Prof. Igor</span>", ter: "Física Mecânica<span class='professor'>Prof. Fabio</span>", qua: "Sistemas Computacionais Elétricos<span class='professor'>Prof. Fernando</span>", qui: "Física Mecânica<span class='professor'>Prof. Fabio</span>", sex: "Introdução à Engenharia<span class='professor'>Prof. Marcio</span>" }]
        }
    },
    adm: {
        atual: {
            manha: [{ hora: "07:30 - 08:20", seg: "Teoria da Adm.<span class='professor'>Prof. Ricardo</span>", ter: "Matemática Financeira<span class='professor'>Prof. Sergio</span>", qua: "Comunicação Org.<span class='professor'>Prof. Aline</span>", qui: "Teoria da Adm.<span class='professor'>Prof. Ricardo</span>", sex: "Metodologia<span class='professor'>Prof. Sandra</span>" }],
            tarde: [{ hora: "13:30 - 14:20", seg: "Comunicação Org.<span class='professor'>Prof. Aline</span>", ter: "Comportamento Humano<span class='professor'>Prof. Ricardo</span>", qua: "Estatística de Mercado<span class='professor'>Prof. Sergio</span>", qui: "Comunicação Org.<span class='professor'>Prof. Aline</span>", sex: "Pesquisa Organizacional<span class='professor'>Prof. Sandra</span>" }],
            noite: [{ hora: "19:00 - 19:50", seg: "Administração Estratégica<span class='professor'>Prof. Ricardo</span>", ter: "Direito Empresarial<span class='professor'>Prof. Sandra</span>", qua: "Finanças Corporativas<span class='professor'>Prof. Sergio</span>", qui: "Administração Estratégica<span class='professor'>Prof. Ricardo</span>", sex: "Modelos de Negócios<span class='professor'>Prof. Aline</span>" }]
        },
        proximo: { 
            manha: [{ hora: "07:30 - 08:20", seg: "Contabilidade<span class='professor'>Prof. Julia</span>", ter: "Gestão de Pessoas<span class='professor'>Prof. Ricardo</span>", qua: "Economia<span class='professor'>Prof. Sergio</span>", qui: "Contabilidade<span class='professor'>Prof. Julia</span>", sex: "Direito<span class='professor'>Prof. Sandra</span>" }],
            tarde: [{ hora: "13:30 - 14:20", seg: "Logística Empresarial<span class='professor'>Prof. Sergio</span>", ter: "Marketing e Consumo<span class='professor'>Prof. Aline</span>", qua: "Gestão da Cadeia Suprimentos<span class='professor'>Prof. Julia</span>", qui: "Logística Empresarial<span class='professor'>Prof. Sergio</span>", sex: "Contabilidade de Custos<span class='professor'>Prof. Ricardo</span>" }],
            noite: [{ hora: "19:00 - 19:50", seg: "Gestão de Operações Globais<span class='professor'>Prof. Julia</span>", ter: "Empreendedorismo<span class='professor'>Prof. Ricardo</span>", qua: "Análise Macroeconômica<span class='professor'>Prof. Sergio</span>", qui: "Empreendedorismo<span class='professor'>Prof. Ricardo</span>", sex: "Auditoria e Controladoria<span class='professor'>Prof. Sandra</span>" }]
        },
        "2026.1": {
            manha: [{ hora: "07:30 - 08:20", seg: "Introdução à Adm.<span class='professor'>Prof. Ricardo</span>", ter: "Sociologia das Org.<span class='professor'>Prof. Sandra</span>", qua: "Estatística Básica<span class='professor'>Prof. Sergio</span>", qui: "Introdução à Adm.<span class='professor'>Prof. Ricardo</span>", sex: "Filosofia<span class='professor'>Prof. Rita</span>" }],
            tarde: [{ hora: "13:30 - 14:20", seg: "Fundamentos de Economia<span class='professor'>Prof. Sergio</span>", ter: "História da Administração<span class='professor'>Prof. Ricardo</span>", qua: "Sociologia do Trabalho<span class='professor'>Prof. Sandra</span>", qui: "História da Administração<span class='professor'>Prof. Ricardo</span>", sex: "Metodologia Científica<span class='professor'>Prof. Rita</span>" }],
            noite: [{ hora: "19:00 - 19:50", seg: "Teorias Econômicas<span class='professor'>Prof. Sergio</span>", ter: "Matemática Pura Aplicada<span class='professor'>Prof. Ricardo</span>", qua: "Comunicação e Escrita<span class='professor'>Prof. Aline</span>", qui: "Teorias Econômicas<span class='professor'>Prof. Sergio</span>", sex: "Ética e Sociedade<span class='professor'>Prof. Rita</span>" }]
        }
    },
    jogos: {
        atual: {
            manha: [{ hora: "07:30 - 08:20", seg: "História dos Jogos<span class='professor'>Prof. Carla</span>", ter: "Lógica de Jogos<span class='professor'>Prof. Lucas</span>", qua: "Desenho Vetorial<span class='professor'>Prof. Bruno</span>", qui: "Lógica de Jogos<span class='professor'>Prof. Lucas</span>", sex: "Roteirização<span class='professor'>Prof. Amanda</span>" }],
            tarde: [{ hora: "13:30 - 14:20", seg: "Desenho Anatômico<span class='professor'>Prof. Bruno</span>", ter: "Arquitetura de Game Engines<span class='professor'>Prof. Lucas</span>", qua: "Roteiros para Mídias Digitais<span class='professor'>Prof. Amanda</span>", qui: "Arquitetura de Game Engines<span class='professor'>Prof. Lucas</span>", sex: "Fundamentos de Arte 2D<span class='professor'>Prof. Carla</span>" }],
            noite: [{ hora: "19:00 - 19:50", seg: "Programação de Motores Avançados<span class='professor'>Prof. Lucas</span>", ter: "Animação de Personagens 3D<span class='professor'>Prof. Bruno</span>", qua: "Design de Níveis Complexos<span class='professor'>Prof. Carla</span>", qui: "Programação de Motores Avançados<span class='professor'>Prof. Lucas</span>", sex: "Sonorização Aplicada<span class='professor'>Prof. Amanda</span>" }]
        },
        proximo: {
            manha: [{ hora: "07:30 - 08:20", seg: "Modelagem 3D<span class='professor'>Prof. Bruno</span>", ter: "Roteiro e Narrative<span class='professor'>Prof. Carla</span>", qua: "Motores de Jogos<span class='professor'>Prof. Diego</span>", qui: "Modelagem 3D<span class='professor'>Prof. Bruno</span>", sex: "Programação de Jogos<span class='professor'>Prof. Lucas</span>" }],
            tarde: [{ hora: "13:30 - 14:20", seg: "Texturização de Superfícies<span class='professor'>Prof. Bruno</span>", ter: "Matemática para Vetores 3D<span class='professor'>Prof. Diego</span>", qua: "Inteligência Artificial Jogos<span class='professor'>Prof. Lucas</span>", qui: "Texturização de Superfícies<span class='professor'>Prof. Bruno</span>", sex: "Interface UI/UX Jogos<span class='professor'>Prof. Carla</span>" }],
            noite: [{ hora: "19:00 - 19:50", seg: "Jogos Multiplayer Rede<span class='professor'>Prof. Lucas</span>", ter: "Física Realista Computacional<span class='professor'>Prof. Diego</span>", qua: "Produção Executiva Games<span class='professor'>Prof. Carla</span>", qui: "Jogos Multiplayer Rede<span class='professor'>Prof. Lucas</span>", sex: "Projeto de Conclusão Estúdio<span class='professor'>Prof. Bruno</span>" }]
        },
        "2026.1": {
            manha: [{ hora: "07:30 - 08:20", seg: "Pixel Art<span class='professor'>Prof. Bruno</span>", ter: "Matemática para Jogos<span class='professor'>Prof. Diego</span>", qua: "Game Design I<span class='professor'>Prof. Carla</span>", qui: "Pixel Art<span class='professor'>Prof. Bruno</span>", sex: "Ética e Jogos<span class='professor'>Prof. Amanda</span>" }],
            tarde: [{ hora: "13:30 - 14:20", seg: "Game Design Básico<span class='professor'>Prof. Carla</span>", ter: "Áudio Digital Teoria<span class='professor'>Prof. Amanda</span>", qua: "Vetores Fundamentos<span class='professor'>Prof. Diego</span>", qui: "Game Design Básico<span class='professor'>Prof. Carla</span>", sex: "Expressão Artística 2D<span class='professor'>Prof. Bruno</span>" }],
            noite: [{ hora: "19:00 - 19:50", seg: "Algoritmos para Games<span class='professor'>Prof. Lucas</span>", ter: "História da Arte Clássica<span class='professor'>Prof. Carla</span>", qua: "Introdução ao Roteiro<span class='professor'>Prof. Amanda</span>", qui: "Algoritmos para Games<span class='professor'>Prof. Lucas</span>", sex: "Filosofia dos Meios Digitais<span class='professor'>Prof. Bruno</span>" }]
        }
    }
};

// =========================================================================
// 2. CARREGAMENTO DOS DADOS ATRAVÉS DO LOCALSTORAGE DO SISTEMA
// =========================================================================
let bancoHorarios;
const dadosSalvos = localStorage.getItem('bancoHorarios');
if (dadosSalvos) {
    bancoHorarios = JSON.parse(dadosSalvos);
} else {
    bancoHorarios = bancoHorariosPadrao;
    localStorage.setItem('bancoHorarios', JSON.stringify(bancoHorarios));
}

// =========================================================================
// 3. FUNÇÃO DE RE-RENDERIZAÇÃO ADAPTATIVA: Garante a leitura de todos os turnos
// =========================================================================
function carregarTabelaHorarios(curso, semestre, turno) {
    const corpoTabela = document.getElementById('corpoTabelaHorarios');
    const tituloGrade = document.getElementById('tituloGrade');
    
    const nomesCursos = { informatica: "Informática", adm: "Administração (ADM)", jogos: "Jogos Digitais", eletro: "EletroEletrônica" };
    const nomesSemestres = { atual: "Semestre Atual", proximo: "Próximo Semestre", "2026.1": "Semestre Passado (2026.1)" };
    const nomesTurnos = { manha: "Manhã", tarde: "Tarde", noite: "Noite" };
    
    if (tituloGrade) {
        tituloGrade.textContent = `Horários e Disciplinas: ${nomesCursos[curso] || curso} (${nomesSemestres[semestre] || semestre}) - Turno ${nomesTurnos[turno] || turno}`;
    }
    
    if (!corpoTabela) return;
    corpoTabela.innerHTML = "";

    if (!bancoHorarios[curso] || !bancoHorarios[curso][semestre]) {
        corpoTabela.innerHTML = `<tr><td colspan="6" style="color: red; padding: 20px;">Nenhum horário cadastrado para essa combinação.</td></tr>`;
        return;
    }

    const dadosSemestre = bancoHorarios[curso][semestre];

    // A. Fluxo Primário: Se for uma Array direta (vinda de importação de arquivos XML)
    if (Array.isArray(dadosSemestre)) {
        dadosSemestre.forEach(linha => {
            const tr = document.createElement('tr');
            tr.innerHTML = `<td><strong>${linha.hora}</strong></td><td class="materia">${linha.seg}</td><td class="materia">${linha.ter}</td><td class="materia">${linha.qua}</td><td class="materia">${linha.qui}</td><td class="materia">${linha.sex}</td>`;
            corpoTabela.appendChild(tr);
        });
        return;
    }

    // B. Fluxo Secundário: Lê a estrutura do banco padrão diferenciada por turno ('manha', 'tarde', 'noite')
    if (dadosSemestre[turno] && Array.isArray(dadosSemestre[turno])) {
        dadosSemestre[turno].forEach(linha => {
            const tr = document.createElement('tr');
            tr.innerHTML = `<td><strong>${linha.hora}</strong></td><td class="materia">${linha.seg}</td><td class="materia">${linha.ter}</td><td class="materia">${linha.qua}</td><td class="materia">${linha.qui}</td><td class="materia">${linha.sex}</td>`;
            corpoTabela.appendChild(tr);
        });
    } else {
        corpoTabela.innerHTML = `<tr><td colspan="6" style="color: red; padding: 20px;">Nenhum horário cadastrado para essa combinação.</td></tr>`;
    }
}

// =========================================================================
// 4. FUNÇÃO DE DISPARO INTERNO DOS EVENTOS DA TELA DO PORTAL
// =========================================================================
function atualizarVisualizacao() {
    const filtroCurso = document.getElementById('filtroCurso');
    const filtroSemestre = document.getElementById('filtroSemestre');
    const filtroTurno = document.getElementById('filtroTurno');

    if (filtroCurso && filtroSemestre && filtroTurno) {
        carregarTabelaHorarios(filtroCurso.value, filtroSemestre.value, filtroTurno.value);
    }
}

// Vincula de maneira blindada os ouvintes nos 3 filtros assim que a página estiver pronta
document.addEventListener("DOMContentLoaded", () => {
    const fCurso = document.getElementById('filtroCurso');
    const fSemestre = document.getElementById('filtroSemestre');
    const fTurno = document.getElementById('filtroTurno');

    if (fCurso) fCurso.addEventListener('change', atualizarVisualizacao);
    if (fSemestre) fSemestre.addEventListener('change', atualizarVisualizacao);
    if (fTurno) fTurno.addEventListener('change', atualizarVisualizacao);
});

// =========================================================================
// 5. EVENTO DE SUBMIT E VALIDAÇÃO DE PERFIL COM BASE NAS REGRAS DO SUAP
// =========================================================================
const loginForm = document.getElementById('loginForm');
if (loginForm) {
    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const matricula = document.getElementById('matricula').value.trim();
        const senha = document.getElementById('senha').value;
        const msgErro = document.getElementById('msgErro');
        
        if (!senha || senha.trim().length < 4) {
            msgErro.textContent = "Matrícula ou senha incorreta no SUAP.";
            msgErro.style.display = "block";
            return;
        }
        
        msgErro.style.display = "none";
        let perfil = "Aluno";
        
        if (matricula.startsWith("20")) perfil = "Aluno";
        else if (matricula.startsWith("10")) perfil = "Professor";
        else if (matricula.startsWith("00")) perfil = "Servidor";
        
        if (perfil === 'Professor') {
            const professoresCadastrados = JSON.parse(localStorage.getItem('professores') || '[]');
            const profExistente = professoresCadastrados.find(p => p.matricula === matricula);
            
            if (!profExistente) {
                msgErro.textContent = "Acesso negado: Este professor não foi cadastrado pelo Administrador.";
                msgErro.style.display = "block";
                return;
            }
            sessionStorage.setItem('nomeProfessorLogado', profExistente.nome);
        }
        
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
        
        ativarDashboardTela(matricula, perfil);
    });
}
// =========================================================================
// 6. GERENCIAMENTO, TRAVAS DE PERFIL E PERSISTÊNCIA DA SESSÃO ATIVA
// =========================================================================
function verificarSessaoAtiva() {
    const matriculaSalva = sessionStorage.getItem('matricula');
    const perfilSalvo = sessionStorage.getItem('perfil');

    if (matriculaSalva && perfilSalvo) {
        // Bloqueio rígido: Professor não entra no index.html dos alunos
        if (perfilSalvo === 'Professor') {
            window.location.href = 'professor.html';
            return;
        }
        ativarDashboardTela(matriculaSalva, perfilSalvo);
    }
}

function ativarDashboardTela(matricula, perfil) {
    document.body.classList.add('dashboard-ativo');
    
    if (document.getElementById('loginContainer')) document.getElementById('loginContainer').style.display = 'none';
    if (document.getElementById('dashboardContainer')) document.getElementById('dashboardContainer').style.display = 'block';
    if (document.getElementById('dashMatricula')) document.getElementById('dashMatricula').textContent = matricula;
    if (document.getElementById('dashPerfil')) document.getElementById('dashPerfil').textContent = perfil;
    
    // Adiciona o aviso visual no topo da tabela se for o Servidor
    if (perfil === "Servidor") {
        const gradeContainer = document.querySelector('.grade-container-branca');
        if (gradeContainer && !document.getElementById('avisoEdicao')) {
            const aviso = document.createElement('div');
            aviso.id = 'avisoEdicao';
            aviso.style.cssText = "background:#e8f5e9; color:#2e7d32; padding:10px; border-radius:6px; margin-bottom:15px; font-weight:bold; font-size:13px; border:1px solid #a5d6a7;";
            aviso.innerHTML = "📝 Modo de Edição Ativo: Clique diretamente em qualquer matéria ou professor na tabela abaixo para alterar o horário em tempo real.";
            gradeContainer.insertBefore(aviso, gradeContainer.firstChild);
        }
    }

    atualizarVisualizacao();
    ativarEdicaoAoVivo(); 
}

// Torna todas as células de matérias editáveis em tempo real para o Servidor
function ativarEdicaoAoVivo() {
    const perfil = sessionStorage.getItem('perfil');
    if (perfil !== "Servidor") return;

    const materiasCells = document.querySelectorAll('#corpoTabelaHorarios td.materia');
    
    materiasCells.forEach((celula) => {
        celula.contentEditable = "true";
        celula.style.cursor = "pointer";
        celula.style.backgroundColor = "#fffde7"; 

        celula.addEventListener('blur', function() {
            const curso = document.getElementById('filtroCurso').value;
            const semestre = document.getElementById('filtroSemestre').value;
            const turno = document.getElementById('filtroTurno').value;
            
            const trPai = this.parentElement;
            const todasAsLinhas = Array.from(document.querySelectorAll('#corpoTabelaHorarios tr'));
            const linhaIndex = todasAsLinhas.indexOf(trPai);

            const colunas = Array.from(trPai.querySelectorAll('td'));
            const colIndex = colunas.indexOf(this);
            const diasSemana = ['hora', 'seg', 'ter', 'qua', 'qui', 'sex'];
            const diaEditado = diasSemana[colIndex];

            if (bancoHorarios[curso] && bancoHorarios[curso][semestre]) {
                const dadosSemestre = bancoHorarios[curso][semestre];
                
                if (Array.isArray(dadosSemestre)) {
                    dadosSemestre[linhaIndex][diaEditado] = this.innerHTML;
                } else if (dadosSemestre[turno]) {
                    dadosSemestre[turno][linhaIndex][diaEditado] = this.innerHTML;
                }

                localStorage.setItem('bancoHorarios', JSON.stringify(bancoHorarios));
            }
        });
    });
}

// Adiciona um gatilho para re-aplicar os eventos de edição toda vez que o Servidor mudar de filtro
const filtrosIds = ['filtroCurso', 'filtroSemestre', 'filtroTurno'];
filtrosIds.forEach(id => {
    const el = document.getElementById(id);
    if (el) {
        el.addEventListener('change', () => {
            setTimeout(ativarEdicaoAoVivo, 50); 
        });
    }
});

// EXECUÇÃO INICIAL GLOBAL: Força o disparo do sistema ao abrir a página
verificarSessaoAtiva();

// Chamada protegida do botão de Sair vinda de comum.js
if (typeof configurarBotaoSair === "function") {
    configurarBotaoSair();
}
