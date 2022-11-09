import { defineMessages } from 'react-intl';

export const scope = 'Components.User.add';

export default defineMessages({
  label: {
    name: {
      id: `${scope}.label.name`,
      defaultMessage: 'Username',
    },
    phone_number: {
      id: `${scope}.label.phoneNumber`,
      defaultMessage: 'Phone Number',
    },
    gender: {
      id: `${scope}.label.gender`,
      defaultMessage: 'Gender',
    },
    email: {
      id: `${scope}.label.email`,
      defaultMessage: 'Email',
    },
    password: {
      id: `${scope}.label.password`,
      defaultMessage: 'Password',
    },
  },
  placeholder: {
    name: {
      id: `${scope}.placeholder.name`,
      defaultMessage: 'Username',
    },
    phone_number: {
      id: `${scope}.placeholder.phoneNumber`,
      defaultMessage: '+84 123-456-789',
    },
    email: {
      id: `${scope}.placeholder.email`,
      defaultMessage: 'abc@gmail.com',
    },
    password: {
      id: `${scope}.placeholder.password`,
      defaultMessage: 'Password.....',
    },
  },
  gender: {
    female: {
      id: `${scope}.gender.female`,
      defaultMessage: 'Female',
    },
    male: {
      id: `${scope}.gender.male`,
      defaultMessage: 'Male',
    },
  },
  btn: {
    submit: {
      id: `${scope}.button.submit`,
      defaultMessage: 'Submit',
    },
  },
});
