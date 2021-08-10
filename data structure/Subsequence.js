function isSubsequence(str1, str2) {
  let arr1 = str1.split("");
  let arr2 = str2.split("");
  let right1 = str1.length - 1;
  let right2 = str2.length - 1;

  while (right1 >= 0 && right2 >= 0) {
    if (arr1[right1] !== arr2[right2]) {
      right2--;
    } else if (arr1[right1] == arr2[right2]) {
      right1--;
      right2--;
    }
  }
  if (right1 == -1 && right2 == -1) {
    console.log(true);
    return true;
  } else {
    console.log(false);
    return false;
  }
}

isSubsequence("hello", "hello dear");
isSubsequence("book", "brooklyn");
isSubsequence("ant", "brooklyn");
isSubsequence("", "cba");
