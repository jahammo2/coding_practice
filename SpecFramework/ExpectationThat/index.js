import Logger from '../Logger';
import {
  arraysInitiallyOrderedTheSame,
  arraysNotReversed
} from '../utils';

class ExpectationThat {
  constructor(actualValue) {
    this.actualValue = actualValue;
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
