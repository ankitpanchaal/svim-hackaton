import Button from '@/components/Button'
import React from 'react'

const page = () => {
    return (
        <div className="pt-10">
            <div className="lg:flex lg:gap-20 max-w-[1200px] px-14 py-10 justify-center">

                <img src="https://images.pexels.com/photos/2762247/pexels-photo-2762247.jpeg?auto=compress&cs=tinysrgb&w=300" alt=""
                    className="w-72 h-72 object-cover rounded-md"
                />
                <div className="mt-4" >
                    <div className="text-sm font-semibold text-slate-900" >Product name</div>
                    <div className="text-[12px] text-slate-500 font-medium">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</div>

                    <div className="text-md font-semibold text-[#FF676D] mt-1" >
                        Price - $10.00
                    </div>

                    <div className='justify-start mt-4' >
                        <Button text="buy" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default page