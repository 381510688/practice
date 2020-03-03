/** 
 * @param ary 当前数组（4个数值）
 * @param resultRecord 运算过程计算
*/
function calc24(ary: number[], resultRecord: any[]): boolean {
  let len = ary.length

  if (len === 1) {
    if (Math.abs(ary[0] - 24) < 1E-6) {
      console.log(resultRecord[0])
      return true
    } else {
      return false
    }
  }

  // 双重循环，确保任意两个数，可以组合
  for (let i = 0; i < len; i++) {   // 第一个数(计算时被两个数结果替换)
    for (let j = i + 1; j < len; j++) { // 第二个数(计算时候被最后一个数替换)

      // 去除第二个数
      let firstNum = ary[i]
      let secondNum = ary[j]
      ary[j] = ary[len - 1]  

      // 去除表达式（同上述去除数值逻辑）
      let firstExp = resultRecord[i]
      let secondExp = resultRecord[j]
      resultRecord[j] = resultRecord[len - 1] 

      ary[i] = firstNum + secondNum
      resultRecord[i] = `(${firstExp} + ${secondExp})`
      // 剪切到最后一个数（已放到数组第二位）
      if (calc24(ary.slice(0, len - 1), resultRecord))
        return true

      ary[i] = firstNum - secondNum
      resultRecord[i] = `(${firstExp} - ${secondExp})`
      if (calc24(ary.slice(0, len - 1), resultRecord))
        return true

      ary[i] = secondNum - firstNum
      resultRecord[i] = `(${secondExp} - ${firstExp})`
      if (calc24(ary.slice(0, len - 1), resultRecord))
        return true

      ary[i] = firstNum * secondNum
      resultRecord[i] = `(${firstExp} * ${secondExp})`
      if (calc24(ary.slice(0, len - 1), resultRecord))
        return true

      if (secondNum !== 0) {
        ary[i] = firstNum / secondNum
        resultRecord[i] = `(${firstExp} / ${secondExp})`
        if (calc24(ary.slice(0, len - 1), resultRecord))
          return true
      }

      if (firstNum !== 0) {
        ary[i] = secondNum / firstNum
        resultRecord[i] = `(${secondExp} / ${firstExp})`
        if (calc24(ary.slice(0, len - 1), resultRecord))
          return true
      }

      // 没有契合的，将本次循环的结果消除，继续测试下一对数测试
      ary[i] = firstNum
      ary[j] = secondNum
      resultRecord[i] = firstExp
      resultRecord[j] = secondExp
    }
  }
  return false
}

calc24([3,8,8,10], [3,8,8,10])
calc24([4,10,4,10], [4,10,4,10])
calc24([1,2,3,4], [1,2,3,4])