import { errorsType } from '../stateTypes';

export function isRequired(value: string) {
  return value.length > 0 ? '' : 'cannot be blank';
}

export function isEmail(value: string) {
  const atIndex = value.indexOf('@');

  const greatestDotIndex = value
    .split('')
    .reduce(
      (accumulator, character, index) =>
        character === '.' ? index : accumulator,
      0
    );
  return atIndex > -1 && greatestDotIndex > atIndex ? '' : 'must be an email';
}

export function maxLength(number: number, value: string) {
  return value.length > number ? 'maximum length reached' : '';
}

export function minLength(number: number, value: string) {
  return value.length < number ? `minimum length ${number}` : '';
}

export function hasError(errors: errorsType): boolean {
  return !Object.values(errors).every((error) => error.length === 0);
}
