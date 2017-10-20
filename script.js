var botao = document.getElementById("botao");
var modal = document.getElementById("modal");
var fundo = document.getElementById("fundo");
var fechar = document.getElementById("fechar");
var fecharCadastro = document.getElementById("fecharCadastro");
var botaoCadastro = document.getElementById("botaoCadastro");
var fundoCadastro = document.getElementById("fundoCadastro");


botaoCadastro.onclick = function(){
    fundoCadastro.classList.add("visivel");
    
}

botao.onclick = function() {
    fundo.classList.add("visivel");
}

fecharCadastro.onclick = function(){
    fundoCadastro.classList.remove("visivel");
}

fechar.onclick = function(){
    fundo.classList.remove("visivel");
}

fundo.onclick = function(e){
    if (e.target == fundo){
    fundo.classList.remove("visivel");
    }
}

fundoCadastro.onclick = function(e){
    if (e.target == fundoCadastro){
        fundoCadastro.remove("visivel");
    }
}

//Login
var email = document.getElementById("email");
var senha = document.querySelector("#senha");
var formulario = document.querySelector("form");
formulario.onsubmit = function(){
    if((email.value !== localStorage.email) || (senha.value !== localStorage.senha)){
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


//Seleciona o formulario
var form = document.querySelector("form");

//Quando for enviar mandar os dados
form.onsubmit = function(e){
    //Seleciona os inputs
    var email = document.querySelector("#email");
    var senha = document.querySelector("#senha");

    //Seleciona a modal
    var modal = document.querySelector("#modal");

    //Verifica se o email e senha são permitidos
    var usuarios = JSON.parse(localStorage.usuarios);
    var correto;
    for (var i=0; i<usuarios.length; i++){
        if(usuarios[i].email === email.value && usuarios[i].senha === senha.value){
            correto = true;
            localStorage.usuario = usuarios[i].email;
            break;
        }
    }
    if(!correto){
        //Adiciona classe de erro na modal para mostrar um feedback
        modal.classList.add("erro");

        //Remove a classe com erro depois de fazer a animação
        setTimeout(function(){
            modal.classList.remove("erro");
        }, 1000);
        //Não deixa o usuário enviar o formulário
        return false;
    }
}