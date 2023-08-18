import React, { useState } from 'react';
import { motion } from 'framer-motion';

import { closeIcon, registerImg, infoIcon } from '../assets';
import CustomInput from './CustomInput';
import CustomSwitch from './CustomSwitch';
import CustomButton from './CustomButton';

const dropIn = {
    hidden: {
        y: "-100vh",
        opacity: "0"
    },
    visible: {
        y: "0"
    },
    exit: {
        y: "100vh",
        opacity: "0"
    }
}

const initialState = {
    username: '',
    firstName: '',
    lastName: '',
    country: '',
    currency: ''
}

const dummyDataCountry = [
    {label: 'India', value: "india"}, 
    {label: 'Spain', value: "spain"}, 
    {label: 'Italy', value: "italy"},
    {label: 'Malta', value: "malta"},
    {label: 'Brazil', value: "brazil"},
    {label: 'France', value: "france"},
];

const dummyDataCurrency = [
    {label: 'USD', value: "usd"}, 
    {label: 'Euro', value: "eur"}, 
    {label: 'Pesos', value: "pes"},
    {label: 'INR', value: "inr"},
    {label: 'GBP', value: "gbp"},
    {label: 'Yuan', value: "yuan"},
]

const RegisterModal = ({ isOpen, setIsOpen }) => {
    const [form, setForm] = useState()
  return (
    <div className={`fixed inset-0 flex items-center justify-center bg-opacity-30 backdrop-blur-sm z-50 ${
        isOpen ? 'transition-opacity duration-300 opacity-100' : 'transition-opacity duration-300 opacity-0 pointer-events-none'
      }`}
      
      >
        <motion.div 
            className='bg-[#121212] opacity-[0.9] w-[93%] h-[93%] flex justify-around items-center rounded-[10px]'
            variants={dropIn}
        >
            <div className='flex w-[40%] h-full'>
                <img 
                    src={registerImg}
                    alt='register'
                    className='w-full'
                />
            </div>
            <div className='flex flex-col w-[600px] h-full justify-start items-start'>
                <div className='flex justify-end w-[96%] mt-[50px]'>
                    <img
                        src={closeIcon}
                        alt='close'
                        className='w-[20px] h-[20px] cursor-pointer'
                        onClick={() => setIsOpen(false)}
                    />
                </div>
                <h1 className='ml-6 font-epilogue font-bold text-[30px] text-[#dce1e3] mb-6'>Sign up</h1>
                <form className='w-full flex flex-col gap-[20px]'>
                    <CustomInput 
                    required
                    value=""
                    handleChange={() => {}}
                    inputType="text"
                    name="username"
                    placeHolder="Username"
                    />
                    <CustomInput 
                    required
                    value=""
                    handleChange={() => {}}
                    inputType="text"
                    name="firstName"
                    placeHolder="First Name"
                    />
                    <CustomInput 
                    required
                    value=""
                    handleChange={() => {}}
                    inputType="text"
                    name="lastName"
                    placeHolder="Last Name"
                    />
                    <CustomInput 
                    required
                    value=""
                    handleChange={() => {}}
                    inputType="text"
                    name="country"
                    placeHolder="Country"
                    isDropDown
                    formData={dummyDataCountry}
                    />
                    <CustomInput 
                    required
                    value=""
                    handleChange={() => {}}
                    inputType="text"
                    name="currency"
                    placeHolder="Currency"
                    isDropDown
                    formData={dummyDataCurrency}
                    />
                    <div className='flex justify-start gap-4'>
                        <CustomSwitch 
                            color='success'
                            checked={false}
                            onChange={() => {}}
                            className='ml-6'
                        />
                        <h1 className='text-[white] font-bold'>Choose Bonus</h1>
                    </div>

                    <div className='flex ml-6 w-[500px] bg-[#2e2e2e] justify-between items-center px-4 py-4 rounded-[9.6px]'>
                        <img 
                            src='https://chipstars.bet/images/wrapped-gift-small.png'
                            alt='bonus'
                            className='w-[40px] h-[40px] object-contain'
                        />
                        <span>Up to <span className='text-white font-bold text-[16px]'>270% REWARDS</span> for first four deposits</span>
                        <img 
                            src={infoIcon}
                            alt='info'
                            className='w-[20px] h-[20px] object-contain cursor-pointer'
                        />
                    </div>
                    <div className='flex justify-between ml-6 w-[500px] items-center'>
                        <span className='text-white font-epilogue text-[14px]'>
                            Have an account? &nbsp;
                            <span className='text-[#874ce8] text-[14px] hover:text-white transition-all duration-500 ease-in-out cursor-pointer'>
                                Log in now
                            </span>
                        </span>
                        <CustomButton 
                            btnType="button"
                            title="Next"
                            handleClick={() => {}}
                            styles="bg-[#874ce8] hover:text-[#874ce8] hover:bg-white transition-all duration-500 ease-in-out w-[150px]"
                        />
                    </div>
                </form>
            </div>
        </motion.div>
    </div>
  )
}

export default RegisterModal;