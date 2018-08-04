import makeAnagram from './makeAnagram.spec.js';
import removeDuplicateEmails from './removeDuplicateEmails.spec.js';

function specs() {
  return makeAnagram()
    .then(removeDuplicateEmails)
    .then(() => console.log('tests finished'));
}

specs();
