let loginForm = document.getElementById("loginForm");
loginForm.addEventListener("submit", (e) => {
    e.preventDefault();

    let email = document.getElementById("email").value;
    let senha = document.getElementById("senha").value;

    loginUsuario(email, senha);
});

function loginUsuario(email, senha){

    json = JSON.stringify({
        "email": email,
        "senha": senha
    });

    url = "http://localhost:5000/v1/auth";
    redirecionamento = "agenda.html";
    msgErro = 'Erro ao autenticar';
    msgSucesso = "Bem-vindo!";

    requisicaoAPI(json, url, redirecionamento, msgErro, msgSucesso);
}

function requisicaoAPI(json, url, redirecionamento, msgErro, msgSucesso){
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = json;

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
    };

    fetch(url, requestOptions)
        .then(response => response.text())
        .then(result => redirecionar(redirecionamento, msgSucesso, result))
        .catch(error => console.log(msgErro, error));
}

function exibirMensagemSucesso(){
    document.getElementById("msgSucesso").innerHTML = sessionStorage.mensagemSistema;
}

function redirecionar(endereco, msgSucesso, result) {
    sessionStorage.mensagemSistema = msgSucesso + " | Resposta da API: " + result + " | Tipo: " + typeof result;
    window.location.href = endereco;
    exibirMensagemSucesso();
}