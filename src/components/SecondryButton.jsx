import React from 'react'

const SecondryButton = ({ text = "Skfhdf", onClick }) => {
    return (
        <div onClick={onClick} className="px-[14px] py-[4px] rounded-lg bg-[#f7f7f7] hover:bg-[#ffd8d8] cursor-pointer border-[1px] border-[#FF676D]" >
            <div className="text-[12px] lg:text-sm font-semibold uppercase text-black text-center">
                {text}
            </div>
        </div>
    )
}

export default SecondryButton