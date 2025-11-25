import servicesList from "@/constants/servicesCard";
import ServiceHeader from "./components/service-header";
import ServiceInfo from "./components/service-info";
import { notFound } from "next/navigation";
import ServiceDetails from "./components/service-details";
import ServiceQuickStart from "./components/service-quickStart";
import Image from "next/image";

export default async function ServicePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const service = findService(id);
  if (!service) {
    notFound();
  }

  return (
    <section className="relative z-2 py-12 sm:pt-[64px]">
      {/*//! Overlay shadow */}
      <>
        <Image
          src="/assets/service/shadow-h.png"
          alt="shadow-overlay-image"
          width={1821.4705837002616}
          height={2645.9777870462453}
          className="absolute w-full -z-1 h-[3000px] -top-[217.04px] right-0"
        />

        <Image
          src="/assets/service/shadow-c.png"
          alt="shadow-overlay-image"
          width={1058}
          height={1058}
          className="absolute w-[1058px] max-sm:h-[800px]! -z-1 top-[140px] left-0"
        />

        <Image
          src="/assets/service/shadow-t.png"
          alt="shadow-overlay-image"
          width={1932.999945175607}
          height={1932.999945175607}
          className="absolute w-[1932px] max-sm:h-[800px]! -z-1 bottom-0 left-0"
        />
      </>

      <ServiceHeader />
      <ServiceInfo service={service} />
      <ServiceDetails service={service} />
      <ServiceQuickStart />
    </section>
  );
}

const findService = (id: string) => {
  return servicesList.find((s) => s.route.includes(id));
};
