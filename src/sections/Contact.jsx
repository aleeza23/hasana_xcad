import React from 'react'

export const Contact = () => {
    return (
        <div className='py-16'>
            <div className="container">
                <h1 className='text-center  text-2xl lg:text-3xl gradient-text font-roboto font-bold'>Your  <span className='font-monoton font-medium uppercase'>Voice</span> Matters</h1>
                <p className='font-roboto font-light leading-loose text-xs max-w-lg text-center mx-auto mt-4 '>We believe in the power of our community to drive Hasanat forward. Share your thoughts, suggestions, and feedback on our tokenomics model and help us build a platform that truly reflects the values and needs of the Muslim community worldwide.</p>

                <div className='lg:flex justify-center items-center mt-12'>
                    <div className='flex flex-col gap-4 lg:w-96'>
                        <input placeholder='Your Name' type="text" className='bg-transparent   placeholder:text-white/30 border-2 border-opacity-50 py-1.5 px-4 border-[#C07F00] rounded-md' />
                        <input placeholder='Your Email' type="text" className='bg-transparent placeholder:text-sm placeholder:text-white/30 border-2 border-opacity-50 py-1.5 px-4 border-[#C07F00] rounded-md' />
                        <textarea rows={'5'} placeholder='Write your message' type="text" className='bg-transparent placeholder:text-sm placeholder:text-white/30 border-2 border-opacity-50 py-1.5 px-4 border-[#C07F00] rounded-md' ></textarea>


                        <button className='rounded-full h-12 px-4 ' style={{ background: 'linear-gradient(to right, rgba(129, 78, 0, 0.4), rgba(192, 127, 0, 0.4))' }}>
                            <div className='bg-gradient-to-b from-[#814E00] to-[#C07F00] rounded-full w-2/3 h-8 px-4 '>
                                <div className='flex justify-between items-center flex-shrink-0'>
                                    <span><svg width="20" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M18.2462 5.04647C18.6587 4.63404 19.2182 4.40234 19.8016 4.40234C20.3849 4.40234 20.9444 4.63404 21.357 5.04647L31.257 14.9465C31.6694 15.359 31.9011 15.9185 31.9011 16.5019C31.9011 17.0852 31.6694 17.6447 31.257 18.0573L21.357 27.9573C20.942 28.358 20.3863 28.5798 19.8095 28.5748C19.2326 28.5697 18.6809 28.3384 18.273 27.9305C17.8651 27.5226 17.6337 26.9708 17.6287 26.394C17.6237 25.8171 17.8454 25.2614 18.2462 24.8465L24.2016 18.7019H3.30156C2.71809 18.7019 2.15851 18.4701 1.74593 18.0575C1.33335 17.6449 1.10156 17.0854 1.10156 16.5019C1.10156 15.9184 1.33335 15.3588 1.74593 14.9462C2.15851 14.5337 2.71809 14.3019 3.30156 14.3019H24.2016L18.2462 8.15727C17.8337 7.74471 17.602 7.18524 17.602 6.60187C17.602 6.01851 17.8337 5.45903 18.2462 5.04647Z" fill="white" />
                                    </svg>
                                    </span><span className='text-sm ms-auto'>Send Message</span>
                                </div>

                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
