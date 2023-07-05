import React from 'react';

const Button = ({ onClick, text }) => {
    return (
        <div
            onClick={onClick}
            className="px-[20px] py-[6px] rounded-lg bg-[#FF676D]  cursor-pointer transform transition-all duration-300 hover:scale-105"
        >
            <div className="text-sm font-semibold uppercase text-white text-center">
                {text}
            </div>
        </div>
    );
};

export default Button;
