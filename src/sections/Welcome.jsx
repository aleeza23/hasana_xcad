import React from 'react';
import welcomeImg from '../assets/images/token welcome img.png';

export const Welcome = () => {
    return (
        <div className="py-16 lg:py-24">
            <div className="container">
                <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-24 gap-8 lg:grid-flow-row">
                    {/* Text Section */}
                    <div className="flex flex-col my-auto">
                        <h1 className="text-xl font-bold font-poppins mt-2 gradient-text max-w-md">
                            Welcome to the future of Islamic digital engagement
                        </h1>
                        <p className="mt-4 font-roboto font-light leading-loose text-xs max-w-md">
                            Introducing the Hasanat Token, our innovative cryptocurrency designed to reward devotion, education, and community participation. Bridging Islamic values with the convenience of modern technology, the Hasanat Token is a cornerstone of our ecosystem, enhancing spiritual growth and fostering a supportive global community.
                        </p>
                    </div>

                    {/* Images Grid Section */}
                    <div className="rounded-xl border-2 border-[#C07F00] p-[2px] h-[14.7rem] lg:h-max lg:max-h-[22.8rem] overflow-hidden">
                        <div className="grid grid-cols-3">
                            <img src={welcomeImg} alt="" className="rounded-tl-xl" />
                            <img src={welcomeImg} alt="" />
                            <img src={welcomeImg} alt="" className="rounded-tr-xl" />
                            <img src={welcomeImg} alt="" className="rounded-bl-xl" />
                            <img src={welcomeImg} alt="" />
                            <img src={welcomeImg} alt="" className="rounded-br-xl" />
                            <img src={welcomeImg} alt="" className="rounded-tr-xl" />
                            <img src={welcomeImg} alt="" className="rounded-bl-xl" />
                            <img src={welcomeImg} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
