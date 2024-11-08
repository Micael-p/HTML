function validar() {
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const nomeErro = document.getElementById('nomeErro');
    
    nomeErro.textContent = '';

    if (nome.trim() === '') {
        nomeErro.textContent = 'O nome é obrigatório.';
        return false;
    }

    if (email.trim() === '') {
        nomeErro.textContent = 'O email é obrigatório.';
        return false;
    }

    window.location.href = 'Pag_Formulario.html';
    return false;
}
