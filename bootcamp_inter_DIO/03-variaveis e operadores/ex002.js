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

var peso = 70;
var altura = 1.70;
var imc = Number(peso / (Math.pow(altura,2)));

console.log(imc);

if (imc < 18.5) {
  console.log(`Você está abaixo do peso, seu IMC é ${imc.toFixed(2)}`);
} else if (imc >= 18.5 && imc < 25) {
  console.log(`Você está com peso normal, seu IMC é ${imc.toFixed(2)}`);
} else if (imc >= 25 && imc < 30) {
  console.log(`Você está acima do peso, seu IMC é ${imc.toFixed(2)}`);
} else if (imc >= 30 && imc < 40) {
  console.log(`Você está obeso, seu IMC é ${imc.toFixed(2)}`);
} else {
  console.log(`Você está com obesidade grave, seu IMC é ${imc.toFixed(2)}`);
}
