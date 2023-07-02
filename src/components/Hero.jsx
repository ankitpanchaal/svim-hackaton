import React from 'react'
import Button from './Button'
import SecondryButton from './SecondryButton'
import Link from 'next/link'

const Hero = () => {
    return (
        <div className="bg-[#f5f5f7] lg:h-96 flex items-center justify-center" >
            <div className="max-w-[1200px]" >
                <div className="items-center py-6 lg:flex lg:px-20">
                    <img src="https://www.apple.com/v/apple-watch-series-8/c/images/overview/health/health_hero__d63yvs2woguq_large.jpg" alt=""
                        className="h-72 w-72 m-auto block object-contain"
                    />

                    <div className="mt-10 mx-2 ">
                        <div className="m-auto mb-2 w-28">
                            <Button text="BUY" />
                            {/* <div className="mt-2">
                                <SecondryButton text="Details" />
                            </div> */}
                        </div>
                        <div className="font-medium text-sm text-center lg:w-96">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni reiciendis assumenda dolo  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni reiciendis assumenda dolo
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero