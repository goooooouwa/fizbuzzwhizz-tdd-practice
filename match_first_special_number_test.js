const fizBuzzWhizzModule = require('./fiz_buzz_whizz');

function testMatchFirstSpecialNumber(){
  const fixture = {
    number: 3,
    word: 'Fizz'
  };
  const num = 35;
  const expectedResult = 'Fizz';

  const result = fizBuzzWhizzModule.matchFirstSpecialNumber(num, fixture) === expectedResult ? 'test passed.' : 'test failed.';
  console.log(result);
}

testMatchFirstSpecialNumber();
