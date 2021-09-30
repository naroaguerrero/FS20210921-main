/* eslint-disable no-undef */
describe('Unit test with a simple calculator and Jasmine', function () {     

    // Generate a random number each time that the tests are executed
    var number1 = Math.floor(Math.random() * 10);
    var number2 = Math.floor(Math.random() * 10);

    it(number1 + ' + ' +number2 + ' = ' + (number1 + number2), function () {
        expect(Calculadora.suma(number1, number2)).toBe(number1 + number2);
    });

    it(number1 + ' - ' +number2 + ' = ' + (number1 - number2), function () {
        expect(Calculadora.resta(number1, number2)).toBe(number1 - number2);
    });

    it(number1 + 'x' + number2 + ' = ' + (number1*number2), function () {
       expect(Calculadora.multiplicacion(number1, number2)).toBe(number1 * number2);
    });

    it(number1 + '/' + number2 + ' = ' + (number2 && number1/number2), function () {
        expect(Calculadora.division(number1, number2)).toBe(number2 && number1/number2);
    });
});