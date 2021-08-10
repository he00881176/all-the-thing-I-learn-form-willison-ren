maxSum([2, 7, 3, 0, 6, 1, -5, -12, -11], 3); // 12
minSum([2, 7, 3, 0, 6, 1, -5, -12, -11], 3); // -28

function maxSum(arr, size) {
  let maxValue = -Infinity;

  for (let i = 0; i <= arr.length - size; i++) {
    let total = 0;
    for (let j = i; j < i + size; j++) {
      total += arr[j];
    }
    if (total > maxValue) {
      maxValue = total;
    }
  }
  console.log(maxValue);
  return maxValue;
}

function minSum(arr, size) {
  let minValue = Infinity;

  for (i = 0; i <= arr.length - size; i++) {
    let total = 0;
    for (j = i; j < i + size; j++) {
      total += arr[j];
    }
    if (total < minValue) {
      minValue = total;
    }
  }
  console.log(minValue);
  return minValue;
}
