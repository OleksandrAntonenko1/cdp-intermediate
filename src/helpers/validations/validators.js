import { invalidEmail, fieldIsRequired, latinLettersAnDigitsShouldBeUsed } from "./validationMessages";

export const isEmail = value =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? invalidEmail
    : undefined;

export const isLatin = value =>
  value && !/[A-Z0-9]+/i.test(value)
    ? latinLettersAnDigitsShouldBeUsed
    : undefined;

export const isEmpty = value => value ? undefined : fieldIsRequired;
