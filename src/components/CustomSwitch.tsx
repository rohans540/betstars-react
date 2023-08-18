import React, { useState } from 'react';

const CustomSwitch = ({ className, checked, onChange, }) => {
  const [isOn, setIsOn] = useState(false);

  return (
    <div className={`${className} flex justify-start items-center space-x-2`}>
      <button
        className={`relative h-6 w-12 rounded-full p-1 focus:outline-none transition-transform ${
          checked ? 'bg-[#2eca45]' : 'bg-gray-300'
        }`}
        onClick={onChange}
      >
        <div
          className={`absolute inset-y-0 left-0 h-[23px] w-[23px] rounded-full transform transition-transform ${
            checked ? 'translate-x-6' : 'translate-x-0'
          } bg-white shadow`}
        ></div>
      </button>
    </div>
  );
};

export default CustomSwitch;
