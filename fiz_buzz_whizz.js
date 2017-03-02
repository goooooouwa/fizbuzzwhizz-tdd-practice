var getModCollectionModule = require('./get_mod_collection');
var generateOutputModule = require('./generate_output');
var matchLiteralModule = require('./match_literal');

function fizBuzzWhizz(a, b, c){
  var table = [{
    number: a,
    word: 'Fizz'
  },{
    number: b,
    word: 'Buzz'
  },{
    number: c,
    word: 'Whizz'
  }];

  var collection = [];
  for (var i = 1; i <= 100; i++) {
    collection.push(i);
  }


  var outputCollection = collection.map(function(num){
    var outputItem = matchLiteralModule.matchLiteral(num, table[0]);
    if ( outputItem === null) {
      var modCollection = getModCollectionModule.getModCollection(num, table);
      outputItem = (modCollection.length === 0) ? num.toString() : generateOutputModule.generateOutput(modCollection);
    }
    return outputItem;
  });

  return outputCollection.join(' ');
}

module.exports.fizBuzzWhizz = fizBuzzWhizz;
