import React from 'react';

export const AddFeaturesCards = ({ image, heading, className, children, comming = 'true', }) => {
    return (
        <div className={`${className}  from-[#814E00] to-[#C07F00] border max-w-xs  border-white/90 p-6 pb-9  rounded-3xl relative h-max`}>
            {/* SVG with Dynamic Image */}
            <div className="absolute right-5 -top-0 -translate-y-1/2 translate-x-1/2 lg:right-10">
                <div className="relative">
                    <svg className={`size-20 lg:size-[130px]`} width="169" height="181" viewBox="0 0 169 181" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M102.266 6.69537C131.599 -10.2402 168.266 10.9293 168.266 44.8005L168.266 136.912C168.266 170.783 131.599 191.953 102.266 175.017L22.4952 128.961C-6.83817 112.026 -6.83819 69.6866 22.4951 52.751L102.266 6.69537Z" fill="url(#paint0_linear_127_10542)" />
                        <defs>
                            <linearGradient id="paint0_linear_127_10542" x1="168.266" y1="-31.4098" x2="27.0854" y2="213.122" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#814E00" />
                                <stop offset="1" stopColor="#C07F00" />
                            </linearGradient>
                        </defs>
                    </svg>

                    {/* Dynamic Image */}
                    <img
                        src={image}
                        alt="Dynamic Icon"
                        className="absolute top-1/2 left-[60%] -translate-x-1/2 -translate-y-1/2 size-12 lg:size-16"
                    />
                </div>
            </div>

            {/* Dynamic Heading and Description */}
            {comming !== 'false' && <p className='font-poppins text-[#231C1C] font-bold uppercase mb-3'>Coming Soon</p>}
            <h1 className='font-poppins text-3xl lg:text-4xl max-w-sm mb-3 leading-[1.20] font-extralight'>{heading}</h1>

            {/* Black Box Content */}
            {children}
        </div>
    );
};
