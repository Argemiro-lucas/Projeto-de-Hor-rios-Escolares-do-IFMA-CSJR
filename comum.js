/**
 * Verifica se o perfil salvo na sessão bate com o esperado pela página.
 * Se não bater, redireciona de volta para o login.
 * Se bater, já preenche o cabeçalho com matrícula/perfil.
 */
function verificarAcesso(perfilEsperado) {
    const perfil = sessionStorage.getItem('perfil');
    const matricula = sessionStorage.getItem('matricula');

    if (perfil !== perfilEsperado) {
        window.location.href = 'index.html';
        return null;
    }

    document.getElementById('dashMatricula').textContent = matricula;
    document.getElementById('dashPerfil').textContent = perfil;

    return { perfil, matricula };
}

/**
 * Configura o botão "Sair": limpa a sessão e volta para o login.
 */
function configurarBotaoSair() {
    document.getElementById('btnSair').addEventListener('click', function() {
        sessionStorage.removeItem('matricula');
        sessionStorage.removeItem('perfil');
        window.location.href = 'index.html';
    });
}
