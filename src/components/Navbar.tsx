import React, { useState } from 'react';

const Icon = ({ styles, imgUrl, isActive, disabled, handleClick }) => (
    <div 
        className='md:m-6 ml-8 bg-[#1b1a1a] w-[40px] h-[38px] rounded-[10px] flex justify-center items-center cursor-pointer'
        onClick={handleClick}
    >
        <img 
            src={imgUrl}
        />
    </div>
)

const Navbar = ({ setIsRegOpen, setIsLoginOpen }) => {
    const [isActive, setIsActive] = useState(false);
    const [activeTab, setActiveTab] = useState("casino");
  return (
   <nav className='flex justify-between mb-[35px] w-full pr-[40px]'>
        <div
            className='w-[150px] h-[20px] m-6 hidden md:block'
        >
            <img 
                src='https://chipstars.bet/images/logo-REGULAR.svg'
                alt='logo'
            />
        </div>
        <Icon  
              styles={{}}
              imgUrl={isActive ? 'https://chipstars.bet/images/hamburger-menu-close.svg' : `https://chipstars.bet/images/hamburger-menu.svg`}
              disabled={false}
              handleClick={() => setIsActive(!isActive)} isActive={undefined} 
        />
        <div className='rounded-[15px] m-6 bg-[#0d0d0d] h-[40px] flex justify-between items-center cursor-pointer md:flex hidden'>
            <div 
                className={`${activeTab === 'casino' ? 'bg-[#2e2e2e]' : ''} flex w-auto gap-4 justify-between items-center rounded-[15px] p-2`}
                onClick={() => setActiveTab('casino')}
            >
                <img
                    src='https://chipstars.bet/images/star-solid.svg'
                    alt='star'
                    className='w-[20px] h-[20px] object-contain'
                 />
                <span className='font-epilogue text-white'>Casino</span>
            </div>
            <div 
                className={`${activeTab === 'sportsbook' ? 'bg-[#2e2e2e]' : ''} flex gap-4 justify-between items-center rounded-[15px] p-2`}
                onClick={() => setActiveTab('sportsbook')}
            >
                <img
                    src='https://chipstars.bet/images/futbol-solid.svg'
                    alt='star'
                    className='w-[20px] h-[20px] object-contain'
                 />
                <span className='font-epilogue text-white'>Sportsbook</span>
            </div>
        </div>
        <div className='flex gap-4 items-center'>
                <button 
                    className='border-[2px] border-[#ad0f0a] md:h-[50px] h-[30px] md:w-[130px] w-[100px] box-border rounded-[9.6px] cursor-pointer'
                    onClick={() => setIsRegOpen(open => !open)}
                >
                    <span className='font-epilogue text-white font-600'>Register</span>
                </button>

                <button 
                    className='bg-[#ad0f0a] md:h-[50px] h-[30px] md:w-[120px] w-[90px] box-border rounded-[9.6px] cursor-pointer'
                    onClick={() => setIsLoginOpen(open => !open)}
                >
                    <span className='font-epilogue text-white font-600'>Login</span>
                </button>

        </div>
   </nav>
  )
}

export default Navbar;