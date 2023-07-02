import React from 'react'

const Button = ({ onClick, text }) => {
    return (
        <div onClick={onClick} className="px-[20px] py-[5px] rounded-lg bg-[#FF676D] hover:bg-[#cf4d51] cursor-pointer" >
            <div className="text-[12px] lg:text-sm font-semibold uppercase text-white text-center">
                {text}
            </div>
        </div>
    )
}

export default Button