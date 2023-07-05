import React from 'react';

const SecondryButton = ({ text = "Skfhdf", onClick }) => {
    return (
        <div
            onClick={onClick}
            className="px-[14px] py-[6px] rounded-lg bg-[#f7f7f7] hover:bg-[#ffd8d8] cursor-pointer border-[1px] border-[#FF676D] transform transition-all duration-300 hover:scale-105"
        >
            <div className="text-sm font-semibold uppercase text-black text-center">
                {text}
            </div>
        </div>
    );
};

export default SecondryButton;
