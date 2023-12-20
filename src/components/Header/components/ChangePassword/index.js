import { yupResolver } from '@hookform/resolvers/yup';
import React from 'react';
import { useForm } from 'react-hook-form';
import { FormattedMessage, useIntl } from 'react-intl';
import * as Yup from 'yup';
import ErrorMessage from '../../../ErrorMessage';
import InputWithFormatMessage from '../../../InputWithFormatMessage';
import LabelWithFormatMessage from '../../../LabelWithFormatMessage';
import messages from '../../messages';

function ChangePassword({ onChangePassword }) {
  const t = useIntl();

  const validationSchema = Yup.object().shape({
    password: Yup.string()
      .required(t.formatMessage({ ...messages.message.passwordRequired }))
      .min(8, t.formatMessage({ ...messages.message.passwordMinLength }))
      .max(16, t.formatMessage({ ...messages.message.passwordMaxLength }))
      .matches(/^(?=.*[0-9])/, t.formatMessage({ ...messages.message.passwordContainNumber })),
    confirmPassword: Yup.string()
      .required(t.formatMessage({ ...messages.message.confirmPasswordRequired }))
      .oneOf([Yup.ref('password')], t.formatMessage({ ...messages.message.confirmPasswordMustMatchPassword })),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
    defaultValues: {
      password: '',
      confirmPassword: '',
    },
  });

  const callback = () => window.location.reload();

  const onSubmit = ({ password }) => onChangePassword({ password, callback });

  return (
    <div>
      <div className="col-span-4">
        <form onSubmit={handleSubmit(data => onSubmit(data))}>
          <div className="mb-6">
            <LabelWithFormatMessage
              className="block mb-2 text-sm font-bold text-gray-700"
              message={messages.label.password.newPassword}
              htmlFor="password"
              requiredField
            />
            <InputWithFormatMessage
              id="password"
              type="text"
              message={messages.placeholder.password.newPassword}
              className="h-[54px] shadow-md appearance-none border border-[#e2e8f0] rounded w-full py-[16px] px-3 text-[14px] text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              validate={register('password')}
            />
            <ErrorMessage name={errors?.password} />
          </div>
          <div className="mb-6">
            <LabelWithFormatMessage
              className="block mb-2 text-sm font-bold text-gray-700"
              message={messages.label.password.confirmPassword}
              htmlFor="confirmPassword"
              requiredField
            />
            <InputWithFormatMessage
              className="h-[54px] shadow-md appearance-none border border-[#e2e8f0] rounded w-full py-[16px] px-3 text-[14px] text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="confirmPassword"
              type="text"
              message={messages.placeholder.password.confirmPassword}
              validate={register('confirmPassword')}
            />
            <ErrorMessage name={errors?.confirmPassword} />
          </div>
          <div className="flex items-center justify-end">
            <button
              className="bg-[#007bff] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              <FormattedMessage {...messages.btn.submit} />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ChangePassword;
