// adm.js

// Verifica o acesso e configura o cabeçalho/logout através do comum.js
verificarAcesso('Servidor');
configurarBotaoSair();

// Executa as configurações do formulário e contadores assim que o HTML carregar
document.addEventListener("DOMContentLoaded", () => {
    atualizarContadorProfessores();
    
    const formCadastro = document.getElementById("formCadastroProfessor");
    if (formCadastro) {
        formCadastro.addEventListener("submit", function(e) {
            e.preventDefault();
            
            const nome = document.getElementById("cadNome").value.trim();
            const matricula = document.getElementById("cadMatriculaProf").value.trim();
            const turma = document.getElementById("cadTurma").value;
            const msgCadastro = document.getElementById("msgCadastro");

            // Busca os professores já salvos ou cria uma lista nova vazia
            let professores = JSON.parse(localStorage.getItem("professores") || "[]");

            // Evita cadastrar duas pessoas com a mesma matrícula
            if (professores.some(p => p.matricula === matricula)) {
                msgCadastro.textContent = "Erro: Esta matrícula já está cadastrada!";
                msgCadastro.style.color = "#ff4d4d";
                return;
            }

            // Adiciona o novo professor à lista
            professores.push({ 
                nome: nome, 
                matricula: matricula, 
                turma: turma
            });
            
            // Grava de volta no localStorage
            localStorage.setItem("professores", JSON.stringify(professores));

            // Mostra mensagem de sucesso e limpa os campos digitados
            msgCadastro.textContent = `Professor ${nome} cadastrado com sucesso!`;
            msgCadastro.style.color = "#28a745";
            formCadastro.reset();
            
            // Atualiza o contador de professores cadastrados no card do topo
            atualizarContadorProfessores();
        });
    }
});

// Função para atualizar o número de professores cadastrados no card do painel
function atualizarContadorProfessores() {
    const professores = JSON.parse(localStorage.getItem("professores") || "[]");
    const cards = document.querySelectorAll(".card-numero");
    // Altera o segundo card do seu layout ("Professores cadastrados")
    if (cards && cards[1]) {
        cards[1].textContent = professores.length;
    }
}

// =========================================================================
// SEU CÓDIGO ORIGINAL DE IMPORTAÇÃO (XML para localStorage)
// =========================================================================
document.getElementById('formImportar').addEventListener('submit', function(e) {
    e.preventDefault();
    const input = document.getElementById('arquivoXML');
    const status = document.getElementById('statusImportacao');
    const arquivo = input.files[0];

    if (!arquivo) {
        status.textContent = "Selecione um arquivo XML antes de importar.";
        status.style.color = "#ffcccc";
        return;
    }

    const leitor = new FileReader();

    leitor.onload = function(evento) {
        try {
            const parser = new DOMParser();
            const xmlDoc = parser.parseFromString(evento.target.result, "application/xml");

            const erro = xmlDoc.querySelector("parsererror");
            if (erro) throw new Error("XML mal formatado.");

            const grade = xmlDoc.querySelector("grade");
            const curso = grade.getAttribute("curso");
            const semestre = grade.getAttribute("semestre");

            const linhasXML = xmlDoc.querySelectorAll("linha");
            const novasLinhas = [];

            linhasXML.forEach(linha => {
                function formatarCampo(tag) {
                    const texto = linha.querySelector(tag).textContent;
                    const [materia, professor] = texto.split("|");
                    return `${materia.trim()}<span class='professor'>${professor.trim()}</span>`;
                }

                novasLinhas.push({
                    hora: WebKitCSSMatrix = linha.querySelector("hora").textContent.trim(),
                    seg: formatarCampo("segunda"),
                    ter: formatarCampo("terca"),
                    qua: formatarCampo("quarta"),
                    qui: formatarCampo("quinta"),
                    sex: formatarCampo("sexta")
                });
            });

            const bancoHorarios = JSON.parse(localStorage.getItem('bancoHorarios') || '{}');
            if (!bancoHorarios[curso]) bancoHorarios[curso] = {};
            bancoHorarios[curso][semestre] = novasLinhas;

            localStorage.setItem('bancoHorarios', JSON.stringify(bancoHorarios));

            status.textContent = `Grade de "${curso}" (${semestre}) importada com sucesso! Já disponível para os alunos.`;
            status.style.color = "#b6e6c2";

        } catch (erro) {
            status.textContent = "Erro ao importar: verifique o formato do arquivo XML.";
            status.style.color = "#ffcccc";
            console.error(erro);
        }
    };

    leitor.readAsText(arquivo);
});

// =========================================================================
// SEU CÓDIGO ORIGINAL DE EXPORTAÇÃO (localStorage para XML)
// =========================================================================
document.getElementById('formExportar').addEventListener('submit', function(e) {
    e.preventDefault();
    const curso = document.getElementById('exportCurso').value;
    const semestre = document.getElementById('exportSemestre').value;
    const bancoHorarios = JSON.parse(localStorage.getItem('bancoHorarios') || '{}');
    const dados = bancoHorarios[curso] && bancoHorarios[curso][semestre];

    if (!dados) {
        alert("Não há dados para exportar nesse curso/semestre.");
        return;
    }

    function limparCampo(campo) {
        const div = document.createElement('div');
        div.innerHTML = campo;
        const materia = div.childNodes[0].textContent.trim();
        const professor = div.querySelector('.professor') ? div.querySelector('.professor').textContent.trim() : "";
        return `${materia}|${professor}`;
    }

    let xml = `<?xml version="1.0" encoding="UTF-8"?>\n`;
    xml += `<grade curso="${curso}" semestre="${semestre}">\n`;

    dados.forEach(linha => {
        xml += `  <linha>\n`;
        xml += `    <hora>${linha.hora}</hora>\n`;
        xml += `    <segunda>${limparCampo(linha.seg)}</segunda>\n`;
        xml += `    <terca>${limparCampo(linha.ter)}</terca>\n`;
        xml += `    <quarta>${limparCampo(linha.qua)}</quarta>\n`;
        xml += `    <quinta>${limparCampo(linha.qui)}</quinta>\n`;
        xml += `    <sexta>${limparCampo(linha.sex)}</sexta>\n`;
        xml += `  </linha>\n`;
    });

    xml += `</grade>`;

    const blob = new Blob([xml], { type: "application/xml" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `grade_${curso}_${semestre}.xml`;
    link.click();
    URL.revokeObjectURL(url);
});
