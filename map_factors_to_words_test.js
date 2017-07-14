const fizBuzzWhizzModule = require('./fiz_buzz_whizz');

function testMapFactorsToWordsWith2Words(){
  const factors = [{
    number: 3,
    word: 'Fizz'
  },{
    number: 4,
    word: 'Whizz'
  }];
  const expectedResult = 'FizzWhizz';
  const result = fizBuzzWhizzModule.mapFactorsToWords(factors) === expectedResult ? 'test passed.' : 'test failed.';
  console.log(result);
}

function testMapFactorsToWordsWithNoWord(){
  const factors = [];
  const expectedResult = null;
  const result = fizBuzzWhizzModule.mapFactorsToWords(factors) === expectedResult ? 'test passed.' : 'test failed.';
  console.log(result);
}

function testMapFactorsToWordsWith1Word(){
  const factors = [{
    number: 3,
    word: 'Fizz'
  }];
  const expectedResult = 'Fizz';
  const result = fizBuzzWhizzModule.mapFactorsToWords(factors) === expectedResult ? 'test passed.' : 'test failed.';
  console.log(result);
}

testMapFactorsToWordsWithNoWord();
testMapFactorsToWordsWith1Word();
testMapFactorsToWordsWith2Words();