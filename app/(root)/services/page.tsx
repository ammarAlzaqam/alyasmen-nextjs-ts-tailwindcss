import LightRays from "@/components/shared/LightRays";
import { SubTitle, Title } from "@/components/shared/SplitText";
import { Button } from "@/components/ui/button";
import servicesList from "@/constants/servicesCard";
import Image from "next/image";
import Link from "next/link";
import GoServicesButton from "./GoServicesButton";

export default function ServicesPage() {
  return (
    <section className="relative z-2">
      {/*//! Overlay shadow image */}
      <Image
        src="/assets/services/shadow.png"
        alt="shadow-layout-image"
        width={1821.4705837002616}
        height={2645.9777870462453}
        className="-z-1 absolute top-[300px] sm:-top-[217.04px] left-0 w-full max-sm:h-[500dvh]"
      />

      <AboutHeroSec />
      <ServicesSec />
    </section>
  );
}

const AboutHeroSec = () => {
  return (
    <div className="bg-[url(/assets/services/hero-sec/bg2.png)] min-h-dvh bg-no-repeat bg-cover bg-bottom">
      <div className="main-container">
        <div className="pt-32 md:pt-48 pb-18 md:pb-24 space-y-9 md:space-y-14">
          {/*//! Text  */}
          <div className="space-y-1 max-w-[600px]">
            <h1 className="animate__animated animate__jackInTheBox head-text">
              خدماتنا
            </h1>
            <Title
              text="              حلول هندسية متكاملة بمعاييــر و
              دقـــــــــــــــــــــــــــــــــــــــــــة
              عاليـــــــــــــــــــــــــة
"
              className="title max-md:leading-[110%] text-start! text-shadow-lg! text-shadow-primary-800!"
            />
            <SubTitle
              text={`            "نقدّم باقة من الخدمات الهندسية التي تغطي جميع مراحل المشروع، من
                التصميم إلى التنفيذ، مع ضمان الجودة والالتزام والدقة في كل تفصيلة."
              `}
              className="text-start! text-shadow-lg! text-shadow-accent-800!"
            />
          </div>

          {/*//! Button */}
          <GoServicesButton />
        </div>
      </div>
    </div>
  );
};

const ServicesSec = () => {
  return (
    <div className="relative z-2 pt-24 sm:pt-10 pb-28 sm:pb-18 overflow-hidden">
      {/*//! Overlay victor image */}
      <Image
        src="/assets/services/services-sec/bg-vector.png"
        alt="bg-vector"
        width={333.0000005512907}
        height={507.5000008401803}
        className="-z-1 absolute -top-[140px] sm:-top-[80px] -left-[140px] sm:-left-[80px] max-sm:scale-50 rotate-[5.28deg] max-sm:opacity-80"
      />

      <div className="main-container space-y-10">
        {/*//! Title */}
        <div
          data-aos="fade-down"
          className="max-w-[469px] py-2 mx-auto flex flex-col items-center border-6 border-dashed border-primary-500"
        >
          <h2 className="text-heading3 max-sm:text-[40px]! text-primary-500">
            جميع خدماتنا
          </h2>
          <img
            src="/assets/services/services-sec/text-vector.png"
            alt="text-vector"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {servicesList.map(({ icon, title, des, route }, i) => (
            <div
              key={title}
              data-aos={i % 2 === 0 ? "fade-left" : "fade-right"}
              className="relative bg-primary-500 shadow-2xl text-center flex flex-col items-center gap-2 rounded-[30px] px-[30px] py-7"
            >
              <LightRays
                className="absolute! top-0! rounded-[30px]"
                raysSpeed={1}
                lightSpread={3}
                rayLength={5}
                raysOrigin={i % 2 === 0 ? "top-right" : "top-left"}
              />
              <img src={icon} alt={`${title}-image`} />
              <h3 className="subtitle text-white font-[700]">{title}</h3>
              <p className="text-[14px] sm:text-[16px] text-[#F6F6F6] font-[300] line-clamp-5">
                {des}
              </p>
              <Link href={route} className="w-full">
                <Button className="max-lg:py-7! lg:h-[52px]! rounded-[30px]! text-[20px] leading-[100%] font-[500] max-lg:text-[18px]! text-primary-500! bg-primary-50! hover:bg-primary-200! cursor-pointer focus:bg-secondary-500! focus:text-primary-700! mt-[25px] w-full">
                  قراءة المذيد
                </Button>
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/*//! Overlay shadow image */}
      <Image
        src="/assets/services/services-sec/shadow.png"
        alt="bg-vector"
        width={900}
        height={900}
        className="-z-1 absolute -bottom-[750px] -left-[80px]"
      />
    </div>
  );
};
