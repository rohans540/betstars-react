import React, { useState } from 'react'

import { navLinks } from '../constants';

const Icon = ({ styles, name, imgUrl, isActive, disabled, handleClick }) => (
  <div className={`w-[48px] h-[48px] rounded-[10px] ${isActive && isActive === name && 'bg-[#2c2f32]'} flex justify-center items-center
   ${!disabled && 'cursor-pointer'} ${styles}`} onClick={handleClick}>
      <img src={imgUrl} alt='fund_logo' className='w-1/2 h-1/2' />
  </div>
);

const Sidebar = () => {
  const [isActive, setIsActive] = useState('Rakeback');
  return (
    <div className='flex justify-between items-center flex-col sticky top-2 h-[100vh] w-[65px]'>
      <div className='flex-1 flex flex-col justify-between items-center bg-[#1b1a1a] w-[60px] h-full py-4'>
        <div className='flex flex-col justify-center items-center gap-3'>
            {navLinks.map((link) => (
              <Icon 
                styles={undefined} disabled={undefined} key={link.name}
                {...link}
                isActive={isActive}
                handleClick={() => {
                  setIsActive(link.name);
                } }              />
            ))}
        </div>
      </div>
    </div>
  )
}

export default Sidebar;