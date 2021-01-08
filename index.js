
const sum = function(fromN, toN) {
  if (fromN <= toN) {
    const res = fromN + sum(++fromN, toN);
    return res;
  }
  return 0;
};

module.exports = sum;