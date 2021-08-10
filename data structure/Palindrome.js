function isPalindrome(str) {
  let arr = str.split("");
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    if (arr[left] == arr[right]) {
      left++;
      right--;
    } else {
      console.log(false);
      return false;
    }
  }
  console.log(true);
  return true;
}

isPalindrome("abcba");
