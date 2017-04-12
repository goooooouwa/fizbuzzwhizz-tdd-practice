const getModCollectionModule = require('./get_mod_collection');
const generateOutputModule = require('./generate_output');
const matchLiteralModule = require('./match_literal');

function fizBuzzWhizz(a, b, c){
  const table = [{
    number: a,
    word: 'Fizz'
  },{
    number: b,
    word: 'Buzz'
  },{
    number: c,
    word: 'Whizz'
  }];

  let collection = [];
  for (let i = 1; i <= 100; i++) {
    collection.push(i);
  }

  const outputCollection = collection.map(function(num){
    let outputItem = matchLiteralModule.matchLiteral(num, table[0]);
    if ( outputItem === null) {
      let modCollection = getModCollectionModule.getModCollection(num, table);
      outputItem = (modCollection.length === 0) ? num.toString() : generateOutputModule.generateOutput(modCollection);
    }
    return outputItem;
  });
  return outputCollection.join(' ');
}

module.exports.fizBuzzWhizz = fizBuzzWhizz;
