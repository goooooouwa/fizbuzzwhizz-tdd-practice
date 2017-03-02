var matchLiteralModule = require('./match_literal');

function test_match_literal(){
  var fixture = {
    number: 3,
    word: 'Fizz'
  };
  var num = 35;
  var expectedResult = 'Fizz';

  var result = matchLiteralModule.matchLiteral(num, fixture) === expectedResult ? 'test passed.' : 'test failed.';
  console.log(matchLiteralModule.matchLiteral(num, fixture));
  console.log(result);
}

test_match_literal();
