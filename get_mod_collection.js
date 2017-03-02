var getModCollection = function(num, table){
    return table.filter(function(entry){
      return (num % entry.number == 0);
    })
}

module.exports.getModCollection = getModCollection;

