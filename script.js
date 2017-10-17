var botao = document.getElementById("botao");
var modal = document.getElementById("modal");
var fundo = document.getElementById("fundo");
var fechar = document.getElementById("fechar");


botao.onclick = function() {
    fundo.classList.add("visivel");
}

fechar.onclick = function(){
    fundo.classList.remove("visivel");
}

fundo.onclick = function(e){
    if (e.target == fundo){
    fundo.classList.remove("visivel");
    }
}

//Login
var email = document.getElementById("email");
var senha = document.querySelector("#senha");
var formulario = document.querySelector("form");
formulario.onsubmit = function(){
    if((email.value !== "admin@admin.com") || (senha.value !== "admin")){
    alert("E-mail ou senha errada");
    modal.classList.add("erro");
    setTimeout(function(){
        modal.classList.remove("erro");
    }, 1000);
    return false;
}
localStorage.usuario = email.value;
}
console.log(email);
