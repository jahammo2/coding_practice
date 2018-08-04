export default function hourglassMaxSumFinder(array) {
  const maxLength = array[0].length - 2;
  const maxWidth = array.length - 2;
  const sums = [];

  for (let i = 0; i < maxLength; i++) {
    const topRow = array[i];
    const middleRow = array[i + 1];
    const bottomRow = array[i + 2];

    for (let ii = 0; ii < maxWidth; ii++) {
      let sum = 0;

      const leftValue = ii;
      const midValue = ii + 1;
      const rightValue = ii + 2;

      sum += topRow[leftValue];
      sum += topRow[midValue];
      sum += topRow[rightValue];
      sum += middleRow[midValue];
      sum += bottomRow[leftValue];
      sum += bottomRow[midValue];
      sum += bottomRow[rightValue];

      sums.push(sum);
    }
  }

  return sums.sort((a, b) => a - b)[sums.length - 1];
}
