/*  calcular o valor pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento.
Utilize os códios da tabela a seguir para ler qual condiçai de pagamento escolhida e efetuar o cálculo adequado.

Código condição de pagamento:
1 - A vista Débito, recebe 10% de desconto;
2 - A vista no dinheiro ou Pix, recebe 15% de desconto;
3 - Em duas vezes, preço normal de etiqueta sem juros;
4 - a cima de duas vezes, preço normal de etiqueta mais juros de 10%

*/
var precoEtiqueta = 100;
var formaDePagamento = 4;

switch (formaDePagamento) {
  case 1:
    console.log(`O valor a ser pago é: ${precoEtiqueta - (precoEtiqueta * 0.1)}`);
    break;
  case 2:
    console.log(`O valor a ser pago é: ${precoEtiqueta - (precoEtiqueta * 0.15)}`);
    break;
  case 3:
    console.log(`O valor a ser pago é: ${precoEtiqueta}`);
    break;
  case 4:
    console.log(`O valor a ser pago é: ${precoEtiqueta + (precoEtiqueta * 0.1)}`);
    break;
  default:
    console.log(`Forma de pagamento não encontrado`);
    break;
}
