import { confirmAlert } from 'react-confirm-alert';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleExclamation } from '@fortawesome/free-solid-svg-icons';
import 'react-confirm-alert/src/react-confirm-alert.css';

function ConfirmModal({ children, classNames, callback }) {
  const submit = () => {
    confirmAlert({
      // eslint-disable-next-line react/no-unstable-nested-components
      customUI: ({ onClose }) => {
        return (
          <div className="custom-ui p-4 bg-white shadow-default rounded w-[500px] h-[250px]">
            <div className="flex flex-col h-full justify-center items-center">
              <div className="flex justify-center">
                <FontAwesomeIcon
                  className="text-[75px] text-white bg-[#f9bb82] rounded-full border-solid border-[#f9bb82] border-[3px]"
                  icon={faCircleExclamation}
                />
              </div>
              <h1 className="mt-3">Are you sure?</h1>
              <div className="flex flex-wrap mt-4">
                <button
                  type="button"
                  className="bg-[#6f6f6f] hover:bg-[#7f7f7f] text-white font-bold py-2 px-4 mr-3 rounded"
                  onClick={onClose}
                >
                  No
                </button>
                <button
                  type="button"
                  className="bg-[#e64e4e] hover:bg-[#e26969] text-white font-bold py-2 px-4 rounded"
                  onClick={() => {
                    callback();
                    onClose();
                  }}
                >
                  Yes, Delete it!
                </button>
              </div>
            </div>
          </div>
        );
      },
    });
  };

  return (
    <button type="button" onClick={() => submit()} className={classNames}>
      {children}
    </button>
  );
}

export default ConfirmModal;
