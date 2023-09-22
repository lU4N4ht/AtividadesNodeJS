/************************************************************************************************************************
 * Objetivo: Realizar calculo de imc
 * Data:15/09/2023
 * Autor: Luana
 * Versão: 1.0
*************************************************************************************************************************/

//Criando uma função para gerar IMC

function calularImc(alturaValor, pesoValor) {
    let altura = alturaValor;
    let massa = pesoValor;
    let imc;
    let status = false

    if (altura == ' ' || massa == ' ') {
        //Validação de caractéres vazios

        console.log('ERRO: POR FAVOR, INSIRA UM VALOR')

    } else if (isNaN(altura) || isNaN(massa)) {
        //Validação de inserção de números

        console.log('ERRO: INSIRA SOMENTE NÚMEROS')

    } else {

        //Conversão de String para número

        massa = Number(massa)
        altura = Number(altura)

        //Cálculo IMC

        imc = massa / (altura * altura)

        console.log("Seu IMC é: " + imc)

        if (imc < 18.5) {
            console.log("Você se encontra em uma situação de peso abaixo do normal!");
        } else if (imc >= 18.5 && imc < 25.0) {
            console.log("Você se encontra em uma situação de peso normal!");
        } else if (imc >= 25.0 && imc < 30.0) {
            console.log("Você se encontra em uma situação de sobrepeso!");
        } else if (imc >= 30.0 && imc < 35.0) {
            console.log("Você se encontra em uma situação de obesidade nível 1!");
        } else if (imc >= 35.0 && imc < 40.0) {
            console.log("Você se encontra em uma situação de obesidade nível 2!");
        } else if (imc > 40.0) {
            console.log("Você se encontra em uma situação de obesidade nível 3!");
        }
        status = true;
    }
    return status;
}

//Criando uma função para gerar média

function calularmédia(valorNota1, valorNota2, valorNota3, valorNota4, nomeDisciplina, nomeCurso, nomeProfessor) {
    let nota1 = valorNota1;
    let nota2 = valorNota2;
    let nota3 = valorNota3;
    let nota4 = valorNota4;
    let mediaFinal;
    let status = false

    if (nota1 == ' ' || nota2 == ' ' || nota3 == ' ' || nota4 == '') {
        //Validação de caractéres vazios

        console.log('ERRO: POR FAVOR, INSIRA UM VALOR')

    } else if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3) || isNaN(nota4)) {
        //Validação de inserção de números
        console.log('ERRO: INSIRA SOMENTE NÚMEROS')

    } else if (nota1 > 100 || nota2 > 100 || nota3 > 100 || nota4 > 100) {
        //Validação de nota maiores que 100

        console.log('ERRO: O VALOR MÁXIMO DE NOTA É 100')
    } else if (nota1 < 0 || nota2 < 0 || nota3 < 0 || nota4 < 0) {

        console.log('ERRO: O VALOR MÍNIMO DE NOTA É 0')

    } else {

        //Conversão de String para número
        nota1 = Number(nota1)
        nota2 = Number(nota2)
        nota3 = Number(nota3)
        nota4 = Number(nota4)

        //Cálculo média

        mediaFinal = (nota1 + nota2 + nota3 + nota4) / 4

        console.log("Sua média final é: " + mediaFinal)

        if (mediaFinal > 70.0) {
            console.log("Situação do  aluno : APROVADO");
        } else if (mediaFinal >= 50 && mediaFinal <= 69) {
            console.log("Situação do  aluno : EM EXAME");
        } else {
            console.log("Situação do  aluno : REPROVADO");
        }
        status = true;
    }
    return status;
}
const gerarTabuada = function (valorPrimeiraTabuada, valorSegundaTabuada, contadorInicial, contadorFinal) {
    let tabuadaInicial = valorPrimeiraTabuada;
    let tabuadaFinal = valorSegundaTabuada;
    let contInicial = contadorInicial;
    let contFinal = contadorFinal;
    let resultadoInicial;
    let resultadoFinal;
    let status = false;

    if (contFinal < contInicial) {
        //Validação para deixar os valores em ordem crescente

        contInicial = contadorFinal;
        contFinal = contadorInicial;
    }

    if (contInicial == ' ' || contFinal == ' ' || tabuadaInicial == ' ' || tabuadaFinal == ' ') {
        //Validação de caractéres vazios

        console.log('ERRO: POR FAVOR, INSIRA UM VALOR')

    } else if (isNaN(contInicial) || isNaN(contFinal) || isNaN(tabuadaInicial) || isNaN(tabuadaFinal)) {
        //Validação de inserção de números

        console.log('ERRO: INSIRA SOMENTE NÚMEROS')

    } else if (contInicial < 1 || contFinal > 50) {
        console.log('ERRO: O A TABUADA SÓ PODE SER CALCULADA ENTRE OS VALORES 2 E 50')
    } else if (tabuadaInicial < 2 || tabuadaInicial > 100 || tabuadaFinal < 2 || tabuadaFinal > 100) {
        console.log('ERRO: SÓ É POSSÍVEL CALCULAR A TABUADA DO 2 AO 100')
    } else {
        //Conversão de String para número
        contInicial = Number(contInicial)
        contFinal = Number(contFinal)

        for (; contInicial <= contFinal; contInicial++) {

            resultadoInicial = tabuadaInicial * contInicial;
            resultadoFinal = tabuadaFinal * contInicial;

            console.log(`${tabuadaInicial} x ${contInicial} = ${reslultado}`)
            console.log(`${tabuadaFinal} x ${contInicial} = ${reslultado}`)

            status = true;
        }
    }
    return status;
}
module.exports = {
    calularImc,
    calularmédia,
    gerarTabuada
}