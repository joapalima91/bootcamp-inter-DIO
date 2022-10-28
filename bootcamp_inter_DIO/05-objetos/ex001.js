class Carro {
    marca;
    cor;
    gastoMedioPorkm;

    constructor(marca, cor, gastoMedioPorkm){
        this.marca = marca;
        this.cor = cor;
        this.gastoMedioPorkm = gastoMedioPorkm;
    }
}

var uno = new Carro('Fiat', 'Prata', 1/12);

console.log(uno);