function generateOutput(modCollection) {
  if (modCollection.length === 0){
    return null;
  } else {
    return modCollection.map(function(item){
      return item.word;
    }).reduce(function(leftItem, rightItem){
      return leftItem + rightItem;
    });
  }
}

module.exports.generateOutput = generateOutput;
