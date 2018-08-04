import hourglassMaxSumFinder from './hourglassMaxSumFinder.spec.js';
import makeAnagram from './makeAnagram.spec.js';
import removeDuplicateEmails from './removeDuplicateEmails.spec.js';

function specs() {
  return hourglassMaxSumFinder()
    .then(makeAnagram)
    .then(removeDuplicateEmails)
    .then(() => console.log('tests finished'));
}

specs();
