const sumAll = function(first, last) {
    let val = 0;
    if (first < 0 || typeof first === 'string' || isNaN(first) || last < 0 || typeof last === 'string' || isNaN(last)) {
      val = 'ERROR';    }

    else if (first < last) {
        while (first <= last) {
            val += first;
            first++;
        }
    }
    else {
        while (last <= first) {
            val += last;
            last++;
        }
    }
    
    return val;
};


// Do not edit below this line
module.exports = sumAll;
