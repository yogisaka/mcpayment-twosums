const getIndex = (numbers, target) => {
  let a = []
  for (let b = 0; b < numbers.length; b++) {
    for (let c = b + 1; c < numbers.length; c++) {
      if (numbers[b] + numbers[c] === target) {
        a.push(b, c)
        break;
      }
    }
  }
  return a
}