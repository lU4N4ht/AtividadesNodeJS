/************************************************************************************************************************
 * Objetivo: Realizar funções para cálculos variados
 * Data:15/09/2023
 * Autor: Luana
 * Versão: 1.0
*************************************************************************************************************************/

//Criando uma função para gerar IMC

function calularImc(alturaValor, pesoValor) {
    let altura = String(alturaValor).replace(',', '.');
    let massa = String(pesoValor).replace(',', '.');
    let imc;
    let status = false

    //Validação de caractéres vazios
    if (altura == ' ' || massa == ' ') {

        console.log('ERRO: POR FAVOR, INSIRA UM VALOR!')

        //Validação de inserção de números
    } else if (isNaN(altura) || isNaN(massa)) {

        console.log('ERRO: INSIRA SOMENTE NÚMEROS!')

    } else {
        //Conversão de String para número

        massa = Number(massa)
        altura = Number(altura)

        //Cálculo IMC
        imc = massa / (altura * altura)

        console.log("Seu IMC é: " + imc)

        //Validação de classificação com base no IMC

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

//Criando uma função para gerar média inicial

function calularmédia(valorNota1, valorNota2, valorNota3, valorNota4) {
    let nota1 = String(valorNota1).replace(',', '.');
    let nota2 = String(valorNota2).replace(',', '.');
    let nota3 = String(valorNota3).replace(',', '.');
    let nota4 = String(valorNota4).replace(',', '.');
    let mediaFinal;
    let status = false

    //Validação de caractéres vazios
    if (nota1 == ' ' || nota2 == ' ' || nota3 == ' ' || nota4 == '') {

        console.log('ERRO: POR FAVOR, INSIRA UM VALOR')

        //Validação de inserção de números
    } else if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3) || isNaN(nota4)) {

        console.log('ERRO: INSIRA SOMENTE NÚMEROS')

        //Validação de nota maiores que 100
    } else if (nota1 > 100 || nota2 > 100 || nota3 > 100 || nota4 > 100) {

        console.log('ERRO: O VALOR MÁXIMO DE NOTA É 100')

        //Validação de notas menores que 0
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

        //Validação de situação do aluno
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
//Criando função para média do exame 

function calcularMediaExame(valorExame, mediaAnterior, nomeDisciplina, nomeCurso, nomeProfessor, nomeAluno, sexoAluno, sexoProfessor) {
    let notaExame = String(valorExame).replace(',', '.')
    let media = String(mediaAnterior).replace(',', '.')
    let mediaFinal;
    let alunoNome = nomeAluno;
    let professorNome = nomeProfessor;
    let cursoNome = nomeCurso;
    let disciplinaNome = nomeDisciplina;
    let generoProfessor = String(sexoProfessor).toLocaleLowerCase();
    let generoAluno = String(sexoAluno).toLocaleLowerCase();
    let pronomeAluno, pronomeProfessor;
    let status = false


    if (isNaN(notaExame) || notaExame == '' || notaExame > 100 || notaExame < 0) {

        console.log('ERRO: NOTA DO EXAME INVÁLIDA!')

    } else if (isNaN(media) || media == '' || media > 100 || media < 0) {

        console.log('ERRO: INSIRA MÉDIA ANTERIOR INVÁLIDA!')

    } else{

    notaExame = Number(notaExame)
    media = Number(media)

    mediaFinal = (notaExame + media) / 2

    if (mediaFinal >= 60) {

        console.log("Situação do  aluno : APROVADO");

    } else {

     console.log("Situação do  aluno : REPROVADO");

    }


    status = true;

    }

    return status;
}
//Criando função para gerar uma tabuada

const gerarTabuada = function (valorPrimeiraTabuada, valorSegundaTabuada, contadorInicial, contadorFinal) {
    let tabuadaInicial = valorPrimeiraTabuada;
    let tabuadaFinal = valorSegundaTabuada;
    let contInicial = contadorInicial;
    let contFinal = contadorFinal;
    let resultadoInicial;
    let resultadoFinal;
    let status = false;

    //Validação para deixar os valores em ordem crescente
    if (contFinal < contInicial) {
        contInicial = contadorFinal;
        contFinal = contadorInicial;
    }

    //Validação de caractéres vazios
    if (contInicial == ' ' || contFinal == ' ' || tabuadaInicial == ' ' || tabuadaFinal == ' ') {

        console.log('ERRO: POR FAVOR, INSIRA UM VALOR')

        //Validação de inserção de números
    } else if (isNaN(contInicial) || isNaN(contFinal) || isNaN(tabuadaInicial) || isNaN(tabuadaFinal)) {

        console.log('ERRO: INSIRA SOMENTE NÚMEROS')

    } else if (contInicial < 1 || contFinal > 50) {

        console.log('ERRO: O A TABUADA SÓ PODE SER CALCULADA ENTRE OS VALORES 2 E 50')

    } else if (tabuadaInicial < 2 || tabuadaInicial > 100 || tabuadaFinal < 2 || tabuadaFinal > 100) {

        console.log('ERRO: SÓ É POSSÍVEL CALCULAR A TABUADA DO 2 AO 100')

    } else {

        //Conversão de String para número
        contInicial = Number(contInicial)
        contFinal = Number(contFinal)

        //Cálculo da tabuada
        for (; contInicial <= contFinal; contInicial++) {

            resultadoInicial = tabuadaInicial * contInicial;
            resultadoFinal = tabuadaFinal * contInicial;

            console.log("Tabuada do: " + "[" + tabuadaInicial + "]")
            console.log(`${tabuadaInicial} x ${contInicial} = ${reslultado}`)
            console.log("Tabuada do: " + "[" + tabuadaFinal + "]")
            console.log(`${tabuadaFinal} x ${contInicial} = ${reslultado}`)

            status = true;
        }
    }
    return status;
}

//Exportando a tabuada
module.exports = {
    calularImc,
    calularmédia,
    gerarTabuada
}