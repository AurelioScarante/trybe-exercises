// Verifique se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado
// Verifique se a chamada myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]
// Faça uma chamada para a função myRemove e verifique se o array passado por parâmetro não sofreu alterações
// Verifique se a chamada myRemove([1, 2, 3, 4], 5) retorna o array esperado

const myRemove = require('./myRemove');

describe('myRemove', () => {
  test('verifica se função retorna array esperado', () => {
    expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
  });

  test('ao receber um array não retorna o array [1, 2, 3, 4]', () => {
    expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
  });

  test('verifica se o array passado por parâmetros não sofreu alterações', () => {
    const arr = [1, 2, 3, 4,];
    myRemove(arr, 1)
    expect(arr).toEqual([1, 2, 3, 4]);
  });

  test('verifica se a saída é o array esperado', () => {
    expect(([1, 2, 3, 4], 5)).toEqual(([1, 2, 3, 4], 5));
  });

})
