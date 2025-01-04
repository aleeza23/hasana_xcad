import React from 'react';
import { CardBox } from './CardBox';

export const FeatureCard = ({ image, title, description, mobileImage }) => {
    return (
        <CardBox>
            <div className='bg-gradient-to-bl rounded-xl from-white/90 to-white/0 p-[1px] w-24 h-24 flex justify-center items-center  lg:hidden'>
                <div className='bg-[#281c1c] rounded-xl w-full h-full flex justify-center items-center '>
                    <img src={mobileImage} alt={title} className="size-24 mt-11" />
                </div>
            </div>
            <img src={image} alt={title} className="w-full rounded-md hidden lg:block" />
            <h2 className="text-xl max-w-56 font-bold font-poppins mt-2 gradient-text uppercase">{title}</h2>
            <p className="mt-1 font-roboto font-light text-sm">{description}</p>
        </CardBox>
    );
};
