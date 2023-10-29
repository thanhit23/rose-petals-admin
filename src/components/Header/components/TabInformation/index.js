import { FormattedMessage } from 'react-intl';
import React from 'react';
import { useForm } from 'react-hook-form';
import LabelWithFormatMessage from '../../../LabelWithFormatMessage';
import messages from '../../messages';
import InputWithFormatMessage from '../../../InputWithFormatMessage';
import { required } from '../../../../utils/validation';
import ErrorMessage from '../../../ErrorMessage';

function TabInformation({ auth, onUpdate }) {
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
      <div className="grid grid-cols-7 gap-4">
        <div className="col-span-3 flex flex-col items-center gap-5 justify-center">
          <img
            src="https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png"
            className="rounded-full w-[80px] h-[80px] object-cover"
            alt="asdasdasd"
          />
          <p>{auth?.name}</p>
          <p>Email: {auth?.email}</p>
        </div>
        <div className="col-span-4">
          <form onSubmit={handleSubmit(data => onSubmit(data))}>
            <div className="mb-6">
              <LabelWithFormatMessage
                className="block text-gray-700 text-sm font-bold mb-2"
                message={messages.label.email}
                htmlFor="name"
                requiredField
              />
              <input
                disabled
                id="name"
                type="text"
                value={auth?.email}
                className="h-[54px] shadow-md appearance-none border border-[#e2e8f0] rounded w-full py-[16px] px-3 text-[14px] text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-6">
              <LabelWithFormatMessage
                className="block text-gray-700 text-sm font-bold mb-2"
                message={messages.label.name}
                htmlFor="name"
                requiredField
              />
              <InputWithFormatMessage
                className="h-[54px] shadow-md appearance-none border border-[#e2e8f0] rounded w-full py-[16px] px-3 text-[14px] text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                type="text"
                defaultValue="Nguyễn Duy Thành"
                message={messages.placeholder.name}
                validate={register('name', required(messages.message.required))}
              />
              <ErrorMessage name={errors?.name} />
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
    </div>
  );
}

export default TabInformation;
