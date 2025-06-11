function searchNew(newTar) {
    for (let i = 0; i < nums.length; i++) {
      if (newTar == nums[i]) {
        found = true;
        console.log(i);
        break;
      }
    }
  }