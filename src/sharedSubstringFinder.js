export default function sharedSubstringFinder(str1, str2) {
  const hash = {};

  for (let i = 0; i < str1.length; i++) {
    hash[str1[i]] = true;
  }

  for (let i = 0; i < str2.length; i++) {
    if (hash[str2[i]]) { return 'YES'; }
  }

  return 'NO';
}
