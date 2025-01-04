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
      <Footer footerImage={footerImg} />

    </>
  )
}