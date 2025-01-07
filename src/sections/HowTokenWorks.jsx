import React from 'react'
import { SectionHeading } from '../components/SectionHeading'
import economyImg from '../assets/icons/digital-economy 1.svg';
import spendingImg from '../assets/icons/spending 1.svg'
import { AddFeaturesCards } from '../components/AddFeaturesCards';
import { FaCheck } from "react-icons/fa";


export const HowTokenWorks = () => {
    return (
        <div className='py-16'>
            <div className="container">
                <SectionHeading
                    heading={'How the Hasanat Token Works'}
                />

                <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 py-24">

                    <AddFeaturesCards
                        image={economyImg}
                        heading="Earning Tokens"
                        className={'bg-gradient-to-b pb-6 lg:max-w-full'}
                        comming='false'
                    >
                        {/* Feature Boxes */}
                        <div className="flex flex-col gap-5 ">
                            <div className='bg-[#111111] flex items-start gap-2 max-w-md rounded-sm border px-4 py-6 border-white/40'>
                                <div className='border-2 p-[2px] mt-1 bg-gradient-to-b from-[#814E00] to-[#C07F00] rounded-sm'><FaCheck className='size-1.5 -rotate-12' /></div>
                                <div>
                                    <p className='text-[7.5px] lg:text-xs tracking-wide font-roboto font-thin'>Users can earn Hasanat Tokens through variousactivities within the app, including completing daily prayers, reading theQuran, participating in community challenges, and engaging in educationalactivities.</p>
                                </div>
                            </div>
                        </div>
                    </AddFeaturesCards>

                    <AddFeaturesCards
                        image={spendingImg}
                        heading="Spending  Tokens"
                        className={'bg-gradient-to-b pb-6 max-w-xs lg:max-w-lg'}
                        comming='false'
                    >
                        {/* Feature Boxes */}
                        <div className="flex flex-col gap-5 mt-5">
                            <div className='bg-[#111111] flex items-start gap-2 max-w-sm rounded-sm border px-4 py-6 border-white/40'>
                                <div className='border-2 p-[2px] mt-1 bg-gradient-to-b from-[#814E00] to-[#C07F00] rounded-sm'><FaCheck className='size-1.5 -rotate-12' /></div>
                                <div>
                                    <p className='text-[7.5px] lg:text-xs tracking-wide font-roboto font-thin'>Tokens can be used within the app's ecosystem to access premium content, unlock special features, or make donations to charitable causes. Additionally, tokens can beexchanged on DEX and CEX platforms, integrating our community with the wider digital finance world.</p>
                                </div>
                            </div>
                        </div>
                    </AddFeaturesCards>
                </div>
            </div>
        </div>
    )
}
