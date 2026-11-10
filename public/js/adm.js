// adm.js

verificarAcesso('Servidor');
configurarBotaoSair();

document.addEventListener("DOMContentLoaded", () => {
    atualizarContadorProfessores();
    
    // --- LÓGICA DO MENU RETRÁTIL DO PAINEL GERENCIAL ---
    const btnAlternar = document.getElementById("btnAlternarPainel");
    const blocoServidor = document.getElementById("blocoServidor");
    const setaPainel = document.getElementById("setaPainel");

    if (btnAlternar && blocoServidor && setaPainel) {
        btnAlternar.addEventListener("click", () => {
            // Adiciona ou remove a classe que controla o deslizamento e a rotação da seta
            blocoServidor.classList.toggle("aberto");
            setaPainel.classList.toggle("rodada");
        });
    }

    // --- CONTROLE DA JANELA FLUTUANTE (MODAL) ---
    const modal = document.getElementById("modalProf");
    const btnAbrir = document.getElementById("btnAbrirCadastro");
    const btnFechar = document.getElementById("btnFecharCadastro");

    if (btnAbrir && modal && btnFechar) {
        btnAbrir.addEventListener("click", () => {
            modal.style.display = "flex"; 
        });
        btnFechar.addEventListener("click", () => {
            modal.style.display = "none";  
            document.getElementById("msgCadastro").textContent = ""; 
        });
        window.addEventListener("click", (e) => {
            if (e.target === modal) modal.style.display = "none"; 
        });
    }
    
    // --- ENVIO DO FORMULÁRIO DE CADASTRO ---
    const formCadastro = document.getElementById("formCadastroProfessor");
    if (formCadastro) {
        formCadastro.addEventListener("submit", function(e) {
            e.preventDefault();
            
            const nome = document.getElementById("cadNome").value.trim();
            const matricula = document.getElementById("cadMatriculaProf").value.trim();
            const turma = document.getElementById("cadTurma").value;
            const msgCadastro = document.getElementById("msgCadastro");

            let professores = JSON.parse(localStorage.getItem("professores") || "[]");

            if (professores.some(p => p.matricula === matricula)) {
                msgCadastro.textContent = "Erro: Esta matrícula já está cadastrada!";
                msgCadastro.style.color = "#ff4d4d";
                return;
            }

            professores.push({ nome: nome, matricula: matricula, turma: turma });
            localStorage.setItem("professores", JSON.stringify(professores));

            msgCadastro.textContent = `Professor ${nome} cadastrado com sucesso!`;
            msgCadastro.style.color = "#28a745";
            formCadastro.reset();
            atualizarContadorProfessores();
        });
    }

    // =========================================================================
    // T5.2: LOGICA DE SINCRONIZAÇÃO COMPARTILHADA DO SUAP (COM ANIMAÇÃO)
    // =========================================================================
    const botoesSync = document.querySelectorAll(".btn-sync");
    const statusSyncTexto = document.querySelector(".sync-status em");

    if (botoesSync) {
        botoesSync.forEach(botao => {
            botao.addEventListener("click", function() {
                // Impede disparos simultâneos caso já esteja rodando uma sincronização
                if (this.classList.contains("sincronizando-suap")) return;

                const textoOriginal = this.textContent;
                this.classList.add("sincronizando-suap");
                this.textContent = "Sincronizando...";

                // Simula o delay de requisição da API do SUAP (2 segundos)
                setTimeout(() => {
                    this.classList.remove("sincronizando-suap");
                    this.textContent = textoOriginal;
                    
                    // Atualiza dinamicamente o marcador temporal com a hora local atual
                    if (statusSyncTexto) {
                        const agora = new Date();
                        statusSyncTexto.textContent = agora.toLocaleDateString('pt-BR') + " às " + agora.toLocaleTimeString('pt-BR');
                    }
                    alert("Dados integrados e sincronizados com o SUAP!");
                }, 2000);
            });
        });
    }
});

function atualizarContadorProfessores() {
    const professores = JSON.parse(localStorage.getItem("professores") || "[]");
    const cards = document.querySelectorAll(".card-numero");
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
                    hora: linha.querySelector("hora").textContent.trim(),
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
            status.style.color = "#28a745";

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
