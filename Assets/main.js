var nome = prompt("Informe seu nome:");

function logar() {
    var usuario = document.getElementById("usuario").value;
    var senha = document.getElementById("senha").value;
    var mensagemElement = document.getElementById("mensagem");

    if (usuario == nome && senha == "1234") {
        mensagemElement.textContent = "Bem-vindo de volta, " + nome + "!";
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
