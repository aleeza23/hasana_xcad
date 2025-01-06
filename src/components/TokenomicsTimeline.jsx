import React from 'react'

const TokenomicsTimeline = ({ title, desc }) => {
    return (
        <div className='flex items-center justify-center gap-4'>
            <div className='bg-[#1B1515] p-2 relative'>
                <h1 className='text-lg font-bold font-roboto gradient-text'>{title}</h1>
                <p className='font-roboto font-light leading-loose text-xs max-w-md'>{desc}</p>

                <div className='absolute -right-4 top-1/2 -translate-y-1/2'>
                    <svg width="18" height="27" viewBox="0 0 23 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22.418 13.1909L9.22712 0H0.233353V26.3817H9.22712L22.418 13.1909Z" fill="#1B1515" />
                    </svg>

                </div>
            </div>
            <div className='bg-white size-4 border flex-shrink-0'></div>
        </div>
    )
}

export default TokenomicsTimeline