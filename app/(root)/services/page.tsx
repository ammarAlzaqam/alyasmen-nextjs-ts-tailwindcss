import GridDistortion from "@/components/GridDistortion";
import ShinyText from "@/components/shared/ShinyText";
import { SubTitle, Title } from "@/components/shared/SplitText";
import { Button } from "@/components/ui/button";

export default function ServicesPage() {
  return (
    <section>
      <AboutHeroSec />
    </section>
  );
}

const AboutHeroSec = () => {
  return (
    <div className="bg-[url(/assets/services/hero-sec/bg.png)] bg-no-repeat bg-cover bg-bottom">
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
          <div className="flex justify-center">
            <Button className="animate__animated animate__flipInX btn w-full max-w-[512px]">
              <ShinyText text="الإطلاع على الخدمات" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

const ServicesSec = () => {
  return (
    <div className="pt-10 pb-18">
      <div className="main-container"></div>
    </div>
  );
};
