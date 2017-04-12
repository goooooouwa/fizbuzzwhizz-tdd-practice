const generateOutputModule = require('./generate_output');

function testGenerateOutputWith2Words(){
  const fixture = [{
    number: 3,
    word: 'Fizz'
  },{
    number: 4,
    word: 'Whizz'
  }];
  const expectedResult = 'FizzWhizz';
  const result = generateOutputModule.generateOutput(fixture) === expectedResult ? 'test passed.' : 'test failed.';
  console.log(result);
}

function testGenerateOutputWithNoWord(){
  const fixture = [];
  const expectedResult = null;
  const result = generateOutputModule.generateOutput(fixture) === expectedResult ? 'test passed.' : 'test failed.';
  console.log(result);
}

function testGenerateOutputWith1Word(){
  const fixture = [{
    number: 3,
    word: 'Fizz'
  }];
  const expectedResult = 'Fizz';
  const result = generateOutputModule.generateOutput(fixture) === expectedResult ? 'test passed.' : 'test failed.';
  console.log(result);
}

testGenerateOutputWithNoWord();
testGenerateOutputWith1Word();
testGenerateOutputWith2Words();