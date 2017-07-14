function matchFirstSpecialNumber(testNumber, specialWord){
  return (testNumber.toString().indexOf(specialWord.number.toString()) !== -1) ? specialWord.word : null;
}

function getFactors(testNumber, specialWords){
  return specialWords.filter(function(entry){
    return (testNumber % entry.number === 0);
  })
}

function mapFactorsToWords(factors) {
  if (factors.length === 0){
    return null;
  } else {
    return factors.map(function(item){
      return item.word;
    }).reduce(function(leftItem, rightItem){
      return leftItem + rightItem;
    });
  }
}

function fizBuzzWhizz(a, b, c){
  const specialWords = [{
    number: a,
    word: 'Fizz'
  },{
    number: b,
    word: 'Buzz'
  },{
    number: c,
    word: 'Whizz'
  }];

  let numbers = [];
  for (let i = 1; i <= 100; i++) {
    numbers.push(i);
  }

  const words = numbers.map(function(testNumber){
    let word = matchFirstSpecialNumber(testNumber, specialWords[0]);
    if ( word === null) {
      let factors = getFactors(testNumber, specialWords);
      word = (factors.length === 0) ? testNumber.toString() : mapFactorsToWords(factors);
    }
    return word;
  });
  return words.join(' ');
}

module.exports.matchFirstSpecialNumber = matchFirstSpecialNumber;
module.exports.getFactors = getFactors;
module.exports.mapFactorsToWords = mapFactorsToWords;
module.exports.fizBuzzWhizz = fizBuzzWhizz;
