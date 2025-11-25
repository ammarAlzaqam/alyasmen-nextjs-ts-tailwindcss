import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function ServiceQuickStart() {
  return (
    <div className="bg-[url(/assets/service/footer-bg.png)] bg-cover bg-center bg-no-repeat rounded-[30px] relative main-container px-0 max-xl:mx-5 mt-10 sm:mt-14">
      <div className="min-h-[400px] sm:min-h-[558px] px-5 max-sm:py-14 space-y-[47px] flex flex-col justify-center items-center text-center ">
        {/*//! Text */}
        <div className="flex flex-col justify-center items-center text-center space-y-3">
          <h1 className="service-head_text">دعونا نعمل معاً</h1>
          <h3 className="subtitle max-w-[869px]">
            "نقدّم باقة من الخدمات الهندسية التي تغطي جميع مراحل المشروع، من
            التصميم إلى التنفيذ، مع ضمان الجودة والالتزام والدقة في كل تفصيلة."{" "}
          </h3>
        </div>

        {/*//! CTA Buttons */}
        <div className="flex max-md:flex-col md:justify-center gap-[11px] w-full md:w-[699px]">
          <Link href="/contact" className="md:flex-1">
            <Button className="w-full btn flex-1">تواصل معنا</Button>
          </Link>

          <Link href="/services" className="md:flex-1">
            <Button className="w-full max-lg:py-7! lg:h-[86px]! rounded-[30px]! text-body-bold max-lg:text-[18px]! text-primary-50! bg-transparent! border border-primary-50 hover:bg-primary-800! hover:border-none cursor-pointer focus:bg-secondary-500! focus:text-primary-700!">
              رؤية جميع الخدمات
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
