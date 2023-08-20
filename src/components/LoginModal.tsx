import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';

import CustomInput from './CustomInput';
import CustomButton from './CustomButton';
import { closeIcon } from '../assets';

const dropIn = {
    open: { y: 0 },
    closed: { y: "-100%" }
}

const LoginModal = ({ isOpen, setIsOpen }) => {
    const controls = useAnimation();

    useEffect(() => {
        if (isOpen) {
          controls.start("open");
        } else {
          controls.start("closed");
        }
      }, [isOpen, controls]);

  return (
    <motion.div className={`fixed inset-0 flex items-center justify-center bg-opacity-30 backdrop-blur-sm z-50 ${
        isOpen ? 'transition-opacity duration-300 opacity-100' : 'transition-opacity duration-300 opacity-0 pointer-events-none'
    }`}>
        <motion.div
            className='w-[600px] h-[600px] flex flex-col justify-start items-center bg-cover bg-center bg-no-repeat rounded-[10px]'
            variants={dropIn}
            initial="closed"
            animate={controls}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
        >
            <div 
                className='flex flex-col justify-around items-center w-full bg-cover bg-center bg-no-repeat rounded-[10px]'
                style={{ backgroundImage: "url('https://chipstars.bet/assets/images/log-in-header.jpg')" }}
            >
                <div className='flex justify-center items-center rounded-full w-[32px] h-[32px] ml-[90%] mt-4 hover:grayscale-2'>
                    <img 
                        src={closeIcon}
                        alt='close'
                        className='w-[20px] h-[20px] cursor-pointer'
                        onClick={() => setIsOpen(false)}
                    />

                </div>
                <div className='flex justify-center items-start w-[400px] h-[200px] mt-[20px]'>
                    <img 
                        src='https://chipstars.bet/images/register-box/register-text-box-mob.png'
                        alt='bonusImg'
                        className='w-full object-contain'
                    />
                </div>
            </div>
            <form className='flex flex-col justify-around gap-4 items-center bg-[#121212]'>
                <h1 className='ml-6 font-epilogue font-bold text-[30px] text-[#dce1e3] mb-6'>Login</h1>
                <CustomInput 
                    required
                    value=""
                    handleChange={() => {}}
                    inputType="text"
                    name="username"
                    placeHolder="Username"
                    outline
                />
                <CustomInput 
                    required
                    value=""
                    handleChange={() => {}}
                    inputType="password"
                    name="password"
                    placeHolder="Password"
                    outline
                />
                <div className='flex justify-between items-center w-full'>
                <div className='flex gap-2 items-center'>
                    <input 
                        className='py-[10px] sm:px-[25px] px-[10px] outline-none bg-[#222] hover:bg-[#555] font-epilogue text-white 
                                    text-[14px] placeholder:text-[#fff] placeholder:font-thin rounded-[10px] transition-all duration-300 ease-in-out cursor-pointer'
                        type='checkbox'
                        style={{
                            color: '#874ce8',
                            width: '20px',
                            height: '20px',
                        }}
                    />
                    <span className='text-white text-[14px] font-epilogue'>Remember me</span>
                </div>
                <span className='text-[#874ce8] text-[16px] hover:text-white transition-all duration-500 ease-in-out cursor-pointer'>
                                    Forgot password?
                                </span>
                </div>
                <div className='flex justify-center items-center w-full'>
                    <CustomButton 
                        btnType="button"
                        title="LOG IN"
                        handleClick={() => {}}
                        styles="bg-[#874ce8] hover:text-[#874ce8] hover:bg-white transition-all duration-500 ease-in-out w-full font-epilogue"
                    />
                </div>
            </form>
            <div className='flex justify-around items-center w-full m-4'>
                <span className='text-white font-epilogue text-[14px]'>
                        Don't have an account? &nbsp;
                        <span className='text-[#874ce8] text-[14px] hover:text-white transition-all duration-500 ease-in-out cursor-pointer'>
                            Register now
                        </span>
                </span>
            </div>

        </motion.div>
    </motion.div>
  )
}

export default LoginModal;