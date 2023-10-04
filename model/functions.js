/************************************************************************************************************************
 * Objetivo: Realizar funções para cálculos variados
 * Data:15/09/2023
 * Autor: Luana
 * Versão: 1.0
*************************************************************************************************************************/

//Criando uma função para gerar IMC

function calularImc(alturaValor, pesoValor) {
    let altura = Number(alturaValor);
    let massa = Number(pesoValor);
    let imc;
    let status = false

    //Validação de caractéres vazios
    if (altura == ' ' || massa == ' ') {

        console.log('ERRO: POR FAVOR, INSIRA UM VALOR!')

        //Validação de inserção de números
    } else if (isNaN(altura) || isNaN(massa)) {

        console.log('ERRO: INSIRA SOMENTE NÚMEROS!')

    } else {
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
function calularmédia(nomeAluno, generoAluno, nomeProfessor, generoProfessor, nomeCurso, disciplinaNome, primeiraNota, segundaNota, terceiraNota, quartaNota) {
    let alunoNome = nomeAluno;
    let alunoGenero = String(generoAluno).toLocaleLowerCase();
    let professorNome = nomeProfessor;
    let professorGenero = String(generoProfessor).toLocaleLowerCase();
    let cursoNome = nomeCurso;
    let nomeDisciplina = disciplinaNome;
    let nota1 = Number(primeiraNota);
    let nota2 = Number(segundaNota);
    let nota3 = Number(terceiraNota);
    let nota4 = Number(quartaNota);
    let pronomeAluno, pronomeProfessor, situacaoAluno, pronome;
    let mediaFinal;
    let status = false

    //Validação de caractéres vazios nas notas
    if (nota1 == ' ' || nota2 == ' ' || nota3 == ' ' || nota4 == '') {
        console.log('ERRO: Algum campo de nota aparenta estar VAZIO. Preencha TODOS os campos de nota CORRETAMENTE!')

        //Validação de inserção de números nas notas
    } else if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3) || isNaN(nota4)) {
        console.log('ERRO: Preencha TODOS os campos de nota com SOMENTE números!')

        //Validação de notas maiores que 100
    } else if (nota1 > 100 || nota2 > 100 || nota3 > 100 || nota4 > 100) {
        console.log('ERRO: O valor MÁXIMO para as notas é 100!')

        //Validação de notas menores que 0
    } else if (nota1 < 0 || nota2 < 0 || nota3 < 0 || nota4 < 0) {
        console.log('ERRO: O valor MÍNIMO para as notas é 0')


    } else {

        //Validação de caractéres vazios nas informações
        if (alunoNome == ' ' || alunoGenero == ' ' || professorNome == ' ' || professorGenero == ' ' || cursoNome == ' ' || nomeDisciplina == ' ') {
            console.log('ERRO: Algum campo de informação aparenta estar VAZIO. Preencha TODOS os campos CORRETAMENTE!')

            //Validação de inserção de números nas informações
        } else if (isNaN(alunoNome) && isNaN(alunoGenero) && isNaN(professorNome) && isNaN(professorGenero) && isNaN(cursoNome) && isNaN(nomeDisciplina)) {

            //Validação do gênero do aluno
            if (alunoGenero == 'feminino') {
                pronomeAluno = 'A aluna'

            } else if (alunoGenero == 'masculino') {
                pronomeAluno = 'O aluno'

            } else {
                console.log('ERRO: Gênero do aluno INVÁLIDO!')

            }

            //Validação do gênero do professor
            if (professorGenero == 'feminino') {
                pronomeProfessor = 'Professora'

            } else if (professorGenero == 'masculino') {
                pronomeProfessor = 'Professor'

            } else {
                console.log('ERRO: Gênero do professor INVÁLIDO!')

            }

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
                situacaoAluno = 'APROVADO'

            } else if (mediaFinal >= 50 && mediaFinal <= 69) {
                situacaoAluno = 'EM EXAME'

            } else {
                situacaoAluno = 'REPROVADO'

            }
          
            console.log(pronomeAluno + " " + alunoNome + " foi " + situacaoAluno + " na disciplina " + nomeDisciplina);
            console.log("Curso: " + nomeCurso);
            console.log(professorGenero + " " + nomeProfessor);
            console.log("Notas do aluno: " + nota1 + " " + nota2 + " " + nota3 + " " + nota4);
    
            status = true;
        } else {

            console.log('ERRO: Impossível preencher os campos de informação com NÚMEROS!')

        }

        return status;
    }
}

//Criando função para gerar uma tabuada
function gerarTabuada(valorPrimeiraTabuada, valorSegundaTabuada, contadorInicial, contadorFinal) {
    let tabuadaInicial = Number(valorPrimeiraTabuada);
    let tabuadaFinal = Number(valorSegundaTabuada);
    let contInicial = Number(contadorInicial);
    let contFinal = Number(contadorFinal);
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

        console.log('ERRO: Algum campo aparenta estar VAZIO. Preencha TODOS os campos CORRETAMENTE!')

        //Validação de inserção de números
    } else if (isNaN(contInicial) || isNaN(contFinal) || isNaN(tabuadaInicial) || isNaN(tabuadaFinal)) {

        console.log('ERRO: INSIRA SOMENTE NÚMEROS')

    } else if (contInicial < 1 || contFinal > 50) {

        console.log('ERRO: O A TABUADA SÓ PODE SER CALCULADA ENTRE OS VALORES 1 E 50')

    } else if (tabuadaInicial < 2 || tabuadaInicial > 100 || tabuadaFinal < 2 || tabuadaFinal > 100) {

        console.log('ERRO: SÓ É POSSÍVEL CALCULAR A TABUADA DO 2 AO 100')

    } else {

        //Cálculo da tabuada
        for (; contInicial <= contFinal; contInicial++) {

            resultadoInicial = tabuadaInicial * contInicial;
            resultadoFinal = tabuadaFinal * contInicial;

            console.log("Tabuada do: " + "[" + tabuadaInicial + "]")
            console.log(`${tabuadaInicial} x ${contInicial} = ${resultadoInicial}`)
            console.log("Tabuada do: " + "[" + tabuadaFinal + "]")
            console.log(`${tabuadaFinal} x ${contInicial} = ${resultadoFinal}`)

            status = true;
        }

    }
    return status;
}

//Criando função para gerar um fatorial
function gerarFatorial(numeroFatorial) {
    let numero = Number(numeroFatorial)
    let status = false
    let resultado = 1;
    let count = 1;

    if (numero == ' ') {
        console.log('ERRO: Algum campo aparenta estar VAZIO. Preencha TODOS os campos CORRETAMENTE!')

    } else if (isNaN(numero)) {
        console.log('ERRO: Preencha TODOS os campos com SOMENTE números!')

    } else if (numero == 0) {
        console.log('ERRO: Não existe fatorial de ZERO!')

    } else if (numero == 1) {
        console.log('ERRO: Não é possível calcular o fatorial de UM!')

    } else if (numero < 0) {
        console.log('ERRO: Insira APENAS valores positivos!')

    } else {

        console.log("Fatorial de: " + "[" + numero + "]")
        for (count = 1; count <= numero; count++) {
            resultado *= count;

            console.log(resultado)
        }

        status = true;

    }
    return status
}

//Criando função para verificar números pares e ímpares (versão onde o usuário não pode inserir o valor inicial maior que o final)
function verificarParesEImpares(escolhaUsuario, valorInicial, valorFinal){
    let numeroInicial = Number(valorInicial)
    let numeroFinal = Number(valorFinal)
    let escolha = Number(escolhaUsuario)
    let status = false;
    let count = 0;

    if(numeroInicial == '' || numeroFinal == '' || escolha == ''){
        console.log('ERRO: Todos os valores devem ser preenchidos')

        
    } else if(isNaN(numeroInicial) || isNaN(numeroFinal) || isNaN(escolha)){
        console.log('ERRO: Preencha TODOS os campos com SOMENTE números!')

    }else if (numeroInicial < 0 || numeroInicial > 500){
        console.log('ERRO: O valor inicial deve estar ENTRE 0 e 500!')

    }else if (numeroFinal < 100 || numeroFinal > 1000){
        console.log('ERRO: O valor inicial deve estar ENTRE 100 e 1000')
  
    }else if (numeroInicial == numeroFinal){
        console.log('ERRO: Os valores DEVEM ser DIFERENTES!')
       
    }else if (numeroFinal < numeroInicial){
        console.log('ERRO: O valor inicial deve ser MENOR que o valor final!')
        
    } else{

        if(escolhaUsuario == 1){

            for (; numeroInicial < numeroFinal; numeroInicial++) {
                if (numeroInicial % 2 == 0) {
                  console.log(numeroInicial);
                  count++;
                }
                numeroInicial++;
            }
            for (; numeroInicial < numeroFinal; numeroFinal++) {
                if (numeroFinal % 2 == 0) {
                  console.log(numeroFinal);
                  count++;
                }
                numeroFinal++;
            }

        } else if(escolhaUsuario == 2){

            for (; numeroInicial < numeroFinal; numeroInicial++) {
                if (numeroInicial % 2 == 1) {
                  console.log(numeroInicial);
                  count++;
                }
                numeroInicial++;
            }

            for (; numeroInicial < numeroFinal; numeroFinal++) {
                if (numeroFinal % 2 == 1) {
                  console.log(numeroFinal);
                  count++;
                }
                numeroFinal++;
            }

        } else if (escolhaUsuario == 3){

            for (; numeroInicial < numeroFinal; numeroInicial++) {
                if (numeroInicial % 2 == 0) {
                  console.log(numeroInicial);
                  count++;
                }
                numeroInicial++;
            }

            for (; numeroInicial < numeroFinal; numeroFinal++) {
                if (numeroFinal % 2 == 1) {
                  console.log(numeroFinal);
                  count++;
                }
                numeroFinal++;
            }

        } else{
            console.log('ERRO: Escolha uma opção VÁLIDA!')
        }
    }
}

//Exportando as funcoes
module.exports = {
    calularImc,
    calularmédia,
    gerarTabuada,
    gerarFatorial,
    verificarParesEImpares
}