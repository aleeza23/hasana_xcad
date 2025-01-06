import React from 'react';
import { Header } from '../sections/Header';
import { Hero } from '../sections/Hero';
import heroImg from '../assets/images/tokenHero.png'
import { Welcome } from '../sections/Welcome';
import pattren from '../assets/icons/Frame 414.svg'
import pattrenTwo from '../assets/icons/Frame 415.svg'

import { HowHasnatWorks } from '../sections/HowHasnatWorks';
import { TokenomicsOverview } from '../sections/TokenomicsOverview';
import { IncentiveStructure } from '../sections/IncentiveStructure';

export const Token = () => {
    return (
        <>
            <section className="relative   bg-bannerImageToken bg-no-repeat bg-cover bg-center lg:bg-left z-0 ">
                {/* Gradient Overlay */}
                {/* <div className="absolute inset-0 bg-gradient-to-r from-[#C07F00B2] to-[#814d00a9]  "></div> */}


                <div className="relative z-10 bg-gradient-to-r from-[#C07F008F] via-[#C07F0000] to-[#C07F0000] ">
                    <Header />
                    <Hero>
                        <div className="grid lg:grid-cols-2">
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
                                <div className='absolute right-0 top-1/2 -translate-y-1/2'>
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
            </section>

            <Welcome />
            <HowHasnatWorks />
            <TokenomicsOverview />
            <IncentiveStructure />

        </>
    );
};
