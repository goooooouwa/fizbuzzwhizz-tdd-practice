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

function mapNumberToWord(testNumber, specialWords) {
  let word = matchFirstSpecialNumber(testNumber, specialWords[0]);
  if ( word === null) {
    let factors = getFactors(testNumber, specialWords);
    word = (factors.length === 0) ? testNumber.toString() : mapFactorsToWords(factors);
  }
  return word;
}

function fizBuzzWhizz(firstSpecialNumber, secondSpecialNumber, thirdSpecialNumber){
  const specialWords = [{
    number: firstSpecialNumber,
    word: 'Fizz'
  },{
    number: secondSpecialNumber,
    word: 'Buzz'
  },{
    number: thirdSpecialNumber,
    word: 'Whizz'
  }];

  let numbers = [];
  for (let i = 1; i <= 100; i++) {
    numbers.push(i);
  }

  const words = numbers.map(function(testNumber){
    return mapNumberToWord(testNumber, specialWords);
  });
  return words.join(' ');
}

module.exports.matchFirstSpecialNumber = matchFirstSpecialNumber;
module.exports.getFactors = getFactors;
module.exports.mapFactorsToWords = mapFactorsToWords;
module.exports.mapNumberToWord = mapNumberToWord;
module.exports.fizBuzzWhizz = fizBuzzWhizz;
