import React from 'react'
import { SectionHeading } from '../components/SectionHeading'
import iconOne from '../assets/icons/Mask group.svg'
import { StructureCard } from '../components/StructureCard'

export const Structure = () => {
    const cards = [
        {
            title: 'Governance',
            description:
                'Hasanat Token holders play a crucial role in shaping the platform’s future. Holding tokens grants you voting rights in our governance system, allowing you to influence decisions on new features, community initiatives, and the allocation of funds for charitable causes.',
            icon: iconOne,
        },
        {
            title: 'Getting Involved with Hasanat Tokens',
            description:
                'To start earning and using Hasanat Tokens, simplyengage with the app’s features. For new users interested in trading, we’vepartnered with leading DEX and CEX platforms to ensure Hasanat Tokens areaccessible to everyone. Detailed guides on setting up a wallet and tradingHasanat Tokens are available on our Support page',
            icon: iconOne,
            margin: 'lg:mt-40'
        },
        {
            title: 'Your Voice Matters',
            description:
                "Hasanat Token holders play acrucial role in shaping the platform's future. Holding tokens grants you votingrights in our governance system, allowing you to influence decisions on newfeatures, community initiatives, and the allocation of funds for charitablecauses.",
            icon: iconOne,
            margin: 'lg:-mt-20'
        },
        {
            title: 'Stay Updated',
            description:
                'For the latest news onHasanat Tokens, including updates on new features and tokenomics adjustments,subscribe to our newsletter and follow us on our social media channels.',
            icon: iconOne,
            margin: 'lg:mt-20'
        },
    ];
    return (
        <div className='pb-12 pt-24'>
            <div className="max-w-5xl mx-auto px-4">
                <SectionHeading heading='Incentive Structure' />

                <div className="grid grid-cols-1 gap-10 py-11">
                    <div>
                        <div className='flex items-center gap-12 max-w-xl'>
                            <div className='bg-gradient-to-b from-[#814E00] to-[#C07F00] px-6 py-2 rounded-md'>
                                <p className="mt-1 font-roboto font-light leading-loose text-xs">Earn tokens for completing daily prayers, reading the Quran, and engaging with educational content. Forexample, complete your five daily prayers to earn 5 Hasanat Tokens, read a pageof the Quran for 1 Hasanat Token, and finish an educational module for 20Hasanat Tokens.</p>

                            </div>
                            {/* Arrow and Number */}
                            <div className="relative">
                                <svg className='size-20 lg:size-[120px]' width="175" height="18" viewBox="0 0 175 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M0 9.00002L15 17.6603L15 0.339761L0 9.00002ZM175 7.5L13.5 7.50002L13.5 10.5L175 10.5L175 7.5Z"
                                        fill="url(#paint0_linear_127_10675)"
                                    />
                                    <defs>
                                        <linearGradient
                                            id="paint0_linear_127_10675"
                                            x1="87.5"
                                            y1="9.00001"
                                            x2="87.5"
                                            y2="8.00001"
                                            gradientUnits="userSpaceOnUse"
                                        >
                                            <stop stopColor="#814E00" />
                                            <stop offset="1" stopColor="#C07F00" />
                                        </linearGradient>
                                    </defs>
                                </svg>
                                <h1 className="gradient-text font-roboto font-extrabold opacity-50 text-6xl lg:text-8xl absolute left-[42%] top-1/2 -translate-y-1/2 -translate-x-1/2">
                                    1
                                </h1>
                                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 p-[0.22rem] bg-gradient-to-b from-[#814E00] to-[#C07F00] rounded-full">
                                    <div className="bg-white w-full h-full rounded-full"></div>
                                </div>

                            </div>
                        </div>
                    </div>

                    {/* card two */}
                    <div className='lg:ms-[45%]'>
                        <div className='flex items-center gap-12 max-w-lg'>
                            {/* Arrow and Number */}
                            <div className="relative -rotate-180">
                                <svg className='size-20 lg:size-[120px]' width="175" height="18" viewBox="0 0 175 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M0 9.00002L15 17.6603L15 0.339761L0 9.00002ZM175 7.5L13.5 7.50002L13.5 10.5L175 10.5L175 7.5Z"
                                        fill="url(#paint0_linear_127_10675)"
                                    />
                                    <defs>
                                        <linearGradient
                                            id="paint0_linear_127_10675"
                                            x1="87.5"
                                            y1="9.00001"
                                            x2="87.5"
                                            y2="8.00001"
                                            gradientUnits="userSpaceOnUse"
                                        >
                                            <stop stopColor="#814E00" />
                                            <stop offset="1" stopColor="#C07F00" />
                                        </linearGradient>
                                    </defs>
                                </svg>
                                <h1 className="gradient-text rotate-180 font-roboto font-extrabold opacity-50 text-6xl lg:text-8xl absolute left-[55%] top-1/2 -translate-y-1/2 -translate-x-1/2">
                                    2
                                </h1>
                                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 p-[0.22rem] bg-gradient-to-b from-[#814E00] to-[#C07F00] rounded-full">
                                    <div className="bg-white w-full h-full rounded-full"></div>
                                </div>
                            </div>

                            <div className='bg-gradient-to-b from-[#814E00] to-[#C07F00] px-6 py-2 rounded-md'>
                                <p className="mt-1 font-roboto font-light leading-loose text-xs">Participate in community challenges focused on Spirit, Mind, and Body to win additional tokens.</p>

                            </div>
                        </div>
                    </div>
                </div>


                <div className="grid lg:grid-cols-2 py-10 gap-16 lg:gap-0">
                    {cards.map((card, index) => (
                        <StructureCard
                            key={index}
                            title={card.title}
                            description={card.description}
                            icon={card.icon}
                            margin={card.margin}
                        />
                    ))}

                </div>
            </div>
        </div>
    )
}
