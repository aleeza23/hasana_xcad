import { SectionHeading } from "./components/SectionHeading";
import { AdditionalFeatures } from "./sections/AdditionalFeatures";
import { CoreFeatures } from "./sections/CoreFeatures";
import { Header } from "./sections/Header";
import { Hero } from "./sections/Hero";

export default function App() {
  return (
    <>
      <section className="bg-bannerImage bg-no-repeat bg-cover bg-center lg:bg-top h-[100vh] ">
        <Header />
        <Hero />
      </section>
      <CoreFeatures />
      <AdditionalFeatures />

    </>
  )
}