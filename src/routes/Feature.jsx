import React from 'react'
import { Header } from '../sections/Header'
import { Hero } from '../sections/Hero'
import { HowTokenWorks } from '../sections/HowTokenWorks'
import TokenOverview from '../sections/TokenOverview'
import { Structure } from '../sections/Structure'
import { Footer } from '../sections/Footer'
import footerImg from '../assets/images/featurefooterimg.png'

export const Feature = () => {
  return (
    <>
      <section className="bg-bannerImageFeature bg-no-repeat bg-cover bg-center lg:bg-top h-[100vh] ">
        <Header />
        <Hero>
          <div className='max-w-lg text-white '>
            <h2 className='font-poppins font-bold text-xl tracking-wide leading-snug lg:text-xl uppercase'>Hasanat Token & Tokenomics</h2>
            <h1 className='font-monoton text-5xl mt-2 lg:mt-8  lg:text-[4rem] uppercase'>hasanat</h1>
            <h2 className='font-poppins font-thin tracking-wide text-3xl lg:text-7xl uppercase lg:mt-4'>Token</h2>
            <p className='font-roboto font-bold tracking-widest text-lg max-w-md mt-4'>Empowering the Digital Islamic Community with Hasanat Token</p>
            <small className='font-roboto text-sm inline-block tracking-wide font-extralight max-w-[28.5rem] mt-3 leading-loose'>Welcome to the future ofIslamic digital engagement—introducing the Hasanat Token, our innovativecryptocurrency designed to reward devotion, education, and communityparticipation. Bridging Islamic values with the convenience of moderntechnology, the Hasanat Token is a cornerstone of our ecosystem, enhancingspiritual growth and fostering a supportive global community.</small>
          </div>
        </Hero>
      </section>


      <HowTokenWorks />
      <TokenOverview />
      <Structure />
      <Footer>
        {/* The box */}
        <div className="relative  -mb-72 lg:-mb-0 rounded-full h-[930px] lg:-mt-9 lg:h-auto p-4 lg:p-6 bg-gradient-to-b from-[#814E00] to-[#C07F00] overflow-hidden">
          {/* Shape decorations */}
          <div className="absolute top-0 left-0 rotate-90 lg:rotate-0 lg:top-12 lg:bottom-0 lg:left-0 h-64 w-64 rounded-full rounded-b-none rounded-tl-none bg-gradient-to-bl from-[#814E00] to-[#C07F00]"></div>
          <div className="absolute -top-20 -left-28 lg:top-44 lg:-left-12 lg:-bottom-32 w-64 h-64 rounded-full border-2 border-[#241702]"></div>
          <div className="absolute w-28 h-28 lg:h-20 lg:w-20 rotate-0 top-10 -left-9 lg:top-56 lg:-bottom-3 lg:left-16 rounded-full rounded-bl-none rounded-t-none lg:-rotate-90 bg-gradient-to-l from-[#814E00] to-[#C07F00]"></div>
          <div className="absolute w-28 h-28 lg:h-20 lg:w-20 rotate-0 top-10 -left-12 lg:top-[14.4rem] lg:-bottom-4 lg:left-14 rounded-full rounded-bl-none rounded-t-none lg:-rotate-90 border-4 border-opacity-30 border-[#814E00]"></div>

          {/* Content inside the box */}
          <div className="flex lg:flex-row flex-col justify-end mt-auto h-full gap-6 lg:gap-0 items-center lg:justify-end">
            <div className="flex flex-col items-center justify-center gap-6">
              <div className="text-center">
                <p className="uppercase font-bold font-roboto tracking-widest">Ready to</p>
                <h1 className="font-roboto font-bold text-4xl lg:text-4xl">Enhance Your Spiritual Life?</h1>
              </div>
              <button className="bg-[#000000] rounded-full w-full lg:w-max font-roboto font-medium px-6 py-3 shadow-xl">
                Download Hasanat Now
              </button>
              <p className="font-roboto font-thin text-sm w-full lg:text-xs max-w-[18rem] text-center">
                Earn Content Creator Tokens by watching your favorite YouTubers
              </p>
              <h4 className="font-roboto font-bold tracking-widest uppercase text-sm">Available on iOS and Android</h4>
            </div>
            <div>
              <img src={footerImg} alt="img" className="lg:size-64" />
            </div>
          </div>
        </div>
      </Footer>
    </>
  )
}
