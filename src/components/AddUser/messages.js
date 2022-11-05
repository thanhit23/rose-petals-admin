import { defineMessages } from 'react-intl';

export const scope = 'Components.Add_user';

export default defineMessages({
  label_name: {
    id: `${scope}.label.name`,
    defaultMessage: 'Username',
  },
  label_phoneNumber: {
    id: `${scope}.label.phone_number`,
    defaultMessage: 'Phone Number',
  },
  label_gender: {
    id: `${scope}.label.gender`,
    defaultMessage: 'Gender',
  },
  label_email: {
    id: `${scope}.label.email`,
    defaultMessage: 'Email',
  },
  placeholder_name: {
    id: `${scope}.placeholder.name`,
    defaultMessage: 'Username',
  },
  placeholder_phoneNumber: {
    id: `${scope}.placeholder.phoneNumber`,
    defaultMessage: '+84 123-456-789',
  },
  placeholder_email: {
    id: `${scope}.placeholder.email`,
    defaultMessage: 'abc@gmail.com',
  },
  placeholder_password: {
    id: `${scope}.placeholder.password`,
    defaultMessage: 'Password.....',
  },
  label_password: {
    id: `${scope}.label.password`,
    defaultMessage: 'Password',
  },
  gender_female: {
    id: `${scope}.gender.female`,
    defaultMessage: 'female',
  },
  gender_male: {
    id: `${scope}.gender.male`,
    defaultMessage: 'male',
  },
  message_error_required: {
    id: `${scope}.message.error.required`,
    defaultMessage: 'This is required',
  },
  message_error_length: {
    id: `${scope}.message.error.length`,
    defaultMessage: 'Length from 9 -15 characters',
  },
  message_error_isNumber: {
    id: `${scope}.message.error.isNumber`,
    defaultMessage: 'This field must be a number',
  },
  btn_submit: {
    id: `${scope}.button.submit`,
    defaultMessage: 'Submit',
  },
});
