var nome = "";
var idade = "";

function enviaNome(){
  //Armazenando em uma variavel o nome do usuario
  nome = window.prompt("Como se lhama bb?");
}

function enviaIdade(){
  idade = window.prompt("Qual sua idade novinha?");
}

//função chama que é acionada com o botão 
function recebeFrase(){
    //Emitindo o Alerta!
    alert("Mi nuembre es "+nome );
    alert("Mi la edad es " +idade + " ( ͡° ͜ʖ ͡°) Só? no da nada ( ͡° ͜ʖ ͡°)");
}


