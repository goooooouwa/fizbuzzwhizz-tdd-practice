const fizBuzzWhizzModule = require('./fiz_buzz_whizz');

function testMatchFirstSpecialNumber(){
  const specialWord = {
    number: 3,
    word: 'Fizz'
  };
  const testNumber = 35;
  const expectedResult = 'Fizz';

  const result = fizBuzzWhizzModule.matchFirstSpecialNumber(testNumber, specialWord) === expectedResult ? 'test passed.' : 'test failed.';
  console.log(result);
}

testMatchFirstSpecialNumber();
