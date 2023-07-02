import React from 'react'

const InputBox = ({ type, placeholder, multiple = false }) => {
    return (
        <div className='mb-[10px]' >
            <input
                type={type}
                multiple={multiple}
                style={multiple ? { height: 140, textAlign: 'center' } : {}}
                placeholder={placeholder}
                className="w-full font-semibold text-black text-sm border-2 border-[#c4c4c4] px-4 py-2 rounded-md bg-[#F7F7F7]"
            />
        </div>
    )
}

export default InputBox