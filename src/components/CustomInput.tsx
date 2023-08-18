import React from 'react';

interface Props {
    required?: boolean;
    value: any;
    handleChange: Function;
    inputType: string;
    name: string;
    placeHolder: string;
    isDropDown?: boolean;
    formData?: Array<any>;
}

const CustomInput = ({ required = false, value, handleChange, inputType, name, placeHolder, isDropDown = false, formData = [] }: Props) => {

    if(!isDropDown) {
        return (
            <input 
                className='py-[10px] sm:px-[25px] px-[10px] outline-none bg-[#222] hover:bg-[#555] font-epilogue text-white 
                text-[14px] placeholder:text-[#fff] placeholder:font-thin rounded-[10px] sm:min-w-[300px] transition-all duration-300 ease-in-out ml-6 w-[500px]' 
                required
                value={value}
                onChange={handleChange}
                type={inputType}
                step="0.1"
                name={name}
                placeholder={placeHolder}
            />
          )
    } else return (
        <select className='py-[10px] sm:px-[25px] px-[10px] outline-none bg-[#222] hover:bg-[#555] font-epilogue text-white 
            text-[14px] placeholder:text-[#fff] placeholder:font-thin rounded-[10px] sm:min-w-[300px] transition-all duration-300 ease-in-out ml-6 w-[500px]' 
            required 
            name={name} 
            placeholder={placeHolder}
        >
            {formData.length > 0 && (
                formData.map((data) => (
                    <option value={data.value}>{data.label}</option>
                ))
            )}
        </select>
    )
  
}

export default CustomInput;