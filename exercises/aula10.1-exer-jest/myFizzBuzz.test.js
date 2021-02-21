// 1- Faça uma chamada com um número divisível por 3 e 5 e verifique se o retorno é o esperado
// 2- Faça uma chamada com um número divisível por 3 e verifique se o retorno é o esperado
// 3- Faça uma chamada com um número divisível por 5 e verifique se o retorno é o esperado
// 4- Faça uma chamada com um número que não é divisível por 3 ou 5 e verifique se o retorno é o esperado
// 5- Faça uma chamada com um parâmetro que não é um número e verifique se o retorno é o esperado.

const myFizzBuzz = require('./myFizzBuzz');

describe('verifica se a function retorna', () => {
  it('se divisiveis por 3 e 5 retorna fizzbuzz', () => {
    expect(myFizzBuzz(30)).toBe('fizzbuzz');
  });

  it('se divisivel por 3 retorna fizz', () => {
    expect(myFizzBuzz(9)).toBe('fizz');
  });

  it('se divisivel por 5 retorna buzz', () => {
    expect(myFizzBuzz(20)).toBe('buzz');
  });

  it('se não divisivel por 3 e 5 retorna o próprio número', () => {
    expect(myFizzBuzz(16)).toBe(16);
  });

  it('se não for number return false', () => {
    expect(myFizzBuzz('8')).toBe(false);
  })

})