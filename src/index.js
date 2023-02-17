module.exports = function check(str, bracketsConfig) {
  // your solution
  const doub = new Map(bracketsConfig);
  const mass = []; 
  for (const symb of str) { 
    if (doub.get(mass.at(-1)) === symb) {
      mass.pop(); 
    } else {
      mass.push(symb);
    }
  }
  if (mass.length === 0) {
  return true; 
  } else {
    return false;
  }
}

