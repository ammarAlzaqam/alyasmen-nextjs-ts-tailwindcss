import ShinyText from "@/components/shared/ShinyText";
import { SubTitle, Title } from "@/components/shared/SplitText";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function HeroSec() {
  return (
    <div className="relative bg-[url(/assets/home/hero-sec/bg.png)] bg-cover bg-bottom bg-no-repeat">
      <div className="main-container min-h-dvh flex">
        <div className="w-full flex justify-center items-center gap-10 sm:gap-15 max-lg:flex-col">
          {/*//! Text  */}
          <div className="space-y-7 sm:space-y-13">
            <div className="max-w-[512px] space-y-3 sm:space-y-5">
              <Title
                text=" الياسمين للأعمال الهندسية
                  والتشطيبـــــــــــــــــــــــــــــــــــــــــــــــــــــات
                "
              />
              <SubTitle
                text={`                "نقدّم حلول هندسية وتشطيبات متكاملة بتصميمات دقيقة وجودة تنفيذ
                  عالية."`}
              ></SubTitle>
            </div>
            {/*//* button */}
            <Button className="btn animate__animated animate__flipInX w-full">
              <ShinyText text="اطلب خدمتك الآنِ" />
            </Button>
          </div>

          {/*//! Logo image */}
          <Image
            src="/assets/home/hero-sec/logo.png"
            alt="logo-img"
            width={680}
            height={457}
            className="shrink animate__animated animate__flipInX max-lg:hidden xs:w-[400px] lg:w-[450px] xl:w-[680px]"
          />
        </div>
      </div>
    </div>
  );
}
