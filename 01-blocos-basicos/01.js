// Escreva uma função que recebe
// um número e retorna `true` se ele
// é um numero de cartao de credito
// valido ou `false` se não.
//
// Dica: Algoritmo de Luhn.
function isValidCreditCard(card) {
  // Tira o que não é numero
  const validNumber = card.replace(/\D/g, "");

  // Transform em array
  let cardNumbers = validNumber.split("");

  // Inverte os números da array
  cardNumbers = cardNumbers.reverse();

  // Cria uma variavel pra somar os números do cartão
  let sum = 0;
  for (let i = 0; i < cardNumbers.length; i++) {
    // Garante que é um número
    let number = Number(cardNumbers[i]);

    // Verifica se a "casa" é impar
    if (i % 2) {
      // Se for impar multiplica por 2
      number = number * 2;
      // Caso o número seja maior que 9, subtrai 9 do valor
      // Ex:
      // number = 10; number
      // number = number - 9;
      // number = 1
      // number = number > 9 ? number - 9 : number;
      if (number > 9) {
        number = number - 9;
      }
    }
    sum += number;
  }
  const cardNumberMod = sum % 10;
  return cardNumberMod === 0;
}

// ou...
// function isValidCreditCard(card) {
//     let clean_card = card.replace(/\D/g, "").split("")
//     let aux = false
//     let sum = 0
//     for (let i = clean_card.length - 1; i >= 0; i--) {
//         let result = clean_card[i]
//         if (aux) {
//             result = (clean_card[i] * 2).toString()
//             if (result.length === 2) {
//                 result = parseInt(result[0]) + parseInt(result[1])
//             }
//         }
//         sum += parseInt(result)
//         aux = !aux
//     }
//     return sum > 0 && sum % 10 === 0
// }

const valid_credit_cards = [
  "799 273 987 13",
  "378734493671000",
  "3714-4963-5398-431",
  "5610XXX..5910--810!18250",
  "30569309025904",
  "385 2000   0023 237",
  "6011111111111117",
  "6011000990139424",
  "353 0111 3333 00000",
  "356600 woop woop 2020360505",
  "5555555555554444",
  "5105105105105100"
];

for (const valid of valid_credit_cards) {
  console.log(isValidCreditCard(valid));
}

const invalid_credit_cards = [
  "799 223 987 13",
  "3787786493671000",
  "3724-4963-5398-431",
  "5610XX3..5910--810!18250",
  "0305699025904",
  "385 2000   0011123 237",
  "6011111111117",
  "60190139424",
  "353 0111 3333 00100",
  "3566043 woop woop 2020360505",
  "55553555555554444",
  "5105205105105100"
];

for (const invalid of invalid_credit_cards) {
  console.log(isValidCreditCard(invalid));
}
