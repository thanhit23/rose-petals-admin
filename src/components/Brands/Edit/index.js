import { FormattedMessage } from 'react-intl';
import { useForm } from 'react-hook-form';
import { useEffect, useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';
import { isEmpty } from 'lodash';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import Breadcrumb from '../../Breadcrumb';
import messages from './messages';
import LabelWithFormatMessage from '../../LabelWithFormatMessage';
import InputWithFormatMessage from '../../InputWithFormatMessage';
import ErrorMessage from '../../ErrorMessage';
import UploadFileComponent from '../../UploadFile';
import { required } from '../../../utils/validation';

function EditBrandComponent({ onSubmit, data: dataBrand }) {
  const { id } = useParams();

  const [file, setFile] = useState('');

  const [images, setImages] = useState([]);

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: dataBrand,
  });

  useEffect(() => {
    !isEmpty(dataBrand) && reset(dataBrand);
    const { logo: imagesDefault } = dataBrand;
    setImages([imagesDefault]);
  }, [dataBrand]);

  const { name, logo } = errors;

  const handleOnSubmit = data => {
    const { _id, slug, createdAt, updatedAt, ...dataUpdate } = data;
    onSubmit(id, { ...dataUpdate, logo: images.toString() }, file);
  };

  const handleUploadImage = ({ target: { files } }) => setFile(files);

  const handleRemoveFile = () => setImages([]);

  const renderUploadComponent = useMemo(
    () => (
      <UploadFileComponent
        messages={messages.placeholder.images}
        validate={register('images', required(messages.message.required))}
        handleUploadImage={handleUploadImage}
        multiple={false}
      />
    ),
    [],
  );

  const renderImages = () =>
    images.map((i, k) => (
      <div key={k} className="relative mr-5">
        <img loading="lazy" className="w-[60px]" decoding="async" src={i} alt="logo-brand" />
        <button
          type="button"
          className="absolute top-[-15px] right-[-15px] flex w-[35px] h-[35px] bg-[#efefef] items-center justify-center rounded-full"
          onClick={() => handleRemoveFile(i)}
        >
          <FontAwesomeIcon icon={faXmark} />
        </button>
      </div>
    ));

  return (
    <>
      <Breadcrumb prevPage={{ path: '/admin/brands', name: 'list_brand' }} title="edit_brand" />
      <div>
        <form
          onSubmit={handleSubmit(data => handleOnSubmit(data))}
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        >
          <div className="mb-6">
            <LabelWithFormatMessage
              className="block text-gray-700 text-sm font-bold mb-2"
              message={messages.label.name}
              htmlFor="name"
              requiredField
            />
            <InputWithFormatMessage
              message={messages.placeholder.name}
              className="h-[54px] shadow-md appearance-none border border-[#e2e8f0] rounded w-full py-[16px] px-3 text-[14px] text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              validate={register('name')}
            />
            <ErrorMessage name={name} />
          </div>
          <div className="mb-6">
            <LabelWithFormatMessage
              message={messages.label.images}
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="images"
              requiredField
            />
            {renderUploadComponent}
            <ErrorMessage name={logo} />
            <div className="flex flex-wrap mt-4">{renderImages()}</div>
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-[#007bff] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              <FormattedMessage {...messages.btn.submit} />
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

EditBrandComponent.prototype = {
  onSubmitForUpdateUser: PropTypes.func,
  data: PropTypes.array,
};

export default EditBrandComponent;
