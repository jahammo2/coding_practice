import hourglassMaxSumFinder from './hourglassMaxSumFinder.spec';
import makeAnagram from './makeAnagram.spec';
import removeDuplicateEmails from './removeDuplicateEmails.spec';

function specs() {
  return hourglassMaxSumFinder()
    .then(makeAnagram)
    .then(removeDuplicateEmails)
    .then(() => console.log('tests finished')); // eslint-disable-line no-console
}

specs();
