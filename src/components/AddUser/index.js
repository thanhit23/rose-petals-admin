import { FormattedMessage } from 'react-intl';
import { useForm } from 'react-hook-form';

import Breadcrumb from '../Breadcrumb';
import messages from './messages';

function AddUserComponent() {
  const { register, handleSubmit } = useForm();
  const onSubmit = data => console.log(data);
  return (
    <>
      <Breadcrumb title="Add User" />
      <div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        >
          <div className="mb-6">
            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="username"
            >
              <FormattedMessage {...messages.label_name} />
            </label>
            <FormattedMessage {...messages.placeholder_name}>
              {msg => (
                <input
                  className="h-[54px] shadow-md appearance-none border border-[#e2e8f0] rounded w-full py-[16px] px-3 text-[14px] text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                  id="username"
                  type="text"
                  placeholder={msg}
                  {...register('username', {
                    required: true,
                  })}
                />
              )}
            </FormattedMessage>
          </div>
          <div className="mb-6">
            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              <FormattedMessage {...messages.label_email} />
            </label>
            <FormattedMessage {...messages.placeholder_email}>
              {msg => (
                <input
                  className="h-[54px] shadow-md appearance-none border border-[#e2e8f0] rounded w-full py-[16px] px-3 text-[14px] text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                  id="email"
                  type="email"
                  placeholder={msg}
                  {...register('email', {
                    required: true,
                  })}
                />
              )}
            </FormattedMessage>
          </div>
          <div className="mb-6">
            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="phoneNumber"
            >
              <FormattedMessage {...messages.label_phoneNumber} />
            </label>
            <FormattedMessage {...messages.placeholder_phoneNumber}>
              {msg => (
                <input
                  className="h-[54px] shadow-md appearance-none border border-[#e2e8f0] rounded w-full py-[16px] px-3 text-[14px] text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                  id="phoneNumber"
                  type="number"
                  placeholder={msg}
                  {...register('phoneNumber', {
                    required: true,
                    maxLength: 20,
                    minLength: 9,
                  })}
                />
              )}
            </FormattedMessage>
          </div>
          <div className="mb-6">
            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="gender"
            >
              <FormattedMessage {...messages.label_gender} />
            </label>
            <input type="radio" />
            <select {...register('gender', { required: true })}>
              <option value="0">...</option>
              <option value="1">female</option>
              <option value="2">male</option>
            </select>
          </div>
          <div className="mb-6">
            <label htmlFor="field-rain">
              <input
                {...register('weather')}
                type="radio"
                value="female"
                id="female"
              />
              Rain
            </label>
            <label htmlFor="field-wind">
              <input
                {...register('weather')}
                type="radio"
                value="wind"
                id="field-wind"
              />
              Lots of wind
            </label>
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-[#007bff] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Sign In
            </button>
            <a
              className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
              href="#"
            >
              Forgot Password?
            </a>
          </div>
        </form>
      </div>
    </>
  );
}

export default AddUserComponent;
