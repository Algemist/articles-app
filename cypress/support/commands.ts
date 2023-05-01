import * as commonCommands from './commands/common';
import * as profileCommands from './commands/profile';

Cypress.Commands.addAll(commonCommands);
Cypress.Commands.addAll(profileCommands);

export {};
