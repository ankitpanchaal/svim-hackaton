import Button from '@/components/Button'
import InputBox from '@/components/InputBox'
import SecondryButton from '@/components/SecondryButton'
import Link from 'next/link'
import React from 'react'

const page = () => {
    return (
        <div>
            <div className="h-screen w-screen" >
                <img
                    src="https://images.pexels.com/photos/1287145/pexels-photo-1287145.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    className="h-full w-full object-cover"
                    alt="Fullscreen Image"
                />

                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">

                    <div className="bg-[#00000060] rounded-md p-4 lg:w-80 z-10 w-80 backdrop-blur-lg" >
                        <div>
                            <h1 className="text-4xl font-bold mb-1 text-white">Welcome Back!</h1>
                            <p className="text-black text-[12px] lg:text-sm mb-4 ">Login to access your account.</p>

                            <InputBox
                                type="email"
                                placeholder={'mail@eample.com'} />

                            <InputBox
                                type="password"
                                placeholder={'!@#$%^&*('} />
                        </div>
                    </div>

                    <div className='mt-4'>
                        <Link href='./' >
                            <Button text={"LOGIN"} />
                        </Link>
                        <div className="my-2 font-semibold text-white text-center text-sm" >OR</div>
                        <Link href='signup' >
                            <SecondryButton text={"SIGN UP"} />
                        </Link>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default page