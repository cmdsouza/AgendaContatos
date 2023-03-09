let cadastroForm = document.getElementById("cadastroForm");
cadastroForm.addEventListener("submit", (e) => {
    e.preventDefault();

    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;
    let senha = document.getElementById("senha").value;

    criarUsuario(nome, email, senha);
});


function criarUsuario(nome, email, senha) {
    json = JSON.stringify({
        "email": email,
        "senha": senha,
        "nome": nome,
        "foto": "data:image/png;base64,abcdefghijklmnopqrstuvwxyz"
    });

    url = "http://localhost:5000/v1/user";
    redirecionamento = "login.html";
    msgErro = 'Erro ao cadastrar o usuário';
    msgSucesso = "Usuário cadastrado com sucesso! Faça o seu login :)";

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