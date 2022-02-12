import { SetMetadata } from '@nestjs/common';

/**
* middle keys constant
* @name MIDDLE_KEYS
* @kind constant
*/
export const MIDDLE_KEYS = 'middle keys';

/**
* Decorator. Passes to the guard the keys that must be in the token
* @name Keys
* @kind function
* @property {string[]}  keys  - array with keys
* @returns {object} SetMetadata - metadata class
*/
export const Keys = (...keys: string[]) =>
    SetMetadata(MIDDLE_KEYS, [...keys, 'iat']);
