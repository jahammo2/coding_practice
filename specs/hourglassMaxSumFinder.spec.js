import {
  ExpectationThat,
  specFramework,
  utils
} from './support/specHelper';
// import { makeAnagramStressData } from './support/stressData';
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
          [0, 0, 1, 2, 4, 0]
        ];
        const expectedValue = 28;
        const actualValue = hourglassMaxSumFinder(hourglassArray);

        return specFramework.buildSpec({
          behavior: 'it returns the max sum of all the hourglasses',
          expectation: new ExpectationThat(actualValue).equals(expectedValue)
        });
      },

      () => {
        const hourglassArray = [
          [1, 1, 1, 0, 0, 0],
          [0, 1, 0, 0, 0, 0],
          [1, 1, 1, 0, 0, 0],
          [0, 0, 2, 4, 4, 0],
          [0, 0, 0, 2, 0, 0],
          [0, 0, 1, 2, 4, 0]
        ];
        const expectedValue = 19;
        const actualValue = hourglassMaxSumFinder(hourglassArray);

        return specFramework.buildSpec({
          behavior: 'it returns the max sum of all the hourglasses',
          expectation: new ExpectationThat(actualValue).equals(expectedValue)
        });
      },

      () => {
        const hourglassArray = [
          [ 1, 1, 1, 0, 0, 0 ],
          [ 0, 1, 0, 0, 0, 0 ],
          [ 1, 1, 1, 0, 0, 0 ],
          [ 0, 9, 2, -4, -4, 0 ],
          [ 0, 0, 0, -2, 0, 0 ],
          [ 0, 0, -1, -2, -4, 0 ]
        ];
        const expectedValue = 13;
        const actualValue = hourglassMaxSumFinder(hourglassArray);

        return specFramework.buildSpec({
          behavior: 'it returns the max sum of all the hourglasses',
          expectation: new ExpectationThat(actualValue).equals(expectedValue)
        });
      },

      // () => {
      //   const t0 = utils.getTime();
      //   const maxTime = 1000;
      //
      //   return Promise.resolve(makeAnagram(
      //     makeAnagramStressData.str1,
      //     makeAnagramStressData.str2
      //   ))
      //     .then(() => {
      //       const t1 = utils.getTime();
      //       const actualTimeToComplete = t1 - t0;
      //
      //       return specFramework.buildSpec({
      //         behavior: 'it takes less than 1 second to finish',
      //         expectation: new ExpectationThat(actualTimeToComplete).isLessThan(maxTime)
      //       });
      //     });
      // }
    ]
  });
}
