import {
  ExpectationThat,
  specFramework,
} from './support/specHelper';
import hourglassMaxSumFinder from '../src/hourglassMaxSumFinder';

export default function() {
  return specFramework.runSpecs({
    descriptions: ['hourglassMaxSumFinder'],
    specs: [
      () => {
        const hourglassArray = [
          [-9, -9, -9, 1, 1, 1],
          [0, -9, 0, 4, 3, 2],
          [-9, -9, -9, 1, 2, 3],
          [0, 0, 8, 6, 6, 0],
          [0, 0, 0, -2, 0, 0],
          [0, 0, 1, 2, 4, 0],
        ];
        const expectedValue = 28;
        const actualValue = hourglassMaxSumFinder(hourglassArray);

        return specFramework.buildSpec({
          behavior: 'it returns the max sum of all the hourglasses',
          expectation: new ExpectationThat(actualValue).equals(expectedValue),
        });
      },

      () => {
        const hourglassArray = [
          [1, 1, 1, 0, 0, 0],
          [0, 1, 0, 0, 0, 0],
          [1, 1, 1, 0, 0, 0],
          [0, 0, 2, 4, 4, 0],
          [0, 0, 0, 2, 0, 0],
          [0, 0, 1, 2, 4, 0],
        ];
        const expectedValue = 19;
        const actualValue = hourglassMaxSumFinder(hourglassArray);

        return specFramework.buildSpec({
          behavior: 'it returns the max sum of all the hourglasses',
          expectation: new ExpectationThat(actualValue).equals(expectedValue),
        });
      },

      () => {
        const hourglassArray = [
          [1, 1, 1, 0, 0, 0],
          [0, 1, 0, 0, 0, 0],
          [1, 1, 1, 0, 0, 0],
          [0, 9, 2, -4, -4, 0],
          [0, 0, 0, -2, 0, 0],
          [0, 0, -1, -2, -4, 0],
        ];
        const expectedValue = 13;
        const actualValue = hourglassMaxSumFinder(hourglassArray);

        return specFramework.buildSpec({
          behavior: 'it returns the max sum of all the hourglasses',
          expectation: new ExpectationThat(actualValue).equals(expectedValue),
        });
      },
    ],
  });
}
