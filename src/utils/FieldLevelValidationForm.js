export const required = value =>
  value || typeof value === 'number' ? undefined : 'Required';
const maxLength = max => value =>
  value && value.length > max ? `Must be ${max} characters or less` : undefined;
export const maxLength15 = maxLength(15);
export const minLength = min => value =>
  value && value.length < min ? `Must be ${min} characters or more` : undefined;
export const minLength2 = minLength(2);
export const number = value =>
  // eslint-disable-next-line no-restricted-globals
  value && isNaN(Number(value)) ? 'Must be a number' : undefined;
const minValue = min => value =>
  value && value < min ? `Must be at least ${min}` : undefined;
export const minValue13 = minValue(13);

// eslint-disable-next-line consistent-return
export const email = value => {
  if (value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
    return 'Invalid email address';
  }
};
// eslint-disable-next-line consistent-return
export const tooYoung = value => {
  if (value && value < 13) {
    return 'You do not meet the minimum age requirement!';
  }
};
// eslint-disable-next-line consistent-return
export const aol = value => {
  if (value && /.+@aol\.com/.test(value)) {
    return 'Really? You still use AOL for your email?';
  }
};
// eslint-disable-next-line consistent-return
export const alphaNumeric = value => {
  if (value && /[^a-zA-Z0-9 ]/i.test(value)) {
    return 'Only alphanumeric characters';
  }
};
// eslint-disable-next-line consistent-return
export const phoneNumber = value => {
  if (value && !/^(0|[1-9][0-9]{9})$/i.test(value)) {
    return 'Invalid phone number, must be 10 digits';
  }
};
