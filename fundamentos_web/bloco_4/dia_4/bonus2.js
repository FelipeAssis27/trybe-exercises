function add(num1, num2) {
    const arrNum1 = num1.toString().split("").reverse();
    const arrNum2 = num2.toString().split("").reverse();
    let lessArr;
    let bigArr;
    const output = [];
  
    if (arrNum1.length > arrNum2.length) {
      bigArr = arrNum1;
      lessArr = arrNum2;
    } else {
      bigArr = arrNum2;
      lessArr = arrNum1;
    }
  
    for (let i = 0; i < bigArr.length; i += 1) {
      if (lessArr[i] !== undefined) {
        output[i] = parseInt(bigArr[i]) + parseInt(lessArr[i]);
      } else {
        output[i] = parseInt(bigArr[i]);
      }
    }
  
    return parseInt(output.reverse().join(""));
  }
