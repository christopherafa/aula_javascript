
function clicou(){
  document.getElementById("agradecimento").innerHTML="<b>Obrigado por clicar!</b>";
  //console.log(document.getElementById("agradecimento"));
  //alert("Obrigado por clicar");
}

function redirecionar(){
  //window.open("https://www.google.com.br"); //abre uma nova aba
  window.location.href = "https://www.google.com.br"; //não abre uma nova aba
}

function trocar(elemento) {
  //document.getElementById("mouse").innerHTML = "Obrigado por passar o mouse!";
  elemento.innerHTML = "Obrigado por passar o mouse!";
}

function voltar(elemento){
  //document.getElementById("mouse").innerHTML = "Passe o mouse aqui";
  elemento.innerHTML = "Paase o mouse aqui";
}

function load(){
  alert("Página carregada");
}

function change(elemento){
  console.log(elemento.value);
}

/*
function soma(n1,n2){
  return n1 + n2;
}

console.log(soma(5,10));

function validarIdade(idade){
  if(idade >= 18){
    validar = true;
  }else{
    validar = false;
  }
  return validar;
}
var idade = prompt("Qual sua idade?");
console.log(validarIdade(idade));
*/

/*
var data = new Date();
console.log(data.getMonth()+1); //começa de zero
console.log(data.getDate()); //dia do mês
console.log(data.getDay()); //dia da semana de 0 a 6
console.log(data.getFullYear());
console.log(data.getMinutes());
console.log(data.getHours());
*/

/*
var count;

for(count = 0; count <= 5; count++){
  console.log(count);
}
*/

/*
var count = 0;
while(count < 5){
  console.log(count);
  count ++;
}
*/

/*
var idade = prompt("Qual sua idade");
if(idade >= 18){
  alert("Maior de idade");
}
else{
  alert("Menor de idade");
};
*/

/*
var frutas = [{nome:"maça", cor:"vermelha"},{nome:"uva",cor:"roxa"}];
console.log(frutas);
alert(frutas[1].nome);
*/
/*
var fruta = {nome:"maça", cor:"vermelha"};
console.log(fruta.nome);
alert(fruta.cor);
*/
/*

var list = ["maça", "pera", "laranja"];
list.push("uva");
list.pop();
console.log(list);
console.log(list.length);
console.log(list.join(" -- "));
console.log(list.reverse());
console.log(list.toString());
console.log(list[0])
console.log(list.toString()[0]);

*/

/*
var nome = "Chistopher Albert";
var n1 = 35;
var n2 = 10;
var frase = "Japão é o melhor time do mundo."
//alert(nome + " tem " + idade + " anos.");
//alert(idade + idade2);
console.log(nome);
console.log(n1 + n2);
console.log(frase.replace("Japão","Brasil"));
console.log(frase.toUpperCase());
console.log(frase.toLowerCase());
*/
