import { defineMessages } from 'react-intl';

export const scope = 'Containers.User.list';

export default defineMessages({
  gender_female: {
    id: `${scope}.gender.female`,
    defaultMessage: 'Female',
  },
  gender_male: {
    id: `${scope}.gender.male`,
    defaultMessage: 'Male',
  },
});
