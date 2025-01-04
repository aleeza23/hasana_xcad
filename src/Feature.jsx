import React from 'react'
import { Header } from './sections/Header'
import { Hero } from './sections/Hero'
import { HowTokenWorks } from './sections/HowTokenWorks'
import TokenOverview from './sections/TokenOverview'
import { Structure } from './sections/Structure'

export const Feature = () => {
  return (
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

      <HowTokenWorks />
      <TokenOverview />
      <Structure />
    </section>
  )
}
