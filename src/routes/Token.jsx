import React from 'react';
import { Header } from '../sections/Header';
import { Hero } from '../sections/Hero';
import heroImg from '../assets/images/tokenHero.png'

export const Token = () => {
    return (
        <>
            <section className="relative h-[100vh] bg-bannerImageToken bg-no-repeat bg-cover bg-center lg:bg-left ">
                {/* Gradient Overlay */}
                {/* <div className="absolute inset-0 bg-gradient-to-r from-[#C07F00B2] to-[#814d00a9]  "></div> */}


                <div className="relative z-10 bg-gradient-to-r from-[#c08000] via-[#c080009f] to-[#413f3f]">
                    <Header />
                    <Hero>
                        <div className="grid lg:grid-cols-2">
                            <div className="max-w-lg text-white lg:mt-24  ">
                                <h1 className="font-monoton text-5xl mt-2 lg:mt-8 lg:text-[5rem] uppercase">
                                    hasanat
                                </h1>
                                <h2 className="font-poppins font-medium lg:leading-relaxed text-5xl lg:text-7xl uppercase lg:mt-4">
                                Token & Tokenomics
                                </h2>
                             
                                <small className="font-poppins text-md lg:text-xs inline-block tracking-wide font-extralight max-w-xs mt-3 leading-loose">
                                Empowering the DigitalIslamic Community with Hasanat Token
                                </small>
                            </div>

                            <div>
                                <img src={heroImg} alt="hero" />
                            </div>
                        </div>
                    </Hero>
                </div>
            </section>
        </>
    );
};
