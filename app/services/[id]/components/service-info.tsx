import GridDistortion from "@/components/GridDistortion";
import { Service } from "@/constants/servicesCard";

export default function ServiceInfo({service}: {service: Service}) {
  return (
    <div className="rounded-[30px] relative main-container px-0 max-xl:mx-5 mt-14 sm:mt-18">
      <GridDistortion
        className="absolute! -z-1 rounded-[30px]"
        imageSrc="/assets/service/header-bg.png"
      />

      {/*//! Text */}
      <div className="min-h-[400px] sm:min-h-[558px] px-5 flex flex-col justify-center items-center text-center space-y-3">
        <h1 className="service-head_text">
          {service.title}
        </h1>
        <h3 className="subtitle max-w-[869px]">
          "نقدّم باقة من الخدمات الهندسية التي تغطي جميع مراحل المشروع، من
          التصميم إلى التنفيذ، مع ضمان الجودة والالتزام والدقة في كل تفصيلة."
        </h3>
      </div>
    </div>
  );
}
