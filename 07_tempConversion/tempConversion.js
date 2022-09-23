const ftoc = function(numb) {
  let cels =(5/9) * (numb - 32);
  return Math.round(cels * 10) / 10;
};

const ctof = function(numb) {
  let faren = (numb * 9/5) + 32;
  return Math.round(faren * 10) / 10;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
