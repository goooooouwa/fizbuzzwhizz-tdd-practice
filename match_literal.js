function matchLiteral(num, keywordObject){
  return (num.toString().indexOf(keywordObject.number.toString()) !== -1) ? keywordObject.word : null;
}

module.exports.matchLiteral = matchLiteral;
