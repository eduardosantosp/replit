// set interval - executa "a cada" x milisegundos
// let n = 0
// const intervalo1 = setInterval(function() {
//   console.clear()
//   console.log("executando a cada 1 segundo", n);
//   n = n + 1
// }, 1000)

// // set timeout - executa "após" x milisegundos
// setTimeout(function() {
//   clearInterval(intervalo1)//stop no intervalo
//   window.alert("ja passou 5 segundos")//gera um pop up
//   location.href = "https://www.google.com.br"//redireciona para outra página
// }, 5000)

/** exercicio / desafio */
//gerar o numero aleatorio = math.random() * 10
// A) crie um programa que mostre um numero 
// randomico de 0 a 10 a cada 3 segundos 

// B) apos passados 15 segundos, encerre o intervalo 
// usando clearInterval e setTimeout

const intervalo2 = setInterval(function() {
  let aleatorio = Math.round(Math.random() * 10)
  console.log(aleatorio)
}, 3000) // 3 segundos 

setTimeout(function() {
  alert("pop um chato!!")
  clearInterval(intervalo2)
  location.href = "https://www.classroom.com.br" // redirecionamento
}, 15000) // 15 saegundos

