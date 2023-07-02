import React from 'react'

const Button = ({ onClick, text }) => {
    return (
        <div onClick={onClick} className="px-[20px] py-[6px] rounded-lg bg-[#FF676D] hover:bg-[#FF676D90] text-sm font-semibold uppercase text-white cursor-pointer text-center" >
            {text}
        </div>
    )
}

export default Button