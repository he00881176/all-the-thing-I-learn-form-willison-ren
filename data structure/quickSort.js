let arr = [
  41, 12, 32, 84, 79, 26, 2, 12, 92, 66, 13, 56, 19, 51, 38, 47, 89, 51, 87, 7,
];
qucikSort(0, arr.length - 1);
console.log(arr);
//p = 0, r = arr.length - 1
function partition(p, r) {
  let x = arr[r]; //pivot
  let i = p - 1; //counter

  for (let j = p; j <= r - 1; j++) {
    if (arr[j] <= x) {
      i += 1;
      let temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
  }
  let temp = arr[r];
  arr[r] = arr[i + 1];
  arr[i + 1] = temp;
  return i + 1;
}

function qucikSort(p, r) {
  if (p < r) {
    q = partition(p, r);
    qucikSort(p, q - 1);
    qucikSort(q + 1, r);
  }
}
