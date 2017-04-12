const matchLiteralModule = require('./match_literal');

function testMatchLiteral(){
  const fixture = {
    number: 3,
    word: 'Fizz'
  };
  const num = 35;
  const expectedResult = 'Fizz';

  const result = matchLiteralModule.matchLiteral(num, fixture) === expectedResult ? 'test passed.' : 'test failed.';
  console.log(result);
}

testMatchLiteral();
