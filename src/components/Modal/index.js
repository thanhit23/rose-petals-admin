import { useState } from 'react';
import { CloseIcon } from '../common/icons';

const ViewModal = ({ title, content, setIsOpen }) => (
  <div className="fixed inset-0 z-[999] bg-[rgba(0,0,0,0.2)] overflow-x-hidden overflow-y-auto">
    <div className="relative w-full h-full flex justify-center items-center">
      <div className="relative w-full z-10 max-w-2xl max-h-full mx-5">
        <div className="relative bg-white rounded-lg shadow">
          <div className="flex items-start justify-between p-4 pb-0 rounded-t">
            <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="text-gray-400 duration-300 transition-all hover:bg-[#b2d0ef] hover:text-gray-400 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center"
            >
              <CloseIcon />
            </button>
          </div>
          <div className="p-6 min-h-[250px]">{content}</div>
        </div>
      </div>
      <div className="absolute inset-0 z-[9]" onClick={() => setIsOpen(false)} />
    </div>
  </div>
);

function Modal({ title, content, trigger: Component }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {isOpen && <ViewModal title={title} content={content} setIsOpen={setIsOpen} />}
      <Component onClick={() => setIsOpen(true)} />
    </>
  );
}

export default Modal;
