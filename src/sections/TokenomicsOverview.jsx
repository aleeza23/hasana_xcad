import React from 'react';
import TokenomicsTimeline from '../components/TokenomicsTimeline';
import map from '../assets/icons/map.svg'
import { PieChart } from '../components/PieChart';

export const TokenomicsOverview = () => {
    const timelineData = [
        {
            title: 'User Rewards',
            desc: '400 million tokens (40%) are earmarked for rewarding users for their engagement with the app’s features, including prayer tracking, Quran reading, and participation in community challenges.',
        },
        {
            title: 'Development and Operations',
            desc: '200 million tokens (20%) fund the continuous improvement and operational costs of the Hasanat platform, ensuring a seamless user experience.',
        },
        {
            title: 'Community Initiatives',
            desc: '150 million tokens (15%) support charitable causes, educational programs, and community projects, reflecting our commitment to giving back.',
        },
        {
            title: 'Team and Advisors',
            desc: '100 million tokens (10%) are allocated to the dedicated team and advisors behind Hasanat, vested over four years to align with the platform’s long-term success.',
        },
        {
            title: 'Marketing and Partnerships',
            desc: '100 million tokens (10%) boost the platform’s visibility, foster partnerships, and expand our user base.',
        },
        {
            title: 'Liquidity Pool',
            desc: '50 million tokens (5%) provide liquidity for Hasanat Tokens on various exchanges, facilitating easy trading and access for all users.',
        },
    ];

    return (
        <div className="pb-16 overflow-x-clip">
            <div className="container">
                <h1 className="lg:text-center mb-4 lg:mb-0 text-2xl lg:text-4xl gradient-text font-bold font-roboto">
                    Tokenomics <span className="font-monoton font-medium uppercase">Overview</span>
                </h1>

                <div className="grid lg:grid-cols-2 gap-8 lg:gap-0 lg:py-16">
                    <div>
                        <h1 className="text-xl max-w-56 font-poppins mt-2 gradient-text uppercase">Total Supply</h1>
                        <p className="mt-4 font-roboto font-light leading-loose text-xs max-w-md">
                            One billion Hasanat Tokens have been created, ensuring a balanced distribution to support
                            our community and platform's growth without diluting value.
                        </p>
                    </div>

                    <div className="flex items-center gap-4">
                        <div className="bg-gradient-to-b from-[#C07F00] via-[#F7C75E] to-[#C07F00] rounded-full size-14 lg:size-[5.7rem] flex items-center justify-center">
                            <h1 className="font-roboto text-4xl lg:text-6xl text-black font-bold">1</h1>
                        </div>
                        <h1 className="text-[#C07F00] text-5xl font-bold font-roboto">BILLION</h1>
                    </div>
                </div>

                {/* Timeline Section */}
                <div className='relative '>
                    {/* map */}
                    <div className='absolute top-[75%] lg:top-[59%] -translate-y-1/2'>
                        <img src={map} alt="map" className='lg:opacity-30 ' />

                    </div>
                    <div className="grid lg:grid-cols-2 gap-8">
                        <div className='order-2 lg:order-1'>
                            <PieChart />
                        </div>
                        <div className='order-1 lg:order-2 mt-8 lg:mt-0 '>
                            <div className="flex flex-col z-0 gap-6 relative">
                                <div className="absolute inset-0 w-1.5 -z-10 rounded-t-full rounded-b-full bg-[#C07F00] left-[96.5%] lg:left-[91.6%]"></div>

                                
                                {timelineData.map((item, index) => (
                                    <TokenomicsTimeline key={index} title={item.title} desc={item.desc} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
