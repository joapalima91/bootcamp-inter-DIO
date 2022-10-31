// crie um programa que seja capaz de percorrer uma listra e imprimir cada número par encontrado

const num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 33, 44];

for (let i = 0; i < num.length; i++) {
  const numero = num[i];
  if (numero % 2 === 0) {
    //console.log(numero + ' é par');
    console.log(`${numero} é par`)
  }
}
