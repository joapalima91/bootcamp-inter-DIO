/* 
Programa que recebe 3 notas de um aluno e faz a média do semestre na faculdade
calcule e imprima sua média e sua classificação
meida = (nota 1 + nota 2 + nota 3) / 3;

Classificação:
media menor que 5, reprovado;
media entre 5 e 7, recuperação;
media >= 7, aprovado;

*/

var n1 = Number(5);
var n2 = Number(3);
var n3 = Number(7);
var media = Number(n1 + n2 + n3) / 3;

if (media < 5) {
  console.log(`O aluno está reporvado. Sua média é: ${media.toFixed(2)}`);
} else if (media >= 5 && media < 7) {
  console.log(`O aluno está de recuperação. Sua média é: ${media.toFixed(2)}`);
} else {
  console.log(`O aluno passo de semestre! Sua média é: ${media.toFixed(2)}`);
}
