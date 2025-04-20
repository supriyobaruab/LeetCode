var romanToInt = function (s) {
  const romanValues = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let total = romanValues[s[s.length - 1]];
  let lastValue = total;

  for (let i = s.length - 2; i >= 0; i--) {
    const currentValue = romanValues[s[i]];
    if (currentValue < lastValue) {
      total -= currentValue;
    } else {
      total += currentValue;
    }
    lastValue = currentValue;
  }

  console.log(total);
  return total;
};

romanToInt("MCMXCIV");
