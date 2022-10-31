// "require" importa o que está sendo exportado no "funcoes-auxiliares.js" no "module.exports = {gets, print};"

const funcoes = require('./funcoes-auxiliares');

console.log(funcoes);

// imprime dados no método gets criado no "funcoes-auxiliares.js"
console.log(funcoes.gets());

