var functions = require('./model/functions')

const { stdin } = require('process');
var readline = require('readline');
const { isStringObject } = require('util/types');

var entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

entradaDados.question('Digite o seu peso: ', function (peso) {
    let pesoValor = peso

    entradaDados.question('Digite sua altura: ', function (altura) {
        let alturaValor = altura

        functions.calularImc(alturaValor, pesoValor)

        entradaDados.close();
    })
})