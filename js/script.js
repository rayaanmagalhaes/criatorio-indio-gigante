function validarFormulario() {
    let nome = document.querySelector('input[name="nome"]').value;
    let email = document.querySelector('input[name="email"]').value;
    let mensagem = document.querySelector('textarea[name="mensagem"]').value;

    if (nome == "" || email == "" || mensagem == "") {
        alert("Por favor, preencha todos os campos obrigatórios.");
        return false;
    }

    alert("Formulário preenchido corretamente!");
    return true;
}function validarLogin() {
    let usuario = document.getElementById("usuario").value;
    let senha = document.getElementById("senha").value;
    let categoria = document.getElementById("categoria").value;


    if (usuario == "" || senha == "" || categoria == "") {
     alert("Preencha o usuário, a senha e selecione a categoria.");
        return false;
    }

    if (senha.length < 6) {
        alert("A senha deve possuir pelo menos 6 caracteres.");
        return false;
    }

    alert("Login validado com sucesso!");
    return false;
}