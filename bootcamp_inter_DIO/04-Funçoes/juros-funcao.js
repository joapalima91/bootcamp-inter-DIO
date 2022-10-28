function aplicarDesconto(valor, desconto) {
    return (valor - (valor * (desconto/100)));
}

function aplicarJuros(valor, juros) {
    return (valor + (valor * (juros/100)))
}

var precoEtiqueta = 100;
var formaDePagamento = 1;

function formaPagamento(formaDePagamento) {
    switch (formaDePagamento) {
        case 1:
          console.log(`O valor a ser pago é: ${aplicarDesconto(precoEtiqueta, 10)}`);
          break;
        case 2:
          console.log(`O valor a ser pago é: ${aplicarDesconto(precoEtiqueta, 15)}`);
          break;
        case 3:
          console.log(`O valor a ser pago é: ${precoEtiqueta}`);
          break;
        case 4:
          console.log(`O valor a ser pago é: ${aplicarJuros(precoEtiqueta, 10)}`);
          break;
        default:
          console.log(`Forma de pagamento não encontrado`);
          break;
      }
}

formaPagamento(formaDePagamento);


