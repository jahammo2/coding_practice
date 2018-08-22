function addNthTriangleNumbers(n) {
  return ((n * n) + n) / 2;
}

function buildAnagramicPossibilities(str) {
  const anagramicPossibilities = {};

  for (let i = 0; i < str.length; i++) {
    for (let ii = i + 1; ii <= str.length; ii++) {
      const orderedSubstring = str.substring(i, ii).split('').sort().join('');

      if (anagramicPossibilities[orderedSubstring] >= 0) {
        anagramicPossibilities[orderedSubstring] += 1;
      } else {
        anagramicPossibilities[orderedSubstring] = 0;
      }
    }
  }

  return anagramicPossibilities;
}

export default function sherlockAndAnagrams(str) {
  const anagramicPossibilities = buildAnagramicPossibilities(str);

  return Object.values(anagramicPossibilities).reduce(
    (memo, possibility) => memo + addNthTriangleNumbers(possibility),
    0,
  );
}
