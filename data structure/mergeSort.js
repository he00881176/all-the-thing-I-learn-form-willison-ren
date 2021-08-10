function mergeSort(arr) {
  // this two arrays must be sort array
  function merge(arr1, arr2) {
    let result = [];
    let i = 0;
    let j = 0;
    while (i < arr1.length && j < arr2.length) {
      if (arr1[i] > arr2[j]) {
        result.push(arr2[j]);
        j++;
      } else {
        result.push(arr1[i]);
        i++;
      }
    }
    if (i < arr1.length) {
      for (let x = i; x < arr1.length; x++) {
        result.push(arr1[x]);
      }
    } else {
      for (let x = j; x < arr2.length; x++) {
        result.push(arr2[x]);
      }
    }
    return result;
  }
  if (arr.length == 1) {
    return arr;
  } else {
    let middle = arr.length / 2;
    let left = arr.slice(0, middle);
    let right = arr.slice(middle, arr.length);
    return merge(mergeSort(left), mergeSort(right));
  }
}

// [30, 7, 70, 21, 63, 14, 8, 55, 41, 29];
