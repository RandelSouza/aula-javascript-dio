/*let nome = "Randel Souza";
let idade = 25;
let idade2 = 10;
var frase = "Japão é o melhor time do mundo"; 
//alert(` ${nome} tem ${idade} anos`); // Template String

//lert(`${idade + idade2}`);
console.log(nome);
console.log(idade+idade2);
console.log(frase.replace("Japão", "Brasil").toLowerCase());

alert(frase.replace("Brasil", "Japão").toUpperCase())

// multiplicacao
let n1 = 2;
let n2 = 3;
console.log(n1 * n2);
console.log(n1 / n2);
console.log(n1 - n2);
console.log(n1 + n2);


let lista = ["maça", "pera", "uva", "manga", "banana"];
lista.push("laranja");
lista.push("maracuja");
console.log(lista);
console.log(lista.length);
lista.pop();
console.log(lista);
console.log(lista.length);
console.log(lista.reverse());
console.log(lista.toString());

let fruta = {nome: "uva", cor: "verde"};
console.log(fruta.nome);
console.log(fruta.cor);


let frutas = [
    {
        nome: "uva",
        cor: "vermelha"
    },
    {
        nome: "péra",
        cor: "verde"
    },
    {
        nome: "uva",
        cor: "violeta"
    }
];

console.log(frutas[0].nome, frutas[0].cor);
console.log(frutas[1].nome, frutas[1].cor);
console.log(frutas[2].nome, frutas[2].cor);

let idade = prompt("Qual a sua idade?"); // Nunca tinha usado!! Muito bom.

if( idade >= 18){
    console.log("Maior de idade");
}else{
    console.log("Menor de idade");
}

let count = 0;
// Laço de repetição while
while(count < 5){
    console.log(count);
    count++;
}

for(var i = 0; i <= 5; i++){
    console.log(i);
}
let date = new Date();
console.log(date.getMonth()+1);

var a = ["a", "a"];
console.log(a); 


function validarIdade(idade){
    if(idade >= 18) return true;
    return false;
}

let idade = prompt("Qual a sua idade?");
console.log(validarIdade(idade));
*/
document.getElementById("redirecionar").onclick = redirecionar;
document.getElementById("button").onclick = button;
document.getElementById("change").onmouseover = change;

function button(){
    //alert("Obrigado por clicar!");
    document.getElementById("phrase").innerHTML = "<b>Obrigrado por participar dessa aula</b>";
}

function redirecionar(){
    //window.open("https://www.linkedin.com/in/randelsouza/");
    window.location.href = "https://www.linkedin.com/in/randelsouza/";
}

function change(){
    document.getElementById("phrase").innerHTML = "<b>MouseOver Funcionando!!</b>"
}