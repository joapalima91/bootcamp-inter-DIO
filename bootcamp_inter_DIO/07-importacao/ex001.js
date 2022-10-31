/*
uma sala contem 5 alinos e paea cada aluno foi sorteado um número de 1 - 100.
Faça um programa que receba os 5 números sorteados para os alunos e mostre maior número sorteado.
*/

// "require" importa o que está sendo exportado no "funcoes-auxiliares.js" no "module.exports = {gets, print};"

const {gets, print} = require('./funcoes-auxiliares');

const quantidadeDeAlunos = gets();
let maiorValorEncontrado = 0;

for (let i = 0; i < quantidadeDeAlunos; i++) {
    const numeroSorteado = gets();
    if (numeroSorteado > maiorValorEncontrado) {
        maiorValorEncontrado = numeroSorteado;
    }
}

print(maiorValorEncontrado);