import InputWithFormatMessage from '../InputWithFormatMessage';

function UploadFileComponent({ messages, validate, handleUploadImage }) {
  return (
    <InputWithFormatMessage
      className="file-img h-[100px] shadow-md appearance-none border border-[#e2e8f0] rounded w-full py-[16px] px-3 text-[14px] text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
      id="images"
      type="file"
      message={messages}
      validate={validate}
      multiple
      onChange={handleUploadImage}
    />
  );
}

export default UploadFileComponent;
