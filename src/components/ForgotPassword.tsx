import React from 'react';
import { motion } from 'framer-motion';

import CustomInput from './CustomInput';
import CustomButton from './CustomButton';
import { closeIcon } from '../assets';

const ForgotPassword = ({ isOpen, setIsOpen }) => {
  return (
    <motion.div className={`fixed inset-0 flex items-center justify-center bg-opacity-30 bg-[#222] backdrop-blur-sm z-50 ${
        isOpen ? 'transition-opacity duration-300 opacity-100' : 'transition-opacity duration-300 opacity-0 pointer-events-none'
    }`}>
        <motion.div className='w-[400px] h-[600px] bg-[#121212] flex flex-col justify-start gap-6 items-center rounded-[10px]'>

            <div className='flex justify-center items-center rounded-full w-[32px] h-[32px] ml-[90%] mt-4 hover:grayscale-2'>
                <img 
                    src={closeIcon}
                    alt='close'
                    className='w-[20px] h-[20px] cursor-pointer'
                    onClick={() => setIsOpen(false)}
                />

                </div>

            <div className='flex justify-center items-center w-[60%]'>
                <img 
                    src='https://chipstars.bet/en/images/verify-image.svg'
                    alt='forgot-password'
                    className='w-full h-full object-contain'
                />
            </div>
            <div className='flex flex-col items-center justify-center'>
                    <h1 className='font-epilogue text-[28px] text-[#dce1e3] mb-6'>Forgot password</h1>
                    <span className='font-epilogue text-[13px] text-[#dce1e3]'>To change the password enter your email.</span>
                    <span className='font-epilogue text-[13px] text-[#dce1e3]'>You will get email with further instructions.</span>
            </div>
            <CustomInput 
                required
                value=""
                handleChange={() => {}}
                inputType="text"
                name="email"
                placeHolder="Email"
                outline
                style={{ width: "288.375px", backgroundColor: '#121212' }}
            />

            <div className='flex justify-evenly items-center w-full'>
                <CustomButton 
                    btnType="button"
                    title="Cancel"
                    handleClick={() => setIsOpen(false)}
                    styles="bg-[#121212] border-[1px] border-[#874ce8] hover:text-[#874ce8] hover:bg-white transition-all duration-500 ease-in-out w-[112.461px] font-epilogue"
                />

                <CustomButton 
                    btnType="button"
                    title="Send"
                    handleClick={() => {}}
                    styles="bg-[#874ce8] hover:text-[#874ce8] hover:bg-white transition-all duration-500 ease-in-out w-[106px] font-epilogue"
                />
            </div>

        </motion.div>

    </motion.div>
  )
}

export default ForgotPassword