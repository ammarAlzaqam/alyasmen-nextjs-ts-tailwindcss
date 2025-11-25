import GridDistortion from "@/components/GridDistortion";
import { Button } from "@/components/ui/button";
import { Service } from "@/constants/servicesCard";
import QuickStart from "./QuickStart";
import ProjectsSwiper from "./projects-swipter";
import Link from "next/link";
import Popup from "@/components/shared/Popup";

export default function ServiceDetails({ service }: { service: Service }) {
  return (
    <div className="bg-primary-500 shadow-xl rounded-[30px] main-container p-0 max-xl:mx-5 py-12 sm:py-15 mt-14 sm:mt-18 space-y-12 overflow-hidden">
      <div className="px-7 sm:px-20 space-y-12">
        {/*//! Definition */}
        <div className="flex max-lg:flex-col items-start gap-5 justify-between">
          {/*//! Text */}
          <div className="flex-2 space-y-6 max-w-[747px]">
            <h2 className="service-title">ايه هى {service.title} ؟</h2>
            <h3 className="subtitle max-w-[869px]">{service.des} </h3>
          </div>

          {/*//! Quick start buttons */}
          <QuickStart />
        </div>

        {/*//! Values */}
        <div className="space-y-6">
          <h3 className="service-title">هنقدملك ايه؟</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {service.values.map((value, i) => (
              <div
                key={value}
                data-aos={i % 2 === 0 ? "zoom-in-right" : "zoom-in-left"}
                className="rounded-[30px] bg-primary-400 px-4 sm:px-6 py-2 min-h-[80px] sm:min-h-[97px]"
              >
                <div className="flex items-center gap-4 h-full">
                  <img src="/assets/service/value/check.svg" />
                  <h4 className="subtitle font-[700]">{value}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/*//! Project */}
      <ProjectsSwiper projects={service.ourWorks} />

      {/*//! Popup (view all projects) */}
      <div className="flex justify-center">
          <Popup />
      </div>
    </div>
  );
}
