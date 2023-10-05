function logar() {
    var email = document.getElementById("email").value;
    var usuario = document.getElementById("usuario").value;
    var senha = document.getElementById("senha").value;
    var mensagemElement = document.getElementById("mensagem");

    if (email == localStorage.getItem("email") && senha == localStorage.getItem("senha") || usuario == localStorage.getItem("usuario")) {
        mensagemElement.textContent = "Bem-vindo de volta, " + localStorage.getItem("usuario") + "!";
        mensagemElement.style.color = "#00ff88";
        mensagemElement.style.fontSize = "30px";
        
        setTimeout(function () {
            location.href = "../../index.html";
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
    let mensagemElement = document.getElementById("mensagem_cadastro").value;

    localStorage.setItem("usuario", usuario);
    localStorage.setItem("email", email);
    localStorage.setItem("senha", senha);
    
    if(cadastro_usuario == cadastro_usuario && cadastro_email == cadastro_email && cadastro_senha == cadastro_senha) {
        mensagem_cadastroElement.textContent = "Cadastrado com sucesso, estamos redirecionando você para a página de login!";
        mensagemElement.style.color = "#00ff88";
        mensagemElement.style.fontSize = "30px";
        setTimeout(function () {
            location.href = "login.html";
        }, 5000);
    }

    else {
        mensagemElement.textContent = "Dados incorretos, tente novamente.";
        mensagemElement.style.color = "red";
        mensagemElement.style.fontSize = "30px";
    }
}