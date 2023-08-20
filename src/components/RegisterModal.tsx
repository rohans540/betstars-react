import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input'

import { closeIcon, registerImg, infoIcon } from '../assets';
import CustomInput from './CustomInput';
import CustomSwitch from './CustomSwitch';
import CustomButton from './CustomButton';

const dropIn = {
    open: { y: 0 },
    closed: { y: "-100%" }
}

const initialState = {
    username: '',
    firstName: '',
    lastName: '',
    country: '',
    currency: '',
    phone: '',
    email: '',
    password: '',
    confirmPassword: '',
    affiliateCode: '',
    dob: '',
    agreement: false,
    emailPromo: false
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
    const [form, setForm] = useState(initialState);
    const [offer, setOffer] = useState(false);
    const [step, setStep] = useState(1);
    const controls = useAnimation();

    const handleChange = (event: any) => {
        const { name, value } = event?.target;
        setForm({ ...form, [name]: value });
    }

    useEffect(() => {
        if (isOpen) {
          controls.start("open");
        } else {
          controls.start("closed");
        }
      }, [isOpen, controls]);

    const formStep1 = (
        <form className='w-full flex flex-col gap-[20px]'>
                    <CustomInput 
                    required
                    value={form.username}
                    handleChange={handleChange}
                    inputType="text"
                    name="username"
                    placeHolder="Username"
                    />
                    <CustomInput 
                    required
                    value={form.firstName}
                    handleChange={handleChange}
                    inputType="text"
                    name="firstName"
                    placeHolder="First Name"
                    />
                    <CustomInput 
                    required
                    value={form.lastName}
                    handleChange={handleChange}
                    inputType="text"
                    name="lastName"
                    placeHolder="Last Name"
                    />
                    <CustomInput 
                    required
                    value={form.country}
                    handleChange={handleChange}
                    inputType="text"
                    name="country"
                    placeHolder="Country"
                    isDropDown
                    formData={dummyDataCountry}
                    />
                    <CustomInput 
                    required
                    value={form.currency}
                    handleChange={handleChange}
                    inputType="text"
                    name="currency"
                    placeHolder="Currency"
                    isDropDown
                    formData={dummyDataCurrency}
                    />
                    <div className='flex justify-start gap-4'>
                        <CustomSwitch
                            checked={offer}
                            onChange={(e) => {
                                e.preventDefault();
                                setOffer(!offer)
                            }}
                            className='ml-6'
                        />
                        <h1 className='text-[white] font-bold'>Choose Bonus</h1>
                    </div>

                    <div className={`flex ml-6 w-[500px] bg-[#2e2e2e] justify-between items-center px-4 py-4 rounded-[9.6px] ${!offer ? 'opacity-50 pointer-events-none' : ''}`}>
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
                            handleClick={() => setStep(2)}
                            styles="bg-[#874ce8] hover:text-[#874ce8] hover:bg-white transition-all duration-500 ease-in-out w-[150px]"
                        />
                    </div>
                </form>
    );
    const formStep2 = (
        <form className='w-full flex flex-col gap-[20px]'>
                        <PhoneInput
                            className='py-[10px] sm:px-[25px] px-[10px] outline-none bg-[#222] hover:bg-[#555] font-epilogue text-white 
                            text-[14px] placeholder:text-[#fff] placeholder:font-thin rounded-[10px] sm:min-w-[300px] transition-all duration-300 ease-in-out ml-6 w-[500px]'
                            value={form.phone}
                            name="phone"
                            onChange={handleChange}
                        />
                        <CustomInput 
                            required
                            value={form.email}
                            handleChange={handleChange}
                            inputType="email"
                            name="email"
                            placeHolder="Email"
                        />
                        <CustomInput 
                            required
                            value={form.password}
                            handleChange={handleChange}
                            inputType="password"
                            name="password"
                            placeHolder="Password"
                        />
                        <CustomInput 
                            required
                            value={form.confirmPassword}
                            handleChange={handleChange}
                            inputType="password"
                            name="confirmPassword"
                            placeHolder="Confirm Password"
                        />
                        <CustomInput 
                            required
                            value={form.affiliateCode}
                            handleChange={handleChange}
                            inputType="text"
                            name="affiliateCode"
                            placeHolder="Affiliate Code"
                        />
                        <CustomInput 
                            required
                            value={form.dob}
                            handleChange={handleChange}
                            inputType="date"
                            name="dob"
                            placeHolder="Birth date"
                        />
                        
                        <div className='flex justify-start gap-2 ml-6 w-[500px] items-center'>
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

                            <span className='text-[12px] text-white font-epilogue'>
                                I'm over 18 years and i accept the <span className='underline underline-offset-2 cursor-pointer'>terms of service</span> and <span className='underline underline-offset-2 cursor-pointer'>privacy policy</span>
                            </span>
                        </div>

                        <div className='flex justify-start gap-2 ml-6 w-[500px] items-center'>
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

                            <span className='text-[12px] text-white font-epilogue'>
                                Receive email promotions
                            </span>
                        </div>
                        <div className='flex flex-2 justify-start gap-6 ml-6 w-[500px] items-center'>
                                <CustomButton 
                                    btnType="button"
                                    title="Back"
                                    handleClick={() => setStep(1)}
                                    styles="bg-[#121212] border-[1px] border-[#874ce8] hover:text-[#874ce8] hover:bg-white transition-all duration-500 ease-in-out w-[100px] font-epilogue"
                                />

                                <CustomButton 
                                    btnType="button"
                                    title="SIGN UP"
                                    handleClick={() => {}}
                                    styles="bg-[#874ce8] hover:text-[#874ce8] hover:bg-white transition-all duration-500 ease-in-out w-[500px] font-epilogue"
                                />
                        </div>

                        <div className='flex justify-center items-center'>
                            <span className='text-white font-epilogue text-[14px]'>
                                Have an account? &nbsp;
                                <span className='text-[#874ce8] text-[14px] hover:text-white transition-all duration-500 ease-in-out cursor-pointer'>
                                    Log in now
                                </span>
                            </span>
                        </div>
                    </form>
    );
  return (
            <motion.div className={`fixed inset-0 flex items-center justify-center bg-opacity-30 backdrop-blur-sm z-50 ${
            isOpen ? 'transition-opacity duration-300 opacity-100' : 'transition-opacity duration-300 opacity-0 pointer-events-none'
        }`}
        
        >
            <motion.div 
                className='bg-[#121212] opacity-[0.9] w-[75%] h-[95%] flex justify-around items-center rounded-[10px]'
                variants={dropIn}
                initial="closed"
                animate={controls}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
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
                    {step === 1 ? formStep1 : formStep2}
                    
                </div>
            </motion.div>
        </motion.div>
  )
}

export default RegisterModal;