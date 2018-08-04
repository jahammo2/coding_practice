import {
  ExpectationThat,
  specFramework,
  utils
} from '../specHelper';
import makeAnagram from '../../src/makeAnagram';

let actualValue;

specFramework.runSpecs({
  descriptions: ['makeAnagram'],
  specs: [
    () => {
      const expectedValue = 4;

      return makeAnagram('cde', 'abc')
        .then((actualValue) => {
          return specFramework.buildSpec({
            behavior: 'it deletes enough characters to make an anagram',
            expectation: new ExpectationThat(actualValue).equals(expectedValue)
          });
      });
    },

    () => {
      const expectedValue = 4;

      return makeAnagram('mmndd', 'mmncc')
        .then((actualValue) => {
          return specFramework.buildSpec({
            behavior: 'it deletes enough characters to make an anagram',
            expectation: new ExpectationThat(actualValue).equals(expectedValue)
          });
      });
    },

    () => {
      const expectedValue = 30;

      return makeAnagram('fcrxzwscanmligyxyvym', 'jxwtrhvujlmrpdoqbisbwhmgpmeoke')
        .then((actualValue) => {
          return specFramework.buildSpec({
            behavior: 'it deletes enough characters to make an anagram',
            expectation: new ExpectationThat(actualValue).equals(expectedValue)
          });
      });
    },

    () => {
      const expectedValue = 2;

      return makeAnagram('showman', 'woman')
        .then((actualValue) => {
          return specFramework.buildSpec({
            behavior: 'it deletes enough characters to make an anagram',
            expectation: new ExpectationThat(actualValue).equals(expectedValue)
          });
      });
    },

    () => {
      const t0 = utils.getTime();
      const maxTime = 10000;

      return makeAnagram('showman', 'woman')
        .then(() => {
          const t1 = utils.getTime();
          const actualTimeToComplete = t1 - t0;

          return specFramework.buildSpec({
            behavior: 'it takes less than 10 seconds to finish',
            expectation: new ExpectationThat(actualTimeToComplete).isLessThan(maxTime)
          });
        });
    }
  ]
});
