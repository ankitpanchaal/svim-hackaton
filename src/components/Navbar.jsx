"use client";
import Link from 'next/link';
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import Button from './Button';
import SecondryButton from './SecondryButton';

export const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const liStyle = "font-medium  hover:font-bold cursor-pointer text-sm uppercase lg:text-[12px]"

    return (
        <nav className='fixed w-[100%] z-50' >
            <div className="flex justify-between items-center px-4 py-2 bg-[#ffffff40] backdrop-blur-lg lg:px-20" >
                {/* left */}

                <Link href='./' >
                    <div className="text-xl font-semibold text-black lg:text-2xl" >LOGO</div>
                </Link>

                {/* cneter */}
                <div className='hidden lg:flex' >
                    <ul className="flex items-center gap-4" >
                        <Link onClick={toggleMenu} href="/" >
                            <li className={liStyle} >HOME</li>
                        </Link>

                        <Link onClick={toggleMenu} href="about">
                            <li className={liStyle}>ABOUT</li>
                        </Link>

                        <Link onClick={toggleMenu} href="contact">
                            <li className={liStyle}>CONTECT US</li>
                        </Link>

                        <Link onClick={toggleMenu} href="blog">
                            <li className={liStyle}>BLOG</li>
                        </Link>
                    </ul>
                </div>

                {/* rigth */}
                <div className="hidden lg:flex gap-2" >
                    <Link href="login" >
                        <Button text={"LOGIN"} />
                    </Link>
                    <Link href="signup" >
                        <SecondryButton text={"SIGN UP"} />
                    </Link>
                </div>

                <div className='lg:hidden' onClick={toggleMenu} >
                    {isOpen ? <FaTimes size={18} /> : <FaBars size={18} />}
                </div>


            </div>
            {
                isOpen &&
                <div className="lg:hidden bg-[#ffafaf70] backdrop-blur-sm p-4 rounded-md w-60 absolute top-4 right-12 z-50" >
                    <Link onClick={toggleMenu} href="/" >
                        <li className={`${liStyle} mb-2`} >HOME</li>
                    </Link>

                    <Link onClick={toggleMenu} href="about">
                        <li className={`${liStyle} mb-2`}>ABOUT</li>
                    </Link>

                    <Link onClick={toggleMenu} href="contact">
                        <li className={`${liStyle} mb-4`}>CONTECT US</li>
                    </Link>

                    <Link onClick={toggleMenu} href="blog">
                        <li className={`${liStyle} mb-4`}>BLOG</li>
                    </Link>

                    <div className="mt-2">
                        <Link onClick={toggleMenu} href="login" >
                            <Button text={"LOGIN"} />
                        </Link>
                    </div>

                    <div className="mt-2">
                        <Link onClick={toggleMenu} href="signup" >
                            <SecondryButton text={"SIGN UP"} />
                        </Link>
                    </div>
                </div>
            }
        </nav>
    );
}
