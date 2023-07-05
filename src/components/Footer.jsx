import React from 'react'

const Footer = () => {

    const headerStyle = "text-[12px] underline font-semibold decoration-orange-600 lg:text-sm capitalize"
    const itemsStyle = "text-[10px] lg:text-[12px] text-orange-600 cursor-pointer ml-2"

    return (
        <div className=' bg-orange-50' >
            <div className="max-w-[1200px] m-auto flex flex-wrap justify-between gap-6 lg:gap-12 px-4 py-4 lg:px-24">

                <div className="w-40" >
                    <div className={headerStyle}>
                        About
                    </div>
                    <ul>
                        <li className={`${itemsStyle}`}>event compiled client and server successfully in 1583 ms</li>
                    </ul>
                </div>

                <div className="w-40" >
                    <div className={headerStyle}>
                        Contact
                    </div>
                    <ul className="m-1" >
                        <li className={`${itemsStyle}`}>Phone - +91 9999922233</li>
                        <li className={`${itemsStyle}`}>Phone - +1 9999922233</li>
                        <li className={`${itemsStyle}`}>Email - lorem@gmail.com</li>
                    </ul>
                </div>

                <div className="w-40" >
                    <div className={headerStyle}>
                        Address
                    </div>
                    <ul className="m-1" >
                        <li className={`${itemsStyle}`}>Rajiv Gandhi Circle & Bhawarkuan Square, 4, AB Rd · 075060 10253
                            Open ⋅ Closes 7:30 pm</li>
                    </ul>
                </div>

            </div>
        </div>
    )
}

export default Footer