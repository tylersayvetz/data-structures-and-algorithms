// 3 2 1 

// digits: [1, 2, 3]
function digitsReverse(num) {
  let negative = num < 0 ? true : false;
  const digits = []
  while (num >= 1) {
    digits.push(num % 10);
    num = Math.floor(num / 10);
  }

  //now we have an array of digits.

  let answer = digits.reduce((acc, el, i) => {
    acc = acc + el * 10**(digits.length - i - 1);
    return acc;
  },0 )

  //acc : 100
  // 100 + 20  = 120
  // 120 + 3 = 123

  //answer = 123

  return negative ? answer * -1 : answer

}

console.log(digitsReverse(1234567890))