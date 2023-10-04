function logar() {
    var usuario = document.getElementById("usuario").value;
    var senha = document.getElementById("senha").value;
    var mensagemElement = document.getElementById("mensagem");

    if (usuario == localStorage.getItem("usuario") && senha == localStorage.getItem("senha")) {
        mensagemElement.textContent = "Bem-vindo de volta, " + localStorage.getItem("usuario") + "!";
        mensagemElement.style.color = "#00ff88";
        mensagemElement.style.fontSize = "30px";
        
        setTimeout(function () {
            location.href = "index.html";
        }, 5000);
    }

    else {
        mensagemElement.textContent = "Dados incorretos, tente novamente.";
        mensagemElement.style.color = "red";
        mensagemElement.style.fontSize = "30px";
    }
}

function cadastrar() {
    let usuario = document.getElementById("cadastro_usuario").value;
    let email = document.getElementById("cadastro_email").value;
    let senha = document.getElementById("cadastro_senha").value;

    localStorage.setItem("usuario", usuario);
    localStorage.setItem("email", email);
    localStorage.setItem("senha", senha);
}