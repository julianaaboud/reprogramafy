//Seleciona o formulário
var formCadastro = fundoCadastro.querySelector("form");
//Quando for enviar mandar os dados
formCadastro.onsubmit = function(e){
    //Seleciona os inputs
    var emailCadastro = document.querySelector("#emailCadastro");
    var senhaCadastro = document.querySelector("#senhaCadastro");
    var nomeCadastro = document.querySelector("#nomeCadastro");

var modalCadastro = document.querySelector("#modalCadastro");


//localStorage.email = "juliana.aboud@gmail.com";
//localStorage.setItem("email", "juliana.aboud@gmail.com");

    var usuarios = JSON.parse(localStorage.usuarios || "[]");



usuarios.push({
    nome: nomeCadastro.value,
    email: emailCadastro.value,
    senha: senhaCadastro.value,
});

localStorage.usuarios = JSON.stringify(usuarios);

//localStorage.email = emailCadastro.value;
//localStorage.senha = senhaCadastro.value;
}


/*formCadastro = document.querySelector("form");
formulario.onsubmit = function(e){
    localStorage.email = emailCadastro.value;
    localStorage.senha = senhaCadastro.value;
}*/






