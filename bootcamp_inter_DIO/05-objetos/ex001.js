// definição de como é um carro
class Carro {
  marca;
  cor;
  gastoMedioPorkm;

  constructor(marca, cor, gastoMedioPorkm) {
    this.marca = marca;
    this.cor = cor;
    this.gastoMedioPorkm = gastoMedioPorkm;
  }
// calcular gasto do percurso do carro
  calcularGastoDePercurso(distanciaKm, precoCombustivelL){
    return distanciaKm * this.gastoMedioPorkm * precoCombustivelL;
  }
}

// definindo os carros
var uno = new Carro("Fiat", "Prata", 1 / 12);
var palio = new Carro("Fiat", "Preto", 1 / 10);

// imprime o Uno
console.log(uno);
//invocando método
console.log(uno.calcularGastoDePercurso(70,5));

console.log(palio);
//invocando método
console.log(palio.calcularGastoDePercurso(70,5));

