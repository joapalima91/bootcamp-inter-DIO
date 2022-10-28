const pessoa = {
    nome: 'João Paulo Lima',
    idade: 31,
    descrever: function() {
        console.log(`Meu nome é ${this.nome} e minha idade é ${pessoa.idade}!`);
    }
};

pessoa.descrever();
