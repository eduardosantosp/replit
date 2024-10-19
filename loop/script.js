const usuario = "Admin"
const senha = "1234"
let estalogado = false
let u, s = ""
while (!estalogado) {
  U = window.prompt("Digite o usuário: ")
  s = window.prompt("Digite a senha: ")
  if (u == usuario && s == senha) {
    estalogado = true
    window.alert("bem vindo!!" + usuario)
  }
  window.prompt("qual é o seu nome?: ")

/** desafio while 01 */
/**
 * crie um codigo que peça ao usuario para
 * adivinhar qual é meu numero da sorte
 * math.random() * 50
 * insira um limite maximo de 3 tentativas
 * caso o usuario exceda as tentas, quebre o programa
 * senão de os parabens e qtde de tentativas usadas
 */