import {
  ExpectationThat,
  specFramework,
  utils,
} from './support/specHelper';
import { minimumSwapsFinderStressData } from './support/stressData';
import minimumSwapsFinder from '../src/minimumSwapsFinder';

export default function() {
  return specFramework.runSpecs({
    descriptions: ['minimumSwapsFinder'],
    specs: [
      () => {
        const expectedValue = 3;
        const actualValue = minimumSwapsFinder([4, 3, 1, 2]);

        return specFramework.buildSpec({
          behavior: 'it returns the minimum number of swaps necessary to sort the array',
          expectation: new ExpectationThat(actualValue).equals(expectedValue),
        });
      },

      () => {
        const expectedValue = 1;
        const actualValue = minimumSwapsFinder([2, 1, 3, 4]);

        return specFramework.buildSpec({
          behavior: 'it returns the minimum number of swaps necessary to sort the array',
          expectation: new ExpectationThat(actualValue).equals(expectedValue),
        });
      },

      () => {
        const expectedValue = 3;
        const actualValue = minimumSwapsFinder([2, 3, 4, 1, 5]);

        return specFramework.buildSpec({
          behavior: 'it returns the minimum number of swaps necessary to sort the array',
          expectation: new ExpectationThat(actualValue).equals(expectedValue),
        });
      },

      () => {
        const expectedValue = 3;
        const actualValue = minimumSwapsFinder([1, 3, 5, 2, 4, 6, 8]);

        return specFramework.buildSpec({
          behavior: 'it returns the minimum number of swaps necessary to sort the array',
          expectation: new ExpectationThat(actualValue).equals(expectedValue),
        });
      },

      () => {
        const expectedValue = 5;
        const actualValue = minimumSwapsFinder([7, 1, 3, 2, 4, 5, 6]);

        return specFramework.buildSpec({
          behavior: 'it returns the minimum number of swaps necessary to sort the array',
          expectation: new ExpectationThat(actualValue).equals(expectedValue),
        });
      },

      () => {
        const expectedValue = 46;
        const actualValue = minimumSwapsFinder([
          2, 31, 1, 38, 29, 5, 44, 6, 12, 18, 39, 9, 48, 49,
          13, 11, 7, 27, 14, 33, 50, 21, 46, 23, 15, 26, 8,
          47, 40, 3, 32, 22, 34, 42, 16, 41, 24, 10, 4, 28,
          36, 30, 37, 35, 20, 17, 45, 43, 25, 19,
        ]);

        return specFramework.buildSpec({
          behavior: 'it returns the minimum number of swaps necessary to sort the array',
          expectation: new ExpectationThat(actualValue).equals(expectedValue),
        });
      },

      () => {
        const expectedValue = 14493;
        const actualValue = minimumSwapsFinder(minimumSwapsFinderStressData);

        return specFramework.buildSpec({
          behavior: 'it returns the minimum number of swaps necessary to sort the array',
          expectation: new ExpectationThat(actualValue).equals(expectedValue),
        });
      },

      () => {
        const t0 = utils.getTime();
        const maxTime = 1000;

        return Promise.resolve(minimumSwapsFinder(minimumSwapsFinderStressData))
          .then(() => {
            const t1 = utils.getTime();
            const actualTimeToComplete = t1 - t0;

            return specFramework.buildSpec({
              behavior: 'it takes less than 1 second to finish',
              expectation: new ExpectationThat(actualTimeToComplete).isLessThan(maxTime),
            });
          });
      },
    ],
  });
}
