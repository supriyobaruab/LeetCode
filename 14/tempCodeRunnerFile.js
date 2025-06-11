let value = "";
  for (let i = 0; i < strs[0][0].length; i++) {
    for (let j = 0; j < strs[0][0].length; j++) {
      value = strs[i][j];
      if (value == strs[i + 1][j]) {
        i = 0;
        j++;
        value += strs[i][j + 1];
        console.log(value);
      } else {
        console.log("Error");
      }
    }
    console.log(value);
  }