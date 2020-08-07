export const getRandomIdx = (len, prevIdx) => {
  const newIdx = Math.random() * len | '0';

  if (prevIdx === newIdx) return getRandomIdx(len, prevIdx);
  return newIdx;
}

export const printNumber = () => {
  return Array(100).fill().map((a, i) => {
    const no = i + 1;
    let res = no;

    if (no % 3 === 0) {
      res = 'Fizz';
      if (no % 5 === 0) {
        res = 'FizzBuzz';

        console.log(res);
        return res;
      }
      console.log(res);
      return res;
    }

    if (no % 5 === 0) {
      res = 'Buzz'

      console.log(res);
      return res;
    }

    console.log(res);
    return res;
  })
}
