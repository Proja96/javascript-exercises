const removeFromArray = function(list, ...exclude) {
    return list.filter(e => !exclude.includes(e))
    };
    

// Do not edit below this line
module.exports = removeFromArray;
