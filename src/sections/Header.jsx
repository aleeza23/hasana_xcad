import React from 'react'
import logo from '../assets/icons/logo.svg'
import { FiSearch } from "react-icons/fi";
import { RxHamburgerMenu } from "react-icons/rx";

export const Header = () => {
    return (
        <div className='h-[20vh] py-3'>
            <div className="container">
                <div className='flex justify-between items-center'>
                    <div>
                        <img src={logo} alt="logo" className='size-20' />
                    </div>
                    <nav className='flex gap-2'>
                        <div className="lg:flex items-center hidden">
                            <a href="" className='nav-item'>Products</a>
                            <a href="" className='nav-item'>Project</a>
                            <a href="" className='nav-item'>Features</a>
                            <a href="" className='nav-item'>Students</a>
                            <a href="" className='nav-item'>Fans</a>
                            <a href="" className='nav-item'>Play</a>
                            <a href="" className='nav-item'>Buy-Hasanat</a>
                        </div>
                        <div className="flex gap-4 items-center">
                            <a
                                href="#"
                                className="nav-item btn-border rounded-full py-2 hidden lg:block"
                            >
                                <span className="flex items-center justify-center text-white  ">
                                    Download
                                </span>
                            </a>
                            <a href=""> <FiSearch className=' ms-3 lg:mt-1 my-auto text-white/90 size-5 ' /></a>
                            <button><RxHamburgerMenu className='size-5 font-extrabold lg:hidden' /> </button>
                        </div>
                    </nav>
                </div>
            </div>


        </div>
    )
}
