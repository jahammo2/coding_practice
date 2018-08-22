import {
  ExpectationThat,
  specFramework,
} from './support/specHelper';
import sherlockAndAnagrams from '../src/sherlockAndAnagrams';

export default function() {
  return specFramework.runSpecs({
    descriptions: ['sherlockAndAnagrams'],
    specs: [
      () => {
        const expectedValue = 4;
        const actualValue = sherlockAndAnagrams('abba');

        return specFramework.buildSpec({
          behavior: 'it returns the total number of pairs of substrings in the anagram',
          expectation: new ExpectationThat(actualValue).equals(expectedValue),
        });
      },

      () => {
        const expectedValue = 0;
        const actualValue = sherlockAndAnagrams('abcd');

        return specFramework.buildSpec({
          behavior: 'it returns the total number of pairs of substrings in the anagram',
          expectation: new ExpectationThat(actualValue).equals(expectedValue),
        });
      },

      () => {
        const expectedValue = 3;
        const actualValue = sherlockAndAnagrams('ifailuhkqq');

        return specFramework.buildSpec({
          behavior: 'it returns the total number of pairs of substrings in the anagram',
          expectation: new ExpectationThat(actualValue).equals(expectedValue),
        });
      },

      () => {
        const expectedValue = 10;
        const actualValue = sherlockAndAnagrams('kkkk');

        return specFramework.buildSpec({
          behavior: 'it returns the total number of pairs of substrings in the anagram',
          expectation: new ExpectationThat(actualValue).equals(expectedValue),
        });
      },

      () => {
        const expectedValue = 5;
        const actualValue = sherlockAndAnagrams('cdcd');

        return specFramework.buildSpec({
          behavior: 'it returns the total number of pairs of substrings in the anagram',
          expectation: new ExpectationThat(actualValue).equals(expectedValue),
        });
      },
    ],
  });
}
