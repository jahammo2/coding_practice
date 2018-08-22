import hourglassMaxSumFinder from './hourglassMaxSumFinder.spec';
import makeAnagram from './makeAnagram.spec';
import minimumSwapsFinder from './minimumSwapsFinder.spec';
import removeDuplicateEmails from './removeDuplicateEmails.spec';
import sharedSubstringFinder from './sharedSubstringFinder.spec';
import sherlockAndAnagrams from './sherlockAndAnagrams.spec';

function specs() {
  return hourglassMaxSumFinder()
    .then(makeAnagram)
    .then(minimumSwapsFinder)
    .then(removeDuplicateEmails)
    .then(sharedSubstringFinder)
    .then(sherlockAndAnagrams)
    .then(() => console.log('tests finished')); // eslint-disable-line no-console
}

specs();
