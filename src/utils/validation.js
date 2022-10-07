import React from 'react';

export const validate = values => {
  const { username, email, age, priceProduct } = values;
  const errors = {};
  if (!priceProduct) {
    errors.priceProduct = 'Required';
    // eslint-disable-next-line no-restricted-globals
  } else if (isNaN(Number(priceProduct))) {
    errors.priceProduct = 'Must be a number';
  }

  if (!username) {
    errors.username = 'Required';
  } else if (username.length > 15) {
    errors.username = 'Must be 15 characters or less';
  }
  if (!email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
    errors.email = 'Invalid email address';
  }
  if (!age) {
    errors.age = 'Required';
    // eslint-disable-next-line no-restricted-globals
  } else if (isNaN(Number(age))) {
    errors.age = 'Must be a number';
  } else if (Number(age) < 18) {
    errors.age = 'Sorry, you must be at least 18 years old';
  }
  return errors;
};

export const warn = values => {
  const warnings = {};
  if (values.age < 19) {
    warnings.age = 'Hmm, you seem a bit young...';
  }
  return warnings;
};

export const renderField = ({
  input,
  label,
  type,
  meta: { touched, error, warning },
}) => (
  <>
    {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
    <label>{label}</label>
    <div>
      <input
        {...input}
        placeholder={label}
        type={type}
        className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0"
      />
      {touched &&
        ((error && <span className="text-[rgb(225,29,72)]">{error}</span>) ||
          (warning && (
            <span className="text-[rgb(234,179,8)]">{warning}</span>
          )))}
    </div>
  </>
);
