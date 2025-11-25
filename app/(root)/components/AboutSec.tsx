import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function AboutSec() {
  return (
    <div className="relative z-2">
      <div className="main-container">
        <div className="pt-24 md:pt-48 pb-32 md:pb-64 flex max-md:flex-col items-center justify-center max-md:gap-20 lg:-space-x-6">
          {/*//! Text */}
          <div className="z-2 relative max-md:text-center space-y-4">
            {/*//* Q overlay image */}
            <Image
              src="/assets/home/about-sec/q.png"
              alt="question-img"
              width="340"
              height="500"
              className="-z-1 absolute top-0 md:top-4 left-1/2 -translate-x-1/2 lg:-translate-x-1/5 max-md:w-[250px]"
            />

            <h1 className="head-text">من نحن؟</h1>
            <h2 className="title">
              الياسمين للأعمال الهندسية
              والتشطيبـــــــــــــــــــــــــــــــــــــــــــــــــــــات
            </h2>
            <h3 className="subtitle md:w-[400px] lg:w-[650px]">
              الياسمين للأعمال الهندسية والتشطيبات والديكور . فريق متكامل من
              المهندسين المبدعين يلتزمون بالمعايير الهندسيه الانشائيه والمعماريه
              والاستخدام الأمثل للخامات بالتالي تحقيق التوازن بين الجوده
              والتكلفه , يلتزم مكتبنا بتزويد عملائنا بحلول تصميم داخلي مميزه
              مصممه خصيصا لتلبية احتياجاتهم وتفضيلاتهم الخاصة , هدفنا هو حمايه
              العميل من اي استغلال محتمل او ممارسات هـــــــــــــــواه. 
            </h3>
            <Link href="/services">
              <Button className="btn-light w-full!">تطلع على خدماتنا</Button>
            </Link>
          </div>
          <div className="">
            <Image
              src="/assets/home/about-sec/side.png"
              alt="al-yasmeen"
              width={998.3995361328125}
              height={616.1465454101562}
              className=""
            />
          </div>
        </div>
      </div>

      {/*//! Overlay shadow images */}
      <Image
        src="/assets/home/about-sec/c-shadow.png"
        alt="circle-shadow-overlay-image"
        width={500}
        height={500}
        className="-z-1 absolute -bottom-75 -right-20"
      />

      <Image
        src="/assets/home/about-sec/t-shadow.png"
        alt="circle-shadow-overlay-image"
        width={500}
        height={500}
        className="-z-1 absolute -bottom-120 -left-20"
      />
    </div>
  );
}
