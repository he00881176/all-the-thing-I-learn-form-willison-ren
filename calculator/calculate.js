function calculate(str) {
  let arr = str.split(" ");
  for (let i = 1; i < arr.length; i += 2) {
    if (arr[i] == "*") {
      arr[i - 1] * arr[i + 1];
    } else if (arr[i] == "/") {
      arr[i - 1] / arr[i + 1];
    }
  }

  for (let i = 1; i < arr.length; i += 2) {
    if (arr[i] == "*") {
      arr[i - 1] * arr[i + 1];
    } else if (arr[i] == "/") {
      arr[i - 1] / arr[i + 1];
    }
  }
}

calculate("1 + 2 + 3 + 4");
