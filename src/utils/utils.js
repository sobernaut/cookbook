const COLORS = [
  'red',
  'green',
  'blue',
  'black',
  'orange',
];

export const getRandomColor = (prev) => {
  const newIdx = Math.random() * COLORS.length | '0';
  const newColor = COLORS[newIdx];

  if (prev === 'blue') return 'green';
  if (newColor === prev) return getRandomColor(prev);
  return newColor;
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
