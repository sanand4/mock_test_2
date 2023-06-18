function mySqrt(x) {
  let left = 0;
  let right = x;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    let square = mid * mid;

    if (square === x) {
      return mid;
    } else if (square > x) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return right;
}
//test
console.log(mySqrt(4));
console.log(mySqrt(8));
console.log(mySqrt(16));
console.log(mySqrt(25));
console.log(mySqrt(0));
console.log(mySqrt(1));
console.log(mySqrt(100));
