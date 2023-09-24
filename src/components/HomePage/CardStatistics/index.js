import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function CardStatistics({ title, currentQuantity, iconCaret, numberPercent, colorPercent }) {
  return (
    <div className="md:col-span-3 col-span-6 p-4 bg-white shadow-[0px_1px_3px_#03004717] rounded-lg">
      <h6 className="mb-2 mt-0 text-base text-[#7D879C]">{title}</h6>
      <h3 className="mb-0.5 mt-0 text-xl text-black font-semibold">{currentQuantity}</h3>
      <div className="flex">
        <FontAwesomeIcon className={`text-[${colorPercent}] h-4 w-4 mr-1`} icon={iconCaret} />
        <p className={`my-0 text-xs text-[${colorPercent}]`}>{numberPercent}%</p>
      </div>
    </div>
  );
}

export default CardStatistics;
