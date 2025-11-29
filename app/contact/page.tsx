import Header from "@/components/global/Header";
import Image from "next/image";
import SendMessageForm from "./SendMessageForm";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import mediaLinks from "@/constants/mediaLinks";

export default function ContactPage() {
  return (
    <section className="bg-primary-500 pt-32 pb-10">
      <Header />

      <div className="rounded-[30px] bg-primary-50 relative main-container px-0 max-xl:mx-5">
        <div className="px-7 sm:px-20 pt-7 pb-32 space-y-18">
          <h1 className="service-head_text max-sm:text-[45px] text-primary-500 text-center">
            تواصل معنا
          </h1>

          <div className="flex gap-10 max-sm:flex-col">
            {/*//! Side Image */}
            <Image
              src="/assets/contact/side.png"
              alt="side-image"
              width={372}
              height={567}
              className="max-sm:w-full"
            />

            <div className="space-y-10 w-full">
              {/*//! Form */}
              <div className="w-full flex max-lg:flex-col-reverse gap-18 max-sm:gap-10 justify-between">
                <SendMessageForm />

                <div className="max-lg:flex max-lg:gap-10 space-y-0 lg:space-y-20 text-end">
                  <div>
                    <h3 className="subtitle text-primary-700 font-[700]">
                      إلى
                    </h3>
                    <h4 className="subtitle text-primary-500">
                      @alyasmeen.com
                    </h4>
                  </div>

                  <div>
                    <h3 className="subtitle text-end text-primary-700 font-[700]">
                      المكان{" "}
                    </h3>
                    <h4 className="subtitle text-primary-500">
                      الاسكندرية , مصر
                    </h4>
                  </div>
                </div>
              </div>

              {/*//! Social links */}
              <div className="flex max-lg:flex-col gap-15 items-center">
                <Button
                  type="submit"
                  form="contact-form"
                  className="py-8! md:px-24 max-md:w-full rounded-[48px]! text-[24px] max-lg:text-[18px]! text-primary-50! bg-primary-500! hover:bg-primary-700! cursor-pointer focus:bg-secondary-200! focus:text-primary-500! focus:text-shadow-xs! focus:text-shadow-primary-700/80!"
                >
                  تواصل معنا الآن
                </Button>

                <div className="flex gap-7 sm:gap-9 sm:flex-wrap">
                  {mediaLinks.map(({ Icon, route }, i) => (
                    <Link key={route + i} href={route} className="group">
                      <Icon className="text-primary-500 size-9 sm:size-11 group-hover:scale-110 transition-all duration-300" />
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
