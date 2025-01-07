import React from 'react'
import image from '../assets/images/tokenomic.png'
import { TokenOverviewCard } from '../components/TokenOverviewCard'
import iconOne from '../assets/icons/medal (1) 1.svg'
import iconTwo from '../assets/icons/coding 1.svg'
import iconThree from '../assets/icons/social-justice 2.svg'
import iconFour from '../assets/icons/discussion 1.svg'
import iconFive from '../assets/icons/social-media 1.svg'
import iconSix from '../assets/icons/add 1.svg'


const TokenOverview = () => {
    const cardsData = [
        {
            title: 'User Rewards',
            des: '400 million tokens (40%) are earmarked for rewardingusers for their engagement with the app’s features, including prayer tracking,Quran reading, and participation in community challenges.',
            icon: iconOne,
            top: 'top-0',
            left: 'left-5'
        },
        {
            title: 'Development & Operations',
            des: '200 million tokens (20%) fund the continuousimprovement and operational costs of the Hasanat platform, ensuring a seamlessuser experience.',
            icon: iconTwo,
            top: 'top-[160%]',
            left: 'left-[32%]'
        },
        {
            title: 'Community Initiatives',
            des: '150 million tokens (15%) support charitable causes,educational programs, and community projects, reflecting our commitment togiving back.',
            icon: iconThree,
            top: 'top-[320%]',
            left: 'left-[62%]'
        },
        {
            title: 'Team and Advisors',
            des: '100 million tokens (10%) are allocated to thededicated team and advisors behind Hasanat, vested over four years to alignwith the platform’s long-term success.',
            icon: iconFour,
            top: 'top-[520%]',
            left: 'left-[38%]'
        },
        {
            title: 'Marketing & Partnerships',
            des: "100 million tokens (10%) boost the platform'svisibility, foster partnerships, and expand our user base.",
            icon: iconFive,
            top: 'top-[730%]',
            left: 'left-[62%]'
        },
        {
            title: 'Liquidity Pool',
            des: '50 million tokens (5%) provide liquidity for HasanatTokens on various exchanges, facilitating easy trading and access for allusers.',
            icon: iconSix,
            top: 'top-[870%]',
            left: 'left-[32%]'
        },
    ]

    return (
        <div className='lg:pb-16 relative lg:h-[220vh]  '>
            <div className="absolute left-0 top-1/2 -translate-y-1/2 hidden lg:block ">
                <img src={image} alt="token" className=' size-1/2 object-contain' />
            </div>

            <div className="container relative me-auto">
                <div className="flex justify-end items-end">
                    <div className='flex flex-col gap-3 justify-end items-end mb-8 lg:mb-0'>
                        <h1 className='uppercase text-2xl lg:text-4xl gradient-text text-right '>Tokenomics Overview </h1>
                        <p className='max-w-sm font-sans text-xs tracking-wide leading-relaxed text-right'><b>Total Supply:</b> 1 billion Hasanat Tokens have been created, ensuring a balanced distribution to support our community and platform's growth without diluting value.</p>
                        <h2 className="text-xl font-bold font-poppins  gradient-text uppercase">Distribution Plan</h2>
                    </div>
                </div>

                {/* cards */}
                {cardsData.map((item, index) => {
                    return <TokenOverviewCard item={item} key={index} />
                })}

            </div>

        </div>
    )
}

export default TokenOverview