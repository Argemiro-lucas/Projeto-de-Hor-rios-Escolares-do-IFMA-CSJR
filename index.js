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
        proximo: { manha: [{ hora: "07:30 - 08:20", seg: "ContabilidadeProf. Julia", ter: "Gestão de PessoasProf. Ricardo", qua: "EconomiaProf. Sergio", qui: "ContabilidadeProf. Julia", sex: "DireitoProf. Sandra" }],
tarde: [{ hora: "13:30 - 14:20", seg: "Logística EmpresarialProf. Sergio", ter: "Marketing e ConsumoProf. Aline", qua: "Gestão da Cadeia SuprimentosProf. Julia", qui: "Logística EmpresarialProf. Sergio", sex: "Contabilidade de CustosProf. Ricardo" }],
noite: [{ hora: "19:00 - 19:50", seg: "Gestão de Operações GlobaisProf. Julia", ter: "EmpreendedorismoProf. Ricardo", qua: "Análise MacroeconômicaProf. Sergio", qui: "EmpreendedorismoProf. Ricardo", sex: "Auditoria e ControladoriaProf. Sandra" }]
},
"2026.1": {
manha: [{ hora: "07:30 - 08:20", seg: "Introdução à Adm.Prof. Ricardo", ter: "Sociologia das Org.Prof. Sandra", qua: "Estatística BásicaProf. Sergio", qui: "Introdução à Adm.Prof. Ricardo", sex: "FilosofiaProf. Rita" }],
tarde: [{ hora: "13:30 - 14:20", seg: "Fundamentos de EconomiaProf. Sergio", ter: "História da AdministraçãoProf. Ricardo", qua: "Sociologia do TrabalhoProf. Sandra", qui: "História da AdministraçãoProf. Ricardo", sex: "Metodologia CientíficaProf. Rita" }],
noite: [{ hora: "19:00 - 19:50", seg: "Teorias EconômicasProf. Sergio", ter: "Matemática Pura AplicadaProf. Ricardo", qua: "Comunicação e EscritaProf. Aline", qui: "Teorias EconômicasProf. Sergio", sex: "Ética e SociedadeProf. Rita" }]
}
},
jogos: {
atual: {
manha: [{ hora: "07:30 - 08:20", seg: "História dos JogosProf. Carla", ter: "Lógica de JogosProf. Lucas", qua: "Desenho VetorialProf. Bruno", qui: "Lógica de JogosProf. Lucas", sex: "RoteirizaçãoProf. Amanda" }],
tarde: [{ hora: "13:30 - 14:20", seg: "Desenho AnatômicoProf. Bruno", ter: "Arquitetura de Game EnginesProf. Lucas", qua: "Roteiros para Mídias DigitaisProf. Amanda", qui: "Arquitetura de Game EnginesProf. Lucas", sex: "Fundamentos de Arte 2DProf. Carla" }],
noite: [{ hora: "19:00 - 19:50", seg: "Programação de Motores AvançadosProf. Lucas", ter: "Animação de Personagens 3DProf. Bruno", qua: "Design de Níveis ComplexosProf. Carla", qui: "Programação de Motores AvançadosProf. Lucas", sex: "Sonorização AplicadaProf. Amanda" }]
},
proximo: {
manha: [{ hora: "07:30 - 08:20", seg: "Modelagem 3DProf. Bruno", ter: "Roteiro e NarrativeProf. Carla", qua: "Motores de JogosProf. Diego", qui: "Modelagem 3DProf. Bruno", sex: "Programação de JogosProf. Lucas" }],
tarde: [{ hora: "13:30 - 14:20", seg: "Texturização de SuperfíciesProf. Bruno", ter: "Matemática para Vetores 3DProf. Diego", qua: "Inteligência Artificial JogosProf. Lucas", qui: "Texturização de SuperfíciesProf. Bruno", sex: "Interface UI/UX JogosProf. Carla" }],
noite: [{ hora: "19:00 - 19:50", seg: "Jogos Multiplayer RedeProf. Lucas", ter: "Física Realista ComputacionalProf. Diego", qua: "Produção Executiva GamesProf. Carla", qui: "Jogos Multiplayer RedeProf. Lucas", sex: "Projeto de Conclusão EstúdioProf. Bruno" }]
},
"2026.1": {
manha: [{ hora: "07:30 - 08:20", seg: "Pixel ArtProf. Bruno", ter: "Matemática para JogosProf. Diego", qua: "Game Design IProf. Carla", qui: "Pixel ArtProf. Bruno", sex: "Ética e JogosProf. Amanda" }],
tarde: [{ hora: "13:30 - 14:20", seg: "Game Design BásicoProf. Carla", ter: "Áudio Digital TeoriaProf. Amanda", qua: "Vetores FundamentosProf. Diego", qui: "Game Design BásicoProf. Carla", sex: "Expressão Artística 2DProf. Bruno" }],
noite: [{ hora: "19:00 - 19:50", seg: "Algoritmos para GamesProf. Lucas", ter: "História da Arte ClássicaProf. Carla", qua: "Introdução ao RoteiroProf. Amanda", qui: "Algoritmos para GamesProf. Lucas", sex: "Filosofia dos Meios DigitaisProf. Bruno" }]
}
}
};
// 2. CARREGAMENTO DOS DADOS ATRAVÉS DO LOCALSTORAGE DO SISTEMA
let bancoHorarios;
const dadosSalvos = localStorage.getItem('bancoHorarios');
if (dadosSalvos) {
bancoHorarios = JSON.parse(dadosSalvos);
} else {
bancoHorarios = bancoHorariosPadrao;
localStorage.setItem('bancoHorarios', JSON.stringify(bancoHorarios));
}
// 3. FUNÇÃO DE RE-RENDERIZAÇÃO ADAPTATIVA: Combina Curso, Semestre e o Turno para exibir dados únicos
function carregarTabelaHorarios(curso, semestre, turno) {
const corpoTabela = document.getElementById('corpoTabelaHorarios');
const tituloGrade = document.getElementById('tituloGrade');
const nomesCursos = { informatica: "Informática", adm: "Administração (ADM)", jogos: "Jogos Digitais", eletro: "EletroEletrônica" };
const nomesSemestres = { atual: "Semestre Atual", proximo: "Próximo Semestre", "2026.1": "Semestre Passado (2026.1)" };
const nomesTurnos = { manha: "Manhã", tarde: "Tarde", noite: "Noite" };
if (tituloGrade) {
tituloGrade.textContent = Horários e Disciplinas: ${nomesCursos[curso]} (${nomesSemestres[semestre]}) - Turno ${nomesTurnos[turno]};
}
if (!corpoTabela) return;
corpoTabela.innerHTML = "";
// A. Fluxo Primário: Tenta ler o arquivo XML completo que foi importado pelo Administrador
if (bancoHorarios[curso] && bancoHorarios[curso][semestre] && !bancoHorarios[curso][semestre].manha) {
bancoHorarios[curso][semestre].forEach(linha => {
const tr = document.createElement('tr');
tr.innerHTML = <td><strong>${linha.hora}</strong></td><td class="materia">${linha.seg}</td><td class="materia">${linha.ter}</td><td class="materia">${linha.qua}</td><td class="materia">${linha.qui}</td><td class="materia">${linha.sex}</td>;
corpoTabela.appendChild(tr);
});
return;
}
// B. Fluxo Secundário: Lê a estrutura do banco estático que criamos diferenciada por turno
if (bancoHorarios[curso] && bancoHorarios[curso][semestre] && bancoHorarios[curso][semestre][turno]) {
bancoHorarios[curso][semestre][turno].forEach(linha => {
const tr = document.createElement('tr');
tr.innerHTML = <td><strong>${linha.hora}</strong></td><td class="materia">${linha.seg}</td><td class="materia">${linha.ter}</td><td class="materia">${linha.qua}</td><td class="materia">${linha.qui}</td><td class="materia">${linha.sex}</td>;
corpoTabela.appendChild(tr);
});
} else {
corpoTabela.innerHTML = <tr><td colspan="6" style="color: red; padding: 20px;">Nenhum horário cadastrado para essa combinação.</td></tr>;
}
}
// 4. FUNÇÃO DE DISPARO INTERNO DOS EVENTOS DA TELA DO PORTAL
function atualizarVisualizacao() {
const cursoSelecionado = document.getElementById('filtroCurso').value;
const semestreSelecionado = document.getElementById('filtroSemestre').value;
const turnoSelecionado = document.getElementById('filtroTurno').value; // Captura dinamicamente o Turno
carregarTabelaHorarios(cursoSelecionado, semestreSelecionado, turnoSelecionado);
}
// Vincula os escutadores nos 3 filtros do dashboard do aluno
if (document.getElementById('filtroCurso')) document.getElementById('filtroCurso').addEventListener('change', atualizarVisualizacao);
if (document.getElementById('filtroSemestre')) document.getElementById('filtroSemestre').addEventListener('change', atualizarVisualizacao);
if (document.getElementById('filtroTurno')) document.getElementById('filtroTurno').addEventListener('change', atualizarVisualizacao);
// 5. EVENTO DE SUBMIT E VALIDAÇÃO DE PERFIL COM BASE NAS REGRAS DO SUAP
document.getElementById('loginForm').addEventListener('submit', function(event) {
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
// Validação de segurança em paralelo baseada na memória permanente de professores
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
// Fluxo do Aluno: Exibe o dashboard e monta a primeira tabela
document.body.classList.add('dashboard-ativo');
document.getElementById('loginContainer').style.display = 'none';
document.getElementById('dashboardContainer').style.display = 'block';
document.getElementById('dashMatricula').textContent = matricula;
document.getElementById('dashPerfil').textContent = perfil;
atualizarVisualizacao();
});
configurarBotaoSair();


