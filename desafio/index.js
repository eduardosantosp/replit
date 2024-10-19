
//1) crie um array pessoas
// deve um objeto com nome/idade/sexo
//2) Crie um array vazio (meninos)
//3) Crie um array vazio (meninas)
//4) Faça uma função que:
// Itere(loop) sobre o array pessoas
// Casso o atributo sexo seja == "F"
//5) Adicione o objeto atual ao array meninas (array.push(obj))
//6) Caso contrário, se for "M" adicione ao objeto (meninos))
//7) IMPRIMA OS OBJETOS> [pessoas, meninos, meninas]]
const pessoas = [
  {nome:"anna", idade:18, sexo:"F"},
  {nome:"bruno", idade:25, sexo:"M"},
  {nome:"claudia", idade:30, sexo:"F"},
  {nome:"creidson", idade:50, sexo:"M"},
  {nome:"rodolfo", idade:18, sexo:"M"},
]
const animais = [
  {raça: "cachorro", idade: 2, sexo: "M"},
  {raça: "onça", idade: 7, sexo: "F"},
  {raça: "puma", idade: 12, sexo: "M"},
  {raça: "gato", idade: 8, sexo: "F"},
  {raça: "cavalo", idade: 6, sexo: "M"}

]

const meninas = [];
const meninos = [];



for (pessoa of pessoas){
  pessoas.sexo == "F" 
    ? meninas.push(pessoa) 
    : meninos.push(pessoa);
}
function filtroPessoas(arrPessoas){
    if (typeof arrPessoas == "object"){
      for (pessoa of pessoas){
        pessoa.sexo == "F" 
          ? meninas.push(pessoa) 
          : meninos.push(pessoa); 
      }

    }
}
  filtroPessoas(pessoas)
  filtroPessoas(animais)

console.log("---MENINAS---");
console.log(meninas);
console.log("---MENINOS---");
console.log(meninos);
console.log("---ANIMAIS---");
console.log(animais);