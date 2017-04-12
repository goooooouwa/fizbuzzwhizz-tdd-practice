const getModCollectionModule = require('./get_mod_collection');

function testGetModCollection(){
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

  const result = (getModCollectionModule.getModCollection(fixture, table).length === 2) ? 'test passed.' : 'test failed.';
  console.log(result);
}

testGetModCollection();
