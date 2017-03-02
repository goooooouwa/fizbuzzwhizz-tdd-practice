function matchLiteral(num, keywordObject){
// table[0].word.include(num.toString
  return (num.toString().indexOf(keywordObject.number.toString()) !== -1) ? keywordObject.word : null;
}

module.exports.matchLiteral = matchLiteral;
