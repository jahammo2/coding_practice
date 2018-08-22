import {
  ExpectationThat,
  specFramework,
} from './support/specHelper';
import sharedSubstringFinder from '../src/sharedSubstringFinder';

export default function() {
  return specFramework.runSpecs({
    descriptions: ['sharedSubstringFinder'],
    specs: [
      () => {
        const expectedValue = 'YES';
        const actualValue = sharedSubstringFinder('hello', 'world');

        return specFramework.buildSpec({
          behavior: 'it returns YES',
          expectation: new ExpectationThat(actualValue).equals(expectedValue),
        });
      },

      () => {
        const expectedValue = 'NO';
        const actualValue = sharedSubstringFinder('hi', 'world');

        return specFramework.buildSpec({
          behavior: 'it returns NO',
          expectation: new ExpectationThat(actualValue).equals(expectedValue),
        });
      },

      () => {
        const expectedValue = 'NO';
        const actualValue = sharedSubstringFinder('wouldyoulikefries', 'abcabcabcabcabcabc');

        return specFramework.buildSpec({
          behavior: 'it returns NO',
          expectation: new ExpectationThat(actualValue).equals(expectedValue),
        });
      },

      () => {
        const expectedValue = 'YES';
        const actualValue = sharedSubstringFinder('hackerrankcommunity', 'cdecdecdecde');

        return specFramework.buildSpec({
          behavior: 'it returns YES',
          expectation: new ExpectationThat(actualValue).equals(expectedValue),
        });
      },

      () => {
        const expectedValue = 'YES';
        const actualValue = sharedSubstringFinder('aardvark', 'apple');

        return specFramework.buildSpec({
          behavior: 'it returns YES',
          expectation: new ExpectationThat(actualValue).equals(expectedValue),
        });
      },
    ],
  });
}
