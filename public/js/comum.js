/**
 * Verifica se o perfil salvo na sessão bate com o esperado pela página.
 * Se não bater, redireciona de volta para o login.
 * Se bater, já preenche o cabeçalho com matrícula/perfil.
 */
function verificarAcesso(perfilEsperado) {
    const perfil = sessionStorage.getItem('perfil');
    const matricula = sessionStorage.getItem('matricula');

    // Se o perfil não for o esperado, manda de volta para o login
    if (perfil !== perfilEsperado) {
        window.location.href = 'index.html';
        return null;
    }

    // Preenche o cabeçalho se os elementos existirem na tela
    const elMatricula = document.getElementById('dashMatricula');
    const elPerfil = document.getElementById('dashPerfil');
    
    if (elMatricula) elMatricula.textContent = matricula;
    if (elPerfil) elPerfil.textContent = perfil;

    return { perfil, matricula };
}

/**
 * Configura o botão "Sair": limpa a sessão e volta para o login.
 */
function configurarBotaoSair() {
    const btnSair = document.getElementById('btnSair');
    if (btnSair) {
        btnSair.addEventListener('click', function() {
            sessionStorage.removeItem('matricula');
            sessionStorage.removeItem('perfil');
            window.location.href = 'index.html';
        });
    }
}
