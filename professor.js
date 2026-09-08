// professor.js

// Verifica o acesso exigindo o perfil 'Professor' conforme seu comum.js
verificarAcesso('Professor');
configurarBotaoSair();

// Configura a impressão do horário
document.getElementById('btnImprimirHorario').addEventListener('click', function() {
    window.print();
});

// Inicialização da página e filtros
document.addEventListener("DOMContentLoaded", () => {
    const nomeProfessorLogado = sessionStorage.getItem("nomeProfessorLogado");
    const perfil = sessionStorage.getItem("perfil");
    const selectDocente = document.getElementById("filtroDocente");
    
    if (!selectDocente) return;

    // 1. Popula o Select de Docentes dinamicamente baseado nos professores que o Admin cadastrou
    const professoresCadastrados = JSON.parse(localStorage.getItem("professores") || "[]");
    selectDocente.innerHTML = '<option value="">-- Escolha um professor --</option>';
    
    professoresCadastrados.forEach(prof => {
        const option = document.createElement("option");
        option.value = prof.nome;
        option.textContent = prof.nome;
        selectDocente.appendChild(option);
    });

    // 2. Se quem entrou for um Professor cadastrado, seleciona ele e bloqueia o campo para ele ver só os seus horários
    if (perfil === "Professor" && nomeProfessorLogado) {
        selectDocente.value = nomeProfessorLogado;
        selectDocente.disabled = true; 
        carregarHorariosDoProfessor(nomeProfessorLogado);
    }

    // Ouvinte para buscas manuais (caso o campo seja liberado ou usado por outro perfil)
    selectDocente.addEventListener("change", function() {
        carregarHorariosDoProfessor(this.value);
    });
});

// Função que varre o banco de dados de XMLs do Admin procurando as aulas desse professor
function carregarHorariosDoProfessor(nomeProfessor) {
    const corpoTabela = document.getElementById("corpoTabelaProfessor");
    const tituloGrade = document.getElementById("tituloGradeProfessor");
    
    if (!corpoTabela) return;

    if (!nomeProfessor) {
        corpoTabela.innerHTML = '<tr><td colspan="6" style="color:#999;padding:20px;">Selecione um docente para ver a grade.</td></tr>';
        if (tituloGrade) tituloGrade.textContent = "Grade Consolidada do Docente";
        return;
    }

    if (tituloGrade) tituloGrade.textContent = `Grade Consolidada do Docente: ${nomeProfessor}`;

    // Pega o banco de horários populado pelos XMLs do painel do Admin
    const bancoHorarios = JSON.parse(localStorage.getItem('bancoHorarios') || '{}');
    
    // Cria uma estrutura padrão em branco com 24 horários vazios (conforme os turnos do IFMA)
    const horariosPadrao = [];

    // Varre todos os cursos e semestres salvos para achar as aulas que contêm o nome do professor
    for (let curso in bancoHorarios) {
        for (let semestre in bancoHorarios[curso]) {
            const linhasGrade = bancoHorarios[curso][semestre];
            
            linhasGrade.forEach((linhaXML, index) => {
                // Se o esqueleto da tabela ainda não tiver essa linha de hora criada, inicializa ela vazia
                if (!horariosPadrao[index]) {
                    horariosPadrao[index] = { hora: linhaXML.hora, seg: "-", ter: "-", qua: "-", qui: "-", sex: "-" };
                }

                // Função auxiliar que limpa as tags do XML e verifica se este professor ministra a aula
                function filtrarDia(celulaConteudo, cursoNome) {
                    if (celulaConteudo.toLowerCase().includes(nomeProfessor.toLowerCase())) {
                        const divTemporaria = document.createElement("div");
                        divTemporaria.innerHTML = celulaConteudo;
                        const materiaNome = divTemporaria.childNodes[0].textContent.trim();
                        return `<strong>${materiaNome}</strong><br><small style="color:#28a745">${cursoNome.toUpperCase()}</small>`;
                    }
                    return null;
                }

                const segAula = filtrarDia(linhaXML.seg, curso);
                const terAula = filtrarDia(linhaXML.ter, curso);
                const quaAula = filtrarDia(linhaXML.qua, curso);
                const quiAula = filtrarDia(linhaXML.qui, curso);
                const sexAula = filtrarDia(linhaXML.sex, curso);

                if (segAula) horariosPadrao[index].seg = segAula;
                if (terAula) horariosPadrao[index].ter = terAula;
                if (quaAula) horariosPadrao[index].qua = quaAula;
                if (quiAula) horariosPadrao[index].qui = quiAula;
                if (sexAula) horariosPadrao[index].sex = sexAula;
            });
        }
    }

    // Renderiza as linhas finais filtradas na tabela HTML do professor
    corpoTabela.innerHTML = "";
    horariosPadrao.forEach(linha => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
            <td><strong>${linha.hora}</strong></td>
            <td>${linha.seg}</td>
            <td>${linha.ter}</td>
            <td>${linha.qua}</td>
            <td>${linha.qui}</td>
            <td>${linha.sex}</td>
        `;
        corpoTabela.appendChild(tr);
    });
}
