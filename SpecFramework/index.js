import {
  GREEN,
  RED
} from './constants/colors';

class SpecFramework {
  constructor(logger) {
    this.logger = logger;
    this.specSpaces = 0;
  }

  buildSpec({ behavior, expectation }) {
    if (!expectation.passed) {
      return new this.logger({
        spaces: this.specSpaces + 2,
        text: expectation.errorMessage,
        color: RED
      }).run();
    }

    return new this.logger({
      spaces: this.specSpaces,
      text: behavior,
      color: GREEN
    }).run();
  }

  runSpecs({ descriptions, specs }) {
    this.logDescriptions({ descriptions });
    this.specSpaces = descriptions.length * 2;

    return new Promise((resolve) => {
      return specs.forEach((spec, i) => {
        spec();

        if (i === specs.length - 1) {
          resolve();
        }
      });
    });
  }

  logDescriptions({ descriptions }) {
    return descriptions.forEach((description, index) => {
      new this.logger({
        spaces: index * 2,
        text: description,
        color: GREEN
      }).run();
    });
  }
}

export default SpecFramework;
