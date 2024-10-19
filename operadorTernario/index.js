//operador ternário serve para fazer escolha do fluxo de uma condição, ou seja, podemos substituir o uso do IF/ELSE por ele.
//EX0: <variavel> = <condição> ? <valor se verdadeiro> : <valor se falso>

// const idade = 17
// if(idade >= 18){
//   console.log("permita a entrada")
// } else{
//   console.log("acesso negado")
// }
// //opção ternária
// const passe = idade >= 18 ? "permita a entrada" : "acesso negado"
// console.log(passe)
//ternário com multiplos valores
const operador = "*";

//function calcula(n1, n2, op){
//  const res = op === "+" ? n1 + n2
//   : op === "-" ? n1 - n2
//   : op === "*" ? n1 * n2
//   : n1 / n2
//  return res
//}
//console.log(calcula(9, 9, operador))
//ternário com multiplos valores
function calcula(n1, n2, op) {
  let res = 0;
  if (op === "+") {
    res = n1 + n2;
  } else if (op === "*") {
    res = n1 * n2;
  } else if (op === "-") {
    res = n1 - n2;
  } else {
    res = n1 / n2;
  }
  return res;
}
console.log(calcula(9, 9, operador));

/**desafio */
//1) crie um array pessoas
//deve conter um objeto com nome/idade/sexo
//2) crie um array vazio que se chame (meninos)
//2) crie um array vazio que se chame (meninas)
// faça uma função que:
// itere(loop) sobre o array pessoas
//casso o atributo sexo seja == "F"
//adicione o objeto atual ao array meninas (array.push(obj))
//caso contrario, se for "M" adicione ao objeto(meninos))
//imprima os objetos> [pessoas, meninos, meninas]]
const menino = {
  nome: "stxzz",
  idade: 18,
  sexo: "M"
}
const menina ={
  nome: "anna",
  idade: 19,
  sexo: "F"
}
const menino[]
const menina[]
function(interar)