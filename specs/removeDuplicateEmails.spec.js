import {
  ExpectationThat,
  specFramework,
  utils
} from './support/specHelper';
import generateEmails from './support/generateEmails';
import removeDuplicateEmails from '../src/removeDuplicateEmails';

export default function() {
  return specFramework.runSpecs({
    descriptions: ['removeDuplicateEmails'],
    specs: [
      () => {
        const emails = generateEmails();
        const t0 = utils.getTime();
        const maxTime = 1000;

        return Promise.resolve(removeDuplicateEmails(emails))
          .then(() => {
            const t1 = utils.getTime();
            const actualTimeToComplete = t1-t0;

            return specFramework.buildSpec({
              behavior: 'it takes less than 1 second to finish',
              expectation: new ExpectationThat(actualTimeToComplete).isLessThan(maxTime)
            });
          });
      },

      () => {
        const emails = [
          'foo@gmail.com',
          'bar@gmail.com',
          'baz@gmail.com',
          'foo@yahoo.com',
          'bar@yahoo.com',
          'baz@yahoo.com',
          'foo@gmail.com'
        ];
        const actualValue = removeDuplicateEmails(emails).sort();
        const expectedValue = [
          'foo@gmail.com',
          'bar@gmail.com',
          'baz@gmail.com',
          'foo@yahoo.com',
          'bar@yahoo.com',
          'baz@yahoo.com'
        ].sort();

        return specFramework.buildSpec({
          behavior: 'it removes the duplicates',
          expectation: new ExpectationThat(actualValue).arrayEquals(expectedValue)
        });
      },

      () => {
        const emails = [
          'foo@gmail.com',
          'foo@gmail.com',
          'foo@gmail.com'
        ];
        const actualValue = removeDuplicateEmails(emails).sort();
        const expectedValue = [
          'foo@gmail.com'
        ];

        return specFramework.buildSpec({
          behavior: 'it removes the duplicates',
          expectation: new ExpectationThat(actualValue).arrayEquals(expectedValue)
        });
      },

      () => {
        const emails = [
          'bar@yahoo.com',
          'foo@gmail.com',
          'bar@gmail.com',
          'baz@gmail.com',
          'baz@gmail.com',
          'baz@gmail.com',
          'baz@gmail.com',
          'foo@gmail.com',
          'bar@yahoo.com',
          'foo@yahoo.com',
          'foo@gmail.com',
          'foo@gmail.com',
          'baz@gmail.com',
          'bar@yahoo.com',
          'baz@gmail.com',
          'foo@gmail.com',
          'bar@yahoo.com',
          'baz@yahoo.com',
          'baz@gmail.com',
        ];
        const actualValue = removeDuplicateEmails(emails).sort();
        const expectedValue = [
          'foo@gmail.com',
          'bar@gmail.com',
          'baz@gmail.com',
          'foo@yahoo.com',
          'bar@yahoo.com',
          'baz@yahoo.com'
        ].sort();

        return specFramework.buildSpec({
          behavior: 'it removes the duplicates',
          expectation: new ExpectationThat(actualValue).arrayEquals(expectedValue)
        });
      },
    ]
  });
}
