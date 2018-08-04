function buildOutHash(str) {
  const hash = {};

  for (let i = 0; i < str.length; i++) {
    if (hash[str[i]] >= 0) {
      hash[str[i]] += 1;
    } else {
      hash[str[i]] = 1;
    }
  }

  return hash;
}

export default function makeAnagram(str1, str2) {
  const hash = buildOutHash(str1);
  let charactersInStr2WithoutAMatch = 0;

  for (let i = 0; i < str2.length; i++) {
    if (hash[str2[i]] >= 1) {
      hash[str2[i]] -= 1;
    } else {
      charactersInStr2WithoutAMatch += 1;
    }
  }

  const charactersInStr1WithoutAMatch = Object.values(hash).reduce(
    (memo, currentValue) => memo + currentValue,
    0,
  );

  return charactersInStr1WithoutAMatch + charactersInStr2WithoutAMatch;
}
