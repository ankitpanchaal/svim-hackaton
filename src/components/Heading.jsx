import React from 'react'

const Heading = ({ title = "TITLE" }) => {
    return (
        <div className="text-lg font-bold text-[#FF676D] lg:text-xl capitalize" >{title}</div>
    )
}

export default Heading