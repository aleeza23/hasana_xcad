import React from 'react';
import image01 from '../assets/images/Rectangle 2736.png';

export const FeatureCard = () => {
    return (
        <div className='bg-gradient-to-tr from-white/90 rounded-xl p-[1px]  to-white/0'>
            <div className="rounded-xl bg-[#281c1c] relative p-4 ">
                <img src={image01} alt="img" className="w-full rounded-md" />
                <h2 className="text-xl max-w-56 font-bold font-poppins mt-2 gradient-text uppercase ">Islamic Activities Tracking</h2>
                <p className="mt-1 font-roboto font-light text-sm">
                    Daily Prayers and Devotion: Log your five daily prayers, Quran readings, and religious observances.
                    Automated Tracking: Smart technology keeps track of your religious activities effortlessly.
                </p>
            </div>
        </div>
    );
};
