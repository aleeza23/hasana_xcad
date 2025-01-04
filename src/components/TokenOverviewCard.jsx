import React from 'react'
import { CardBox } from './CardBox'


export const TokenOverviewCard = ({ item }) => {
    const { icon, title, des, top, left } = item
    return (
        <div className={`lg:absolute ${top}  ${left}`}>
            <CardBox className={'lg:max-w-xs mb-8 lg:mb-0 '} boxPadding={'ps-6 py-6  '}>
                <div className='bg-gradient-to-bl rounded-3xl mb-4 from-white/90 to-white/90 p-[1px] w-20 h-20 flex justify-center items-center '>
                    <div className='bg-gradient-to-l from-[#814E00] to-[#C07F00] rounded-3xl w-full h-full flex justify-center items-center '>
                        <img src={icon} alt={'title'} className="size-12" />
                    </div>
                </div>
                <h2 className="text-xl max-w-56 font-bold font-poppins mt-2 gradient-text uppercase">{title}</h2>
                <p className="mt-1 font-roboto font-light leading-loose text-xs">{des}</p>
            </CardBox>
        </div>
    )
}
