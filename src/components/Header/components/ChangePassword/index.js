import { FormattedMessage } from 'react-intl';
import React from 'react';
import { useForm } from 'react-hook-form';
import LabelWithFormatMessage from '../../../LabelWithFormatMessage';
import messages from '../../messages';
import InputWithFormatMessage from '../../../InputWithFormatMessage';
import { required } from '../../../../utils/validation';
import ErrorMessage from '../../../ErrorMessage';

function ChangePassword({ auth, onUpdate }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: auth,
  });

  const onSubmit = data => onUpdate({ id: auth.id, ...data });

  return (
    <div>
      <div className="col-span-4">
        <form onSubmit={handleSubmit(data => onSubmit(data))}>
          <div className="mb-6">
            <LabelWithFormatMessage
              className="block text-gray-700 text-sm font-bold mb-2"
              message={messages.label.password.current}
              htmlFor="currentPassword"
              requiredField
            />
            <InputWithFormatMessage
              id="currentPassword"
              type="text"
              message={messages.placeholder.password.current}
              className="h-[54px] shadow-md appearance-none border border-[#e2e8f0] rounded w-full py-[16px] px-3 text-[14px] text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              validate={register('currentPassword', required(messages.message.required))}
            />
            <ErrorMessage name={errors?.currentPassword} />
          </div>
          <div className="mb-6">
            <LabelWithFormatMessage
              className="block text-gray-700 text-sm font-bold mb-2"
              message={messages.label.password.new}
              htmlFor="newPassword"
              requiredField
            />
            <InputWithFormatMessage
              className="h-[54px] shadow-md appearance-none border border-[#e2e8f0] rounded w-full py-[16px] px-3 text-[14px] text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="newPassword"
              type="text"
              message={messages.placeholder.password.new}
              validate={register('newPassword', required(messages.message.required))}
            />
            <ErrorMessage name={errors?.newPassword} />
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
