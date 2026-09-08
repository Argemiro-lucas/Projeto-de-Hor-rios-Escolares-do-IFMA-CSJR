verificarAcesso('Servidor');
configurarBotaoSair();

// Importação de XML (lê o arquivo e grava no localStorage)
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
            status.style.color = "#b6e6c2";

        } catch (erro) {
            status.textContent = "Erro ao importar: verifique o formato do arquivo XML.";
            status.style.color = "#ffcccc";
            console.error(erro);
        }
    };

    leitor.readAsText(arquivo);
});

// Exportação de XML (lê o localStorage e gera o arquivo)
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
