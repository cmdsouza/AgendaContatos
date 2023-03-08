/*

https://github.com/dkayke-aulas/agenda-contatos-backend

*/

/* Pega as informações formulário de cadastro 
let cadastroForm = document.getElementById("cadastroForm");
cadastroForm.addEventListener("submit", (e) => {
    e.preventDefault();

    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;
    let senha = document.getElementById("senha").value;

    criarUsuario(nome, email, senha);
});


function criarUsuario(nome, email, senha) {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
        "email": email,
        "senha": senha,
        "nome": nome,
        "foto": "data:image/png;base64,abcdefghijklmnopqrstuvwxyz"
    });

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw
    };

    fetch("http://localhost:5000/v1/user", requestOptions)
        .then(response => response.text())
        .then(result => redirecionar("login.html"))
        .catch(error => alert('error', error));
}*/

/* Pega as informações formulário de login */
let loginForm = document.getElementById("loginForm");
loginForm.addEventListener("submit", (e) => {
    e.preventDefault();

    let email = document.getElementById("email").value;
    let senha = document.getElementById("senha").value;

    loginUsuario(email, senha);
});

function loginUsuario(email, senha){
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
        "email": email,
        "senha": senha
    });

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
    };

    fetch("http://localhost:5000/v1/auth", requestOptions)
        .then(response => response.text())
        .then(result => redirecionar("agenda.html"))
        .catch(error => console.log('error', error));
}

function redirecionar(endereco) {
    window.location.href = endereco;
}