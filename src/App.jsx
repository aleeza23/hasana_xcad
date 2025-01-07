import { AdditionalFeatures } from "./sections/AdditionalFeatures";
import { CoreFeatures } from "./sections/CoreFeatures";
import { Footer } from "./sections/Footer";
import { Header } from "./sections/Header";
import { Hero } from "./sections/Hero";
import { Roadmap } from "./sections/Roadmap";
import { HiMiniPlay } from "react-icons/hi2";
import footerImg from './assets/images/footerImg.png'



export default function App() {
  return (
    <>
      <section className="bg-bannerImage bg-no-repeat bg-cover bg-center lg:bg-top h-[100vh] ">
        <Header />
        <Hero>
          <div className='max-w-lg text-white mt-24 '>
            <h2 className='font-poppins font-bold text-xl tracking-wide leading-snug lg:text-3xl uppercase'>Nurturing Faith Through Technology.</h2>
            <h1 className='font-monoton text-5xl mt-2 lg:mt-5  lg:text-[4.9rem] uppercase'>Features</h1>
            <h2 className='font-poppins font-thin text-3xl lg:text-6xl uppercase lg:-mt-2'>of Hasanat</h2>
            <p className='font-roboto font-thin text-md max-w-sm mt-2'>Empowering Your Spiritual Journey with Advanced Features</p>

            <div className="mt-8 max-w-60 h-10 relative">
              <div className="h-full w-full max-w-32 rounded-full" style={{ background: 'linear-gradient(to right, rgba(129, 78, 0, 0.4), rgba(192, 127, 0, 0.4))' }}>
                <div className="max-w-24 bg-gradient-to-b from-[#814E00] to-[#C07F00] h-full w-full rounded-full opacity-100">
                </div>
              </div>
              <div className="absolute text-sm left-4 top-1/2 -translate-y-1/2 text-white">
                <div className="flex items-center ">
                  <HiMiniPlay className='size-7' />
                  <span >WATCH OUR VIDEO</span>
                </div>
              </div>
            </div>
          </div>
        </Hero>
      </section>
      <CoreFeatures />
      <AdditionalFeatures />
      <Roadmap />
      <Footer>
        {/* The box */}
        <div className="relative -mb-72 lg:-mb-0 rounded-full h-[900px] lg:-mt-9 lg:h-auto p-4 lg:p-6 bg-gradient-to-b from-[#814E00] to-[#C07F00] overflow-hidden">
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