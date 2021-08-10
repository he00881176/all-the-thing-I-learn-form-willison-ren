maxSum([2, 7, 3, 0, 6, 3, 1, -5, 48, -12, -11], 3); // 12

function maxSum(arr, size) {
  if (size > arr.length) {
    return null;
  }

  let maxValue = 0;
  for (let i = 0; i < size; i++) {
    maxValue += arr[i];
  }
  let tempValue = maxValue;
  for (let j = size; j < arr.length; j++) {
    tempValue = tempValue + arr[j] - arr[j - size];
    if (tempValue > maxValue) {
      maxValue = tempValue;
    }
  }
  console.log(maxValue);
  return maxValue;
}
