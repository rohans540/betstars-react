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
    outline?: boolean;
    style?: object;
}

const CustomInput = ({ required = false, value, handleChange, inputType, name, placeHolder, isDropDown = false, formData = [], outline = false, style = {} }: Props) => {

    if(isDropDown) {    
        return (
            <select className='py-[10px] sm:px-[25px] px-[10px] outline-none bg-[#222] hover:bg-[#555] font-epilogue text-white 
                text-[14px] placeholder:text-[#fff] placeholder:font-thin rounded-[10px] sm:min-w-[300px] transition-all duration-300 ease-in-out ml-6 w-[500px]' 
                required 
                name={name} 
                placeholder={placeHolder}
                style={style}
            >
                {formData.length > 0 && (
                    formData.map((data) => (
                        <option value={data.value}>{data.label}</option>
                    ))
                )}
            </select>
        )
    }
    else if(outline) {
        return (
            <label className='relative'>
                <input type='text' placeholder={placeHolder} className='w-[450px] h-[53.5312px] rounded-lg bg-[#222] border-[1px] border-opacity-50 border-white py-[10px] sm:px-[25px] 
                px-[10px] outline-none focus:border-[1px] focus:border-opacity-100 placeholder-gray-300 placeholder-opacity-0 transition duration-200' style={style} />
                <span className='text-l text-white text-opacity-50 absolute left-7 top-4 transition duration-200 label-text'>{placeHolder}</span>
            </label>
        )
    }
    else {
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
                style={style}
            />
          )
    }
  
}

export default CustomInput;