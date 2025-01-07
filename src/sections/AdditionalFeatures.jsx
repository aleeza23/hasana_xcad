import React from 'react'
import { SectionHeading } from '../components/SectionHeading'
import { AddFeaturesCards } from '../components/AddFeaturesCards'
import { FaCheck } from "react-icons/fa";

// IMPORTING IMAGES
import prayImage from '../assets/icons/pray.svg';
import zakatImage from '../assets/icons/Maskgroup.svg'
import ummrahTickets from '../assets/icons/tickets.svg'
import location from '../assets/icons/location.svg'
import financial from '../assets/icons/financial.svg'
import commercial from '../assets/icons/commercial.svg'




export const AdditionalFeatures = () => {
    return (
        <div className='py-12'>
            <div className="container">
                <SectionHeading heading={'additional features '} />

                {/* card layout */}
                <div className="grid lg:grid-cols-2 gap-14 lg:gap-24 py-24">
                    {/* col one */}
                    <AddFeaturesCards
                        image={prayImage}
                        heading="Spiritual NFT Moments"
                        className={'bg-gradient-to-b lg:max-w-full'}
                    >
                        {/* Feature Boxes */}
                        <div className="flex flex-col gap-5">
                            <div className='bg-[#111111] flex items-start gap-2 max-w-md rounded-sm border px-2 py-2 border-white/40'>
                                <div className='border-2 p-[2px] mt-1 bg-gradient-to-b from-[#814E00] to-[#C07F00] rounded-sm'><FaCheck className='size-1.5 -rotate-12' /></div>
                                <div>
                                    <p className='text-[7.5px] lg:text-sm font-roboto font-thin'>Collect and Trade:  </p>
                                    <p className='text-[7.5px] lg:text-xs tracking-wide font-roboto font-thin'>Digital assets representing significant Islamic moments and teachings.</p>
                                </div>
                            </div>

                            <div className='bg-[#111111] flex items-start gap-2 max-w-md rounded-sm border px-2 py-2 border-white/40'>
                                <div className='border-2 p-[2px] mt-1 bg-gradient-to-b from-[#814E00] to-[#C07F00] rounded-sm'><FaCheck className='size-1.5 -rotate-12' /></div>
                                <div>
                                    <p className='text-[7.5px] lg:text-sm font-roboto font-thin'>Gamified Experience:</p>
                                    <p className='text-[7.5px] lg:text-xs tracking-wide font-roboto font-thin'> Discover and collect Spiritual NFTs, adding a new dimension to faith.</p>
                                </div>
                            </div>
                        </div>
                    </AddFeaturesCards>

                    <AddFeaturesCards heading={'Hassle-Free Zakat Calculation'} image={zakatImage} className={'bg-gradient-to-t lg:max-w-full'}>
                        {/* Feature Boxes */}
                        <div className="flex flex-col gap-5">
                            <div className='bg-[#111111] flex items-start gap-2 max-w-md rounded-sm border px-2 py-2 border-white/40'>
                                <div className='border-2 p-[2px] mt-1 bg-gradient-to-b from-[#814E00] to-[#C07F00] rounded-sm'><FaCheck className='size-1.5 -rotate-12' /></div>
                                <div>
                                    <p className='text-[7.5px] lg:text-sm font-roboto font-thin'>Easy Management  </p>
                                    <p className='text-[7.5px] lg:text-xs tracking-wide font-roboto font-thin'>Built-in calculator for annual Zakat contributions.</p>
                                </div>
                            </div>

                            <div className='bg-[#111111] flex items-start gap-2 max-w-md rounded-sm border px-2 py-2 border-white/40'>
                                <div className='border-2 p-[2px] mt-1 bg-gradient-to-b from-[#814E00] to-[#C07F00] rounded-sm'><FaCheck className='size-1.5 -rotate-12' /></div>
                                <div>
                                    <p className='text-[7.5px] lg:text-sm font-roboto font-thin'>Charitable Giving:</p>
                                    <p className='text-[7.5px] lg:text-xs tracking-wide font-roboto font-thin'>Contribute to causes directly through the app.  </p>
                                </div>
                            </div>
                        </div>
                    </AddFeaturesCards>

                    <AddFeaturesCards heading={'Hajj and Umrah Planner'} image={ummrahTickets} className={'bg-gradient-to-b lg:max-w-full'}>
                        {/* Feature Boxes */}
                        <div className="flex flex-col gap-5">
                            <div className='bg-[#111111] flex items-start gap-2 max-w-md rounded-sm border px-2 py-2 border-white/40'>
                                <div className='border-2 p-[2px] mt-1 bg-gradient-to-b from-[#814E00] to-[#C07F00] rounded-sm'><FaCheck className='size-1.5 -rotate-12' /></div>
                                <div>
                                    <p className='text-[7.5px] lg:text-sm font-roboto font-thin'>Plan Your Pilgrimage:</p>
                                    <p className='text-[7.5px] lg:text-xs tracking-wide font-roboto font-thin'>Resources, guides, and tools for Hajj</p>
                                </div>
                            </div>

                        </div>
                    </AddFeaturesCards>

                    <AddFeaturesCards heading={'Location-Based Features'} image={location} className={'bg-gradient-to-t lg:max-w-full'}>
                        {/* Feature Boxes */}
                        <div className="flex flex-col gap-5">
                            <div className='bg-[#111111] flex items-start gap-2 max-w-md rounded-sm border px-2 py-2 border-white/40'>
                                <div className='border-2 p-[2px] mt-1 bg-gradient-to-b from-[#814E00] to-[#C07F00] rounded-sm'><FaCheck className='size-1.5 -rotate-12' /></div>
                                <div>
                                    <p className='text-[7.5px] lg:text-sm font-roboto font-thin'>Tailored Content:  </p>
                                    <p className='text-[7.5px] lg:text-xs tracking-wide font-roboto font-thin'>Access local prayer times, find the nearest mosques, and discover community events specific to your location.</p>
                                </div>
                            </div>

                            <div className='bg-[#111111] flex items-start gap-2 max-w-md rounded-sm border px-2 py-2 border-white/40'>
                                <div className='border-2 p-[2px] mt-1 bg-gradient-to-b from-[#814E00] to-[#C07F00] rounded-sm'><FaCheck className='size-1.5 -rotate-12' /></div>
                                <div>
                                    <p className='text-[7.5px] lg:text-sm font-roboto font-thin'>Geographic Customization:  </p>
                                    <p className='text-[7.5px] lg:text-xs tracking-wide font-roboto font-thin'>Experience a Hasanat app that adapts to your geographical and cultural context, providing a more personalized spiritual journey.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </AddFeaturesCards>

                    <AddFeaturesCards className='lg:-mt-[6.5rem] bg-gradient-to-t lg:max-w-full' heading={'Financial Ecosystem Development'} image={financial} >
                        {/* Feature Boxes */}
                        <div className="flex flex-col gap-5">
                            <div className='bg-[#111111] flex items-start gap-2 max-w-md rounded-sm border px-2 py-2 border-white/40'>
                                <div className='border-2 p-[2px] mt-1 bg-gradient-to-b from-[#814E00] to-[#C07F00] rounded-sm'><FaCheck className='size-1.5 -rotate-12' /></div>
                                <div>
                                    <p className='text-[7.5px] lg:text-sm font-roboto font-thin'>Objective:  </p>
                                    <p className='text-[7.5px] lg:text-xs tracking-wide font-roboto font-thin'> Build a robust financial ecosystem for transactions within the app</p>
                                </div>
                            </div>

                            <div className='bg-[#111111] flex flex-col items-start gap-2 max-w-md rounded-sm border px-2 py-2 border-white/40'>
                                <div className="flex items-center gap-2">
                                    <div className='border-2 p-[2px] mt-1 bg-gradient-to-b from-[#814E00] to-[#C07F00] rounded-sm'><FaCheck className='size-1.5 -rotate-12' /></div>
                                    <div>
                                        <p className='text-[7.5px] lg:text-sm font-roboto font-thin lowercase'>dex (Decentralized Exchange) </p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className='border-2 p-[2px] mt-1 bg-gradient-to-b from-[#814E00] to-[#C07F00] rounded-sm'><FaCheck className='size-1.5 -rotate-12' /></div>
                                    <div>
                                        <p className='text-[7.5px] lg:text-sm font-roboto font-thin lowercase'>CEX (Centralized Exchange)</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </AddFeaturesCards>

                    <AddFeaturesCards heading={'Commercial Expension'} image={commercial} className={'bg-gradient-to-b lg:max-w-full'}>
                        {/* Feature Boxes */}
                        <div className="flex flex-col gap-5">
                            <div className='bg-[#111111] flex items-start gap-2 max-w-md rounded-sm border px-2 py-2 border-white/40'>
                                <div className='border-2 p-[2px] mt-1 bg-gradient-to-b from-[#814E00] to-[#C07F00] rounded-sm'><FaCheck className='size-1.5 -rotate-12' /></div>
                                <div>
                                    <p className=' text-[7.5px] lg:text-sm font-roboto font-thin'>Objective:</p>
                                    <p className=' text-[7.5px] lg:text-xs tracking-wide font-roboto font-thin'>  Open avenues for commerce within the app ecosystem </p>
                                </div>
                            </div>

                        </div>
                    </AddFeaturesCards>
                </div>
            </div>
        </div>
    )
}
