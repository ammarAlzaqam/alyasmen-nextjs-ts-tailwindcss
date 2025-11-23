import Image from "next/image";
import AboutSec from "./components/AboutSec";
import HeroSec from "./components/HeroSec";

export default function HomePage() {
  return (
    <section className="relative z-2">
      {/*//! bg victor */}
      <Image 
        src="/assets/home/bg-victor.png"
        alt="home-bg-victor"
        fill
        className="-z-1 translate-y-170 max-md:-rotate-180 max-lg:scale-150 md:-translate-y-10"
      />
      <HeroSec />
      <AboutSec />
    </section>
  );
}
