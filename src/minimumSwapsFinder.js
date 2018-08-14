function swap(array, i, j) {
  const updatedArray = array;

  const swapper = array[i];
  updatedArray[i] = array[j];
  updatedArray[j] = swapper;

  return updatedArray;
}

function findIndex(array, lookup, indexLookupHash) {
  // This is for speed. We can use this hash to immediately tell
  // us where the lookup sits in the array instead of
  // having to use .indexOf everytime which is linear time.
  if (indexLookupHash[lookup]) {
    return indexLookupHash[lookup];
  }

  return array.indexOf(lookup);
}

export default function minimumSwapsFinder(array) {
  let mutatingArray = array;
  let swapsCounter = 0;
  const indexLookupHash = {};
  const sortedArray = array.slice().sort((a, b) => a - b);

  for (let i = 0; i < array.length; i++) {
    const nextAscendent = sortedArray[i];
    const nextAscendentIndex = findIndex(array, nextAscendent, indexLookupHash);

    if (nextAscendentIndex !== i) {
      swapsCounter += 1;

      const swappee = array[i];
      indexLookupHash[swappee] = nextAscendentIndex;

      mutatingArray = swap(mutatingArray, i, nextAscendentIndex);
    }
  }

  return swapsCounter;
}
