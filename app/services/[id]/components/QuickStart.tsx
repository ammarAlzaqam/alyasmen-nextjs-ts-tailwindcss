"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useState } from "react";

export default function QuickStart() {
  const [close, set] = useState(false);

  return (
    <div data-aos="zoom-in" className={cn("flex-1 w-full transition-all! duration-700! rounded-[30px] px-5 py-10 bg-primary-800 space-y-[29px]",
        close && "max-h-0 lg:max-w-[30%] p-0 scale-0 opacity-0 pointer-events-none space-y-0"
    )}>
      <h3 className="subtitle font-[700] text-center">جاهز تبدأ معانا ؟</h3>
      <div className="flex flex-col gap-2 w-full">
        <Link href={`/contact`}>
          <Button className="text-[16px] sm:text-[20px] rounded-[30px] py-7 px-10 bg-primary-500 w-full hover:bg-primary-700! cursor-pointer focus:bg-secondary-300! focus:text-primary-500! focus:text-shadow-xs! focus:text-shadow-primary-600/80!">
            تواصل معنا الآن
          </Button>
        </Link>
        <Button
          onClick={() => set(true)}
          className="text-[16px] sm:text-[20px] rounded-[30px] py-7 px-10 w-full bg-transparent border-2 border-primary-500 hover:bg-primary-700! cursor-pointer focus:bg-secondary-300! focus:text-primary-500! focus:text-shadow-xs! focus:text-shadow-primary-600/80!"
        >
          ربما لاحقاً
        </Button>
      </div>
    </div>
  );
}
