  const itemsArray = [54, 89, 45, 26, 10, 458, 639, 1002];

  const getLargestNumber = items => {
      let largest = -Number.MAX_VALUE;
      items.forEach(item => {
          if (item > largest) {
              largest = item;
          }
      });
      return console.log(largest);
  }

  getLargestNumber(itemsArray);