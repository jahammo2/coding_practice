import Logger from '../Logger';
import {
  checkIfArrayEquivalence
} from '../utils';

class ExpectationThat {
  constructor(actualValue) {
    this.actualValue = actualValue;
  }

  arrayEquals(expectedValue) {
    return {
      passed: checkIfArrayEquivalence(this.actualValue, expectedValue),
      errorMessage: `expected ${this.actualValue} to deeply equal ${expectedValue}`
    }
  }

  equals(expectedValue) {
    return {
      passed: this.actualValue === expectedValue,
      errorMessage: `expected ${this.actualValue} to equal ${expectedValue}`
    }
  }

  isLessThan(max) {
    return {
      passed: this.actualValue < max,
      errorMessage: `expected ${this.actualValue} to be less than ${max}`
    }
  }
}

export default ExpectationThat;
