import ExpectationThat from '../../SpecFramework/ExpectationThat';
import Logger from '../../SpecFramework/Logger';
import SpecFramework from '../../SpecFramework';
import * as utils from '../../SpecFramework/utils';

const specFramework = new SpecFramework(Logger);

export {
  ExpectationThat,
  specFramework,
  utils,
};
