import { useState } from 'react';
import clx from 'classnames';

function TabPanel({ current, className, tabs }) {
  const [currentTab, setCurrentTab] = useState(current);

  return (
    <>
      <div className="flex gap-2 justify-center">
        {tabs.map(({ title, value }, i) => (
          <button
            type="button"
            key={i}
            onClick={() => setCurrentTab(value)}
            className={clx(className, 'border-[#e5e7eb] border-b-[3px] hover:border-[#007bff]', {
              'border-b-[3px] border-[#007bff] text-[#007bff]': currentTab === value,
            })}
          >
            <p className="capitalize min-w-[140px]">{title}</p>
          </button>
        ))}
      </div>
      <div className="mt-8">{tabs.find(tab => tab.value === currentTab).component}</div>
    </>
  );
}

export default TabPanel;
