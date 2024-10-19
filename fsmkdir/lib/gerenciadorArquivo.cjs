// criar pastas com nodejs
const fs = require('fs')
const path = require('path')

// criando com caminhos estaticos
function pastaEstatica(nomePasta) {
  fs.mkdir(nomePasta, function(err) {
    console.log("erro ao criar a pasta")
    console.log(err)
  })
}
// criando com caminhos dinamicos
function pastaDinamica(nomePasta){
  if (!fs.existsSync(nomePasta)) {
    if (!fs.existsSync(path.join(__dirname, nomePasta))){
    fs.mkdirSync(path.join(__dirname, nomePasta))
      console.log("---criado com sucesso---")
      return true
} else {
      console.log(`a pasta ${nomePasta} já existe`)
      return false
  }
 }
}


module.exports = {pastaEstatica, pastaDinamica}