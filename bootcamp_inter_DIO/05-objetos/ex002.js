/* criar uma clsasse pessoa com nome peso e altura
calcular imc da pessoa
*/
class Pessoa {
  nome;
  peso;
  altura;

  constructor(nome, peso, altura) {
    this.nome = nome;
    this.peso = peso;
    this.altura = altura;
  }

  // método calcular imc
  calcularImc() {
    return this.peso / Math.pow(this.altura, 2);
  }

  //classificar o IMC
  classificarImc() {
    var imc = this.calcularImc();

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
}

var jose = new Pessoa("José", 70, 1.75);
console.log(jose);
console.log(jose.calcularImc());

var joao = new Pessoa("João", 80, 1.77);
console.log(joao);
console.log(joao.calcularImc());
console.log(joao.classificarImc());

