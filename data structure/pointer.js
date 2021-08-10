function averagePair(arr, avg) {
  let left = 0;
  let right = arr.length - 1;
  let result = [];

  while (right > left) {
    let tempAvg = (arr[left] + arr[right]) / 2;
    if (tempAvg > avg) {
      right--;
    } else if (tempAvg < avg) {
      left++;
    } else if (tempAvg == avg) {
      result.push([arr[left], arr[right]]);
      right--;
      left++;
    }
  }
  console.log(result);
}

averagePair([-11, 0, 1, 2, 3, 9, 14, 17, 21], 1.5);
