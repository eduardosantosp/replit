const banana ={
 cor: "amarela",
  casca: true
  peso: 0,5,
  paisesDeOrigem: ["Brasil", "Argentina", "Chile"],
  //                  1            2         3
  descasca: function (){
    this.casca = false;
  return `banana descascada com sucesso!`;
  // console.log("funciona?"); nunca vai rodar.....
  },
};
  console.log(banana);
console.log("--------------------");
console.log(Object.keys(banana)); // retorna chaves
console.log("--------------------");
console.log(Object.values(banana)); // retorna os valores 
console.log(banana.casca);
console.log(banana.descasca());
//é possivel fazer uma interação em objetos
// for, for in for of

for(let banana of paisesDeOrigem){
const nome = banana.nome
const tipo = banana.origem
console.log(`nome: ${nome.toUpperCase()} - tipo: ${tipo.toUpperCase()}`);
}

for (let banana = 0; i < banana .length; i++) {
 console.log(paisesDeOrigem[i])
//
