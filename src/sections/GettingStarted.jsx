import React from 'react'
import rightImage from '../assets/images/DALL_E_2024-02-17_14.19 3.png'

export const GettingStarted = () => {
    return (
        <div className='my-16 bg-bannerImageGettingStarted lg:h-[70vh] '>
            <div className="container py-6 ">
                <h1 className='text-center  text-xl  gradient-text font-roboto font-bold'>Getting Involved with </h1>
                <h1 className='font-monoton font-medium text-3xl mt-2 uppercase text-center gradient-text'>Hasanat Tokens</h1>

                {/* grid */}
                <div className="grid lg:grid-cols-2 ">
                    <div className='flex flex-col items-center justify-center '>
                        <div className='mt-8 lg:mt-24'>
                        <p className='font-roboto font-light leading-loose text-xs max-w-sm '>To start earning and using Hasanat Tokens, simply engage with the app’s features. For new users interested in trading, we’ve partnered with leading DEX and CEX platforms to ensure Hasanat Tokens are accessible to everyone.</p>
                        <p className='font-roboto font-light mt-1 leading-loose text-xs max-w-sm '> Detailed guides on setting up a wallet and trading Hasanat Tokens are available on our <a href="" className='underline text-[#C07F00]'>Support</a> page.</p>

                        <div>
                            <button className='inline-flex items-center gap-1 mt-4'>
                                <span className='font-roboto text-[#C07F00] text-xs font-bold'>Check Now</span>
                                <div>
                                    <svg width="22" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="17" cy="17" r="16.5" stroke="white" />
                                        <path d="M11 22L22 13.5" stroke="white" />
                                        <path d="M17 12C18.8333 12.3333 22.8 12.8 24 12C23.5 13.5 22.8 16.7 24 17.5" stroke="white" />
                                    </svg>
                                </div>
                            </button>
                        </div>
                        </div>
                    </div>
                    <div>
                        <img src={rightImage} alt="" className='lg:size-96  dropShadow lg:ms-auto mt-8 lg:mt-0' />
                    </div>

                </div>
            </div>
        </div>
    )
}
