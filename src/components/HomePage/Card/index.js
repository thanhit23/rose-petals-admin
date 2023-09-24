import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

// eslint-disable-next-line max-len
function Card({ title, currentQuantity, quantityIncreased, iconCaret, numberPercent, colorPercent }) {
  return (
    <div className="col-span-1 p-4 bg-white shadow-[0px_1px_3px_#03004717] rounded-lg">
      <h6 className="mb-2 mt-0 text-base text-[#7D879C]">{title}</h6>
      <h3 className="mb-0.5 mt-0 text-xl text-black font-semibold">{currentQuantity}</h3>
      <div className="flex justify-between">
        <p className="my-0 text-sm text-[#AEB4BE]">{quantityIncreased}</p>
        <div className="flex">
          <FontAwesomeIcon className={`text-[${colorPercent}] h-4 w-4 mr-1`} icon={iconCaret} />
          <p className={`my-0 text-xs text-[${colorPercent}]`}>{numberPercent}%</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
