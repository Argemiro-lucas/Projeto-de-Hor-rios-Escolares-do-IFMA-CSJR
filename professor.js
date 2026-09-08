verificarAcesso('Professor');
configurarBotaoSair();

document.getElementById('btnImprimirHorario').addEventListener('click', function() {
    window.print();
});
