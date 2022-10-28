// criando classe

// declarando a classe pessoa
class Pessoa {
    nome;
    idade;
    anoDeNascimento;

    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
        this.anoDeNascimento = 2022 - idade;
    }

    descrever() {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }
}

const joao = new Pessoa('João Lima', 31);
const eva = new Pessoa('Eva Barros', 29);

console.log(joao);
console.log(eva);