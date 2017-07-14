const fizBuzzWhizzModule = require('./fiz_buzz_whizz');

function testGetFactors(){
  const fixture = 35;
  const table = [{
    number: 3,
    word: 'Fizz'
  },{
    number: 5,
    word: 'Buzz'
  },{
    number: 7,
    word: 'Whizz'
  }];

  const result = (fizBuzzWhizzModule.getFactors(fixture, table).length === 2) ? 'test passed.' : 'test failed.';
  console.log(result);
}

testGetFactors();
