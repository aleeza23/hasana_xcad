import { Header } from "./sections/Header";
import { Hero } from "./sections/Hero";

export default function App() {
  return (
    <>
      <section className="bg-bannerImage bg-repeat bg-cover bg-top h-[100vh] ">
        <Header />
        <Hero />

      </section>

    </>
  )
}