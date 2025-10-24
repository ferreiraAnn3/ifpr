//1. Tres maneiras de exibir o conteudo

console.log("JavaScript conectado"); //aparece no console

//alert("Tads") // aparece fora do console e primeiro, literalmente com um alerta

// ALTERACAO: Comentei a linha abaixo para nao apagar seu HTML durante os testes.
 document.write("Texto inserido via JavaScript") 

//2. Declaracao de variaveis e concatenacao

//let nomeUsuario = "Anne"; // em uso
let saborBolo = "Floresta Negra"; //em uso
let valorUsado = "100,00"; //em uso
// var valorUsado = 100,00 / fora de uso

// ALTERACAO: Comentei a linha abaixo porque a variavel 'nomeUsuario' ainda nao existe neste ponto.
// alert(nomeUsuario + " fez o bolo " + saborBolo + " e gastou R$" + valorUsado) 

//3. Interacao por meio do comando PROMPT, funçao TYPEOF e funçao NUMBER

let nomeUsuario = prompt("Qual o seu nome?") //interacao com usuario
alert ("Seja bem vindo(a) " + nomeUsuario + "!");

let nascimentoUsuario = Number(prompt("Qual o seu ano de nascimento?")) //number sinaliza que e numero
alert ("Se voce ja fez aniversario neste ano, voce possui " + (2025 - nascimentoUsuario) + " anos de idade. Senao voce possui " + (2025 - nascimentoUsuario - 1)+ ".");

//4. Estrutura de repeticao: if e else

// --- AQUI ESTA A CORRECAO PRINCIPAL ---

// Primeiro, calculamos a idade base
let idade = 2025 - nascimentoUsuario;

// Depois, perguntamos sobre o aniversario
let jaFezNiver = confirm("Clique em 'OK' se voce ja fez aniversario em 2025, ou 'Cancelar' se ainda nao fez.");

// Se a pessoa ainda NAO fez aniversario, subtraimos 1 da idade
if (jaFezNiver == false) {
    idade = idade - 1; // ou idade--;
}

// AGORA, com a idade correta, fazemos a verificacao final
if (idade < 18) {
    alert("Voce nao pode acessar a esse conteudo, porque sua idade calculada e " + idade + " anos!");
} else {
    alert("Voce pode ter acesso a esse conteudo, porque sua idade calculada e " + idade + " anos.");
}


//5. Estruturas de repeticao (LOOPS)

///WHILE | VERIFICA SE E VERDADEIRO ANTES DE EXECUTAR | PRE-TESTE
let indice = 1;

while(indice <= 10){ // verifica se e verdadeiro para entao executar
    console.log("O indice " + indice);
    indice++;
}

///DO WHILE | EXECUTA ANTES DE VERIFICAR SE E VERDADEIRO | POS-TESTE

// CORRECAO 1: Removido o 'let' para nao redeclarar a variavel.
indice = 11;

do{
    // Este alerta vai aparecer UMA VEZ com o valor 11, como no exemplo original.
    alert("O indice do vale " + indice);
    indice++;
} while(indice <= 10);

// O 'let' aqui esta correto, pois cria uma variavel 'indice' que so existe DENTRO do for.
for(let indice = 1; indice <= 10; indice++){
    console.log("O indice vale " + indice);
}

//6. Arrays e metodos de manipulacao

let frutas=["banana", "maca", "pera"]//array = (vetor/matriz unidimensional)

frutas.push("morango")//adiciona elementos no FINAL
frutas.unshift("laranja")//adiciona elementos no INICIO do array

frutas.pop()//remove elementos do final do array
frutas.shift()//remove elementos do inicio do array

let lista = frutas.indexOf("pera")//retorna de um elemento no arrey
console.log("a pera esta na posicao "+ lista + " do array.")

frutas.sort(); //ordena em ordem alfabetica
frutas.reverse(); //inverte a ordem

for(let fruta of frutas){
    console.log(fruta);
}