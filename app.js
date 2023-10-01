var functions = require('./model/functions')

const { stdin } = require('process');
var readline = require('readline');
const { isStringObject } = require('util/types');

var entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log('-------------------------------------------')
console.log('---------  BEM-VINDO A APLICAÇÃO ----------')
console.log('-------------------------------------------')
console.log(' ')
console.log('1- Calcular IMC')
console.log('2- Gerenciar Média')
console.log('3- Calcular Tabuada')
console.log('4- Calcular Fatorial')
console.log('5- Gerenciar números ímpares e pares')
console.log('-------------------------------------------')
console.log(' ')

entradaDados.question('O que você deseja fazer [1, 2, 3, 4, 5] ?', function (escolha) {
    let escolhaUsuario = escolha

    escolhaUsuario = Number(escolhaUsuario)

    if (escolhaUsuario == ' ') {
        console.log('ERRO: Preencha TODOS os campos CORRETAMENTE')

    } else if (isNaN(escolhaUsuario)) {
        console.log('ERRO: Digite SOMENTE números');

    } else if (escolhaUsuario == 1) {

        entradaDados.question('Digite o seu peso: ', function (peso) {
            let pesoValor = peso.replace(',', '.')

            entradaDados.question('Digite sua altura: ', function (altura) {
                let alturaValor = altura.replace(',', '.')

                functions.calularImc(alturaValor, pesoValor)
            })
        })

    } else if (escolhaUsuario == 2) {

        entradaDados.question('Digite o nome do aluno: ', function (aluno) {
            let nomeAluno = aluno

            entradaDados.question('Digite o gênero do aluno [Feminino/Masculino]: ', function (generoA) {
                let generoAluno = generoA

                entradaDados.question('Digite o nome do professor: ', function (professor) {
                    let nomeProfessor = professor

                    entradaDados.question('Digite o gênero do professor [Feminino/Masculino]: ', function (generoP) {
                        let generoProfessor = generoP

                        entradaDados.question('Digite o nome do curso: ', function (curso) {
                            let nomeCurso = curso

                            entradaDados.question('Digite o nome da disciplina: ', function (disciplina) {
                                let disciplinaNome = disciplina

                                entradaDados.question('Digite a primeira nota do aluno [0-100]: ', function (nota1) {
                                    let primeiraNota = nota1.replace(',', '.')

                                    entradaDados.question('Digite a segunda nota do aluno [0-100]: ', function (nota2) {
                                        let segundaNota = nota2.replace(',', '.')

                                        entradaDados.question('Digite a terceira nota do aluno [0-100]: ', function (nota3) {
                                            let terceiraNota = nota3.replace(',', '.')

                                            entradaDados.question('Digite a quarta nota do aluno [0-100]: ', function (nota4) {
                                                let quartaNota = nota4.replace(',', '.')

                                                functions.calularmédia(nomeAluno, generoAluno, nomeProfessor, generoProfessor, nomeCurso, disciplinaNome, primeiraNota, segundaNota, terceiraNota, quartaNota)



                                            })
                                        })
                                    })
                                })
                            })
                        })
                    })
                })
            })
        })

    } else if (escolhaUsuario == 3) {

        entradaDados.question('Digite o valor da tabuada incicial: ', function (tabuada1) {
            let valorPrimeiraTabuada = tabuada1

            entradaDados.question('Digiteo valor da tabuada final: ', function (tabuada2) {
                let valorSegundaTabuada = tabuada2

                entradaDados.question('Digiteo valor do contador inicial: ', function (contInicial) {
                    let contadorInicial = contInicial

                    entradaDados.question('Digiteo valor do contador final: ', function (contFinal) {
                        let contadorFinal = contFinal

                        functions.gerarTabuada(valorPrimeiraTabuada, valorSegundaTabuada, contadorInicial, contadorFinal)
                    })
                })
            })
        })

    } else if (escolhaUsuario == 4) {

        entradaDados.question('Digite o valor a ser fatorado: ', function (numero) {
            let numeroFatorial = numero.replace(',', '.')

            functions.gerarFatorial(numeroFatorial)
        })

    } else if (escolhaUsuario == 5) {

        console.log('-------------------------------------------')
        console.log('1- Gerenciar números pares')
        console.log('2- Gerenciar números ímpares')
        console.log('3- Gerenciar ambos')
        console.log('-------------------------------------------')

        entradaDados.question('Escolha o que deseja fazer: ', function (escolha) {
            let escolhaFuncao = escolha

                entradaDados.question('Insira o valor inicial: ', function (valor1) {
                   let valorInicial = valor1
                    
                    entradaDados.question('Insira o valor final: ', function (valor2) {
                        let valorFinal = valor2
                        functions.verificarParesEImpares(escolhaFuncao, valorInicial, valorFinal) 
                    })
                })
        })
    } else {
        console.log('ERRO: Opção INVÁLIDA')

    }

})
