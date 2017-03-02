var generateOutputModule = require('./generate_output');

function test_generate_output_with_2_words(){
  var fixture = [{
    number: 3,
    word: 'Fizz'
  },{
    number: 4,
    word: 'Whizz'
  }];
  var expectedResult = 'FizzWhizz';
  var result = generateOutputModule.generateOutput(fixture) === expectedResult ? 'test passed.' : 'test failed.';
  console.log(result);
}

function test_generate_output_with_no_word(){
  var fixture = [];
  var expectedResult = null;
  var result = generateOutputModule.generateOutput(fixture) === expectedResult ? 'test passed.' : 'test failed.';
  console.log(result);
}

function test_generate_output_with_1_word(){
  var fixture = [{
    number: 3,
    word: 'Fizz'
  }];
  var expectedResult = 'Fizz';
  var result = generateOutputModule.generateOutput(fixture) === expectedResult ? 'test passed.' : 'test failed.';
  console.log(generateOutputModule.generateOutput(fixture));
  console.log(result);
}

test_generate_output_with_1_word();
