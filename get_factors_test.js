const fizBuzzWhizzModule = require('./fiz_buzz_whizz');

function testGetFactors(){
  const testNumber = 35;
  const specialWords = [{
    number: 3,
    word: 'Fizz'
  },{
    number: 5,
    word: 'Buzz'
  },{
    number: 7,
    word: 'Whizz'
  }];

  const result = (fizBuzzWhizzModule.getFactors(testNumber, specialWords).length === 2) ? 'test passed.' : 'test failed.';
  console.log(result);
}

testGetFactors();
