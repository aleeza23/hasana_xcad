import React, { useState } from 'react';
import logo from '../assets/icons/logo.svg';
import { FiSearch } from "react-icons/fi";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross1 } from "react-icons/rx";
import { Navs } from '../components/Navs';

export const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);

    };

    return (
        <div className='h-[20vh] py-3'>
            <div className="container relative">
                <div className='flex justify-between items-center'>
                    <a href='/'>
                        <img src={logo} alt="logo" className='size-20' />
                    </a>
                    <nav className='flex gap-2'>
                        {/* Desktop Navigation */}
                        <div className="lg:flex items-center hidden">
                            <Navs />
                        </div>
                        {/* Mobile Controls */}
                        <div className="flex gap-4 items-center">
                            <a
                                href="#"
                                className="nav-item border-2 px-3 border-[#814E00] rounded-full py-2 hidden lg:block"
                            >
                                <span className="flex items-center justify-center text-sm text-white">
                                    Download
                                </span>
                            </a>
                            <a href="">
                                <FiSearch className='ms-3 lg:mt-1 my-auto text-white/90 size-5' />
                            </a>
                            <button onClick={toggleMenu}>
                                {isMenuOpen ? <RxCross1 className='size-5 font-extrabold lg:hidden' /> : <RxHamburgerMenu className='size-5 font-extrabold lg:hidden' />}

                            </button>
                        </div>
                    </nav>
                </div>

                {/* Mobile Menu */}
                <div
                    className={`z-10 absolute left-0 right-0 h-max p-4 lg:hidden transition-all duration-300 ease-in-out ${isMenuOpen ? ' opacity-100' : 'opacity-0'
                        }`}
                >
                    <div className="flex flex-col gap-3 items-center justify-center border-2 border-white/50 bg-gradient-to-r from-[#814E00] to-[#C07F00] rounded-lg p-8 w-full">
                        <Navs />
                    </div>
                </div>
            </div>
        </div>
    );
};
