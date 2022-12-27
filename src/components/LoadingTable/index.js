import React from 'react';

function LoadingTable() {
  return (
    <div className="z-[100] z-[1000] top-0 w-full h-full flex justify-center items-center">
      <div className="lds-table-ring">
        <div />
        <div />
        <div />
        <div />
      </div>
    </div>
  );
}

export default LoadingTable;
