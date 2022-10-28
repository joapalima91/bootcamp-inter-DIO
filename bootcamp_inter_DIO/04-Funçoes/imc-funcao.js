/* calcular IMC
formuca IMC
IMC = peso / (altura * altura)

IMC em adultos, condição:
- abaixo de 18.5: abaixo do peso;
- entre 18.5 e 25: Peso normal;
- entre 25 e 30: Acima do peso;
- entre 30 e 40: Obeso;
- acima de 40: Obesidade Grave;

*/

// função para calcular o IMC
function calcularImc(peso, altura) {
  return peso / Math.pow(altura, 2);
}

// função para classificar o IMC, recebendo o resultado calculado na função calcularIMC
function classificarImc(imc) {
  if (imc < 18.5) {
    return `Você está abaixo do peso, seu IMC é ${imc.toFixed(2)}`;
  } else if (imc >= 18.5 && imc < 25) {
    return `Você está com peso normal, seu IMC é ${imc.toFixed(2)}`;
  } else if (imc >= 25 && imc < 30) {
    return `Você está acima do peso, seu IMC é ${imc.toFixed(2)}`;
  } else if (imc >= 30 && imc < 40) {
    return `Você está obeso, seu IMC é ${imc.toFixed(2)}`;
  } else {
    return `Você está com obesidade grave, seu IMC é ${imc.toFixed(2)}`;
  }
}

// codigo principal executando as outras funções, calcular e classificar IMC
function main() {
  var peso = 75;
  var altura = 1.75;
  var imc = calcularImc(peso, altura);

  console.log(imc);
  console.log(classificarImc(imc));
}

main();
