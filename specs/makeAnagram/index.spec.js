import {
  ExpectationThat,
  specFramework,
  utils
} from '../specHelper';
import makeAnagram from '../../src/makeAnagram';
import { makeAnagramStressData } from '../stressData';

let actualValue;

specFramework.runSpecs({
  descriptions: ['makeAnagram'],
  specs: [
    () => {
      const expectedValue = 4;
      const actualValue = makeAnagram('cde', 'abc');

      return specFramework.buildSpec({
        behavior: 'it deletes enough characters to make an anagram',
        expectation: new ExpectationThat(actualValue).equals(expectedValue)
      });
    },

    () => {
      const expectedValue = 4;
      const actualValue = makeAnagram('mmndd', 'mmncc');

      return specFramework.buildSpec({
        behavior: 'it deletes enough characters to make an anagram',
        expectation: new ExpectationThat(actualValue).equals(expectedValue)
      });
    },

    () => {
      const expectedValue = 30;
      const actualValue = makeAnagram('fcrxzwscanmligyxyvym', 'jxwtrhvujlmrpdoqbisbwhmgpmeoke');

      return specFramework.buildSpec({
        behavior: 'it deletes enough characters to make an anagram',
        expectation: new ExpectationThat(actualValue).equals(expectedValue)
      });
    },

    () => {
      const expectedValue = 2;
      const actualValue = makeAnagram('showman', 'woman');

      return specFramework.buildSpec({
        behavior: 'it deletes enough characters to make an anagram',
        expectation: new ExpectationThat(actualValue).equals(expectedValue)
      });
    },

    () => {
      const t0 = utils.getTime();
      const maxTime = 1000;

      return Promise.resolve(makeAnagram(
        makeAnagramStressData.str1,
        makeAnagramStressData.str2
      ))
        .then(() => {
          const t1 = utils.getTime();
          const actualTimeToComplete = t1 - t0;

          return specFramework.buildSpec({
            behavior: 'it takes less than 1 second to finish',
            expectation: new ExpectationThat(actualTimeToComplete).isLessThan(maxTime)
          });
        });
    }
  ]
});
