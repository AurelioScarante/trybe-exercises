// Teste se o retorno de sum(4, 5) é 9
// Teste se o retorno de sum(0, 0) é 0
// Teste se a função sum lança um erro quando os parâmetros são 4 e "5"(string 5)
// Teste se a mensagem de erro é "parameters must be numbers" quando realizar a chamada sum(4, "5")

const sum = require('./sum');

describe('sum', () => {

  test('4 plus 5 equals 9', () => {
    expect(sum(4, 5)).toBe(9);
  });

  test('0 plus 0 equal 0', () => {
    expect(sum(0, 0)).toBe(0);
  });

  test('lança um erro se a string é passada', () => {
    expect(() => {
      sum(4, '5');
    }).toThrow();
  });

  test('mensagem de erro é "paarameters must be numbers"', () => {
    expect(() => {
      sum(4, '5');
    }).toThrow(/parameters must be numbers/);
  })

})
