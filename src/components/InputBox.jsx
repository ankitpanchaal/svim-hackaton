import React from 'react'

const InputBox = ({ type, placeholder, multiple = false }) => {
    return (
        <div className='mb-[10px]' >
            <input
                type={type}
                multiple={multiple}
                style={multiple ? { height: 140, textAlign: 'center' } : {}}
                placeholder={placeholder}
                className="w-full font-semibold text-black text-[12px] border-2 border-[#c4c4c4] px-2 py-1 rounded-lg lg:text-sm bg-[#F7F7F7]"
            />
        </div>
    )
}

export default InputBox