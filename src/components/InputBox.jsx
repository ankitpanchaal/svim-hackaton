import React from 'react'

const InputBox = ({ type, placeholder }) => {
    return (
        <div className='mb-[10px]' >
            <input
                type={type}
                placeholder={placeholder}
                className="w-full font-semibold text-black text-[10px] border-2 border-slate-500 px-2 py-1 rounded-lg lg:text-sm bg-[#F7F7F7]"
            />
        </div>
    )
}

export default InputBox