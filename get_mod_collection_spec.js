var getModCollectionModule = require('./get_mod_collection');

function testGetModCollection(){
  var fixture = 35;
  var table = [{
    number: 3,
    word: 'Fizz'
  },{
    number: 5,
    word: 'Buzz'
  },{
    number: 7,
    word: 'Whizz'
  }];

  var result = (getModCollectionModule.getModCollection(fixture, table).length === 2) ? 'test passed.' : 'test failed.';
  console.log(result);
}

testGetModCollection();
