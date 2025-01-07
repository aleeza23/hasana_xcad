import React from 'react';
import { Header } from '../sections/Header';
import { Hero } from '../sections/Hero';
import heroImg from '../assets/images/tokenHero.png'
import { Welcome } from '../sections/Welcome';
import pattren from '../assets/icons/Frame 414.svg'
import pattrenTwo from '../assets/icons/Frame 415.svg'
import pattrenThree from '../assets/icons/Group (1).svg'

import { HowHasnatWorks } from '../sections/HowHasnatWorks';
import { TokenomicsOverview } from '../sections/TokenomicsOverview';
import { IncentiveStructure } from '../sections/IncentiveStructure';
import { GettingStarted } from '../sections/GettingStarted';
import { Contact } from '../sections/Contact';
import { Footer } from '../sections/Footer';
import footerImg from '../assets/images/token footer.png'
import footerPattren from '../assets/icons/Frame 417.svg'

export const Token = () => {
    return (
        <>
            <section className="relative   bg-bannerImageToken bg-no-repeat bg-cover bg-center lg:bg-left z-0 ">
                {/* Gradient Overlay */}
                {/* <div className="absolute inset-0 bg-gradient-to-r from-[#C07F00B2] to-[#814d00a9]  "></div> */}


                <div className="relative z-10 bg-gradient-to-r from-[#C07F00] via-[#C07F0000] to-[#C07F0000] ">
                    <Header />
                    <Hero>
                        <div className="grid lg:grid-cols-2 ">
                            <div className="max-w-lg text-white lg:mt-24  ">
                                <h1 className="font-monoton text-5xl mt-2 lg:mt-8 lg:text-[5rem] uppercase">
                                    hasanat
                                </h1>
                                <h2 className="font-poppins font-bold text-5xl lg:text-7xl uppercase lg:mt-4">
                                    Token & Tokenomics
                                </h2>

                                <small className="font-poppins text-md lg:text-xs inline-block tracking-wide font-extralight max-w-xs mt-5 leading-loose">
                                    Empowering the DigitalIslamic Community with Hasanat Token
                                </small>
                            </div>

                            <div className=''>
                                <div className='absolute right-0 top-1/2 hidden lg:block -translate-y-1/2 -z-10'>
                                    <svg width="968" height="1160" viewBox="0 0 968 1160" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g filter="url(#filter0_f_128_5996)">
                                            <ellipse cx="630.5" cy="546.5" rx="326.5" ry="309.5" fill="#C07F00" fill-opacity="0.49" />
                                        </g>
                                        <defs>
                                            <filter id="filter0_f_128_5996" x="0" y="-67" width="1261" height="1227" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                                                <feGaussianBlur stdDeviation="152" result="effect1_foregroundBlur_128_5996" />
                                            </filter>
                                        </defs>
                                    </svg>

                                </div>
                                <img src={heroImg} alt="hero" className='shadow image-gradient filter ' />
                            </div>
                        </div>
                    </Hero>
                </div>
                <div className='absolute right-0 -top-[30%] lg:-top-80 -z-10 '>
                    <img src={pattren} alt="img" />
                </div>
                <div className='absolute left-0 top-[241%] lg:top-[212%] '>
                    <img src={pattrenTwo} alt="img" />
                </div>
                <div className='absolute right-0 top-[241%] lg:top-[265%] -z-20 hidden lg:block '>
                    <img src={pattrenThree} alt="img" />
                </div>
            </section>

            <Welcome />
            <HowHasnatWorks />
            <TokenomicsOverview />
            <IncentiveStructure />
            <GettingStarted />
            <Contact />
            <Footer>
                {/* The box */}
                <div className="relative -mb-72 lg:-mb-0 rounded-3xl h-[850px] lg:-mt-20 lg:h-auto p-4 lg:px-24 lg:py-6 bg-gradient-to-b from-[#814E00] to-[#C07F00] overflow-hidden">
                    {/* Shape decorations */}
                    <div className="absolute block lg:hidden top-0 left-0 rotate-90 lg:rotate-0 lg:top-12 lg:bottom-0 lg:left-0 h-64 w-64 rounded-full rounded-b-none rounded-tl-none bg-gradient-to-bl from-[#814E00] to-[#C07F00]"></div>
                    <div className="absolute block lg:hidden  -top-20 -left-28 lg:top-44 lg:-left-12 lg:-bottom-32 w-64 h-64 rounded-full border-2 border-[#241702]"></div>
                    <div className="absolute block lg:hidden  w-28 h-28 lg:h-20 lg:w-20 rotate-0 top-10 -left-9 lg:top-56 lg:-bottom-3 lg:left-16 rounded-full rounded-bl-none rounded-t-none lg:-rotate-90 bg-gradient-to-l from-[#814E00] to-[#C07F00]"></div>
                    <div className="absolute block lg:hidden  w-28 h-28 lg:h-20 lg:w-20 rotate-0 top-10 -left-12 lg:top-[14.4rem] lg:-bottom-4 lg:left-14 rounded-full rounded-bl-none rounded-t-none lg:-rotate-90 border-4 border-opacity-30 border-[#814E00]"></div>

                    <img src={footerPattren} alt="" className='absolute left-0 -top-12 hidden lg:block' />
     

                    {/* Content inside the box */}
                    <div className="flex lg:flex-row flex-col justify-end mt-auto h-full gap-6 lg:gap-0 items-center lg:justify-between">
                        <div className="flex flex-col items-center justify-start gap-6">
                            <div className="text-start">
                                <h1 className="font-medium text-4xl font-roboto ">Stay Updated</h1>
                                <p className='font-roboto font-light leading-loose text-xs max-w-sm  mt-4'>For the latest news on Hasanat Tokens, including updates on new features and tokenomics adjustments, subscribe to our newsletter and follow us on our social media channels.</p>
                                <div className='relative mt-7 '>
                                    <input type="text" placeholder='Enter your email' className='rounded-full w-full h-10 ps-4 placeholder:text-sm' />
                                    <button className='bg-[#231C1C] rounded-full h-10 float-end mt-4 lg:mt-0  lg:absolute right-0 w-[40%] lg:w-[30%] font-roboto text-xs'>Subscribes</button>
                                </div>
                            </div>

                        </div>
                        <div>
                            <img src={footerImg} alt="img" className=" size-64 lg:size-52" />
                        </div>
                    </div>
                </div>
            </Footer>

        </>
    );
};
