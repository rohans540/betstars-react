import React, { useState } from 'react';

const CustomSwitch = ({ className }) => {
  const [isOn, setIsOn] = useState(false);

  const handleToggle = () => {
    setIsOn(prevState => !prevState);
  };

  return (
    <div className={`${className} flex justify-start items-center space-x-2`}>
      <button
        className={`relative h-6 w-11 rounded-full p-1 focus:outline-none transition-transform ${
          isOn ? 'bg-[#2eca45]' : 'bg-gray-300'
        }`}
        onClick={handleToggle}
      >
        <div
          className={`absolute inset-y-0 left-0 h-6 w-6 rounded-full transform transition-transform ${
            isOn ? 'translate-x-7' : 'translate-x-0'
          } bg-white shadow`}
        ></div>
      </button>
    </div>
  );
};

export default CustomSwitch;
