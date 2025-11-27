"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { TbArrowBackUp } from "react-icons/tb";

export default function ServiceHeader() {
  const [isScroll, setIsScroll] = useState(false);

  useEffect(() => {
    const handelScroll = () => {
      setIsScroll(scrollY > 40);
    };
    handelScroll();
    addEventListener("scroll", handelScroll);
    return () => removeEventListener("scroll", handelScroll);
  }, []);

  return (
    <div
      className={cn(
        "z-30 sticky top-0",
        isScroll && "bg-secondary-500/80 backdrop-blur-2xl py-2"
      )}
    >
      <div className="main-container flex justify-between items-center">
        <Image
          src="/assets/service/header/logo.png"
          alt="logo"
          width={101.1876449584961}
          height={62.94534683227539}
        />

        <Link href="/services" className="flex items-center gap-2 px-5 py-2 group">
          <h2 className="subtitle max-sm:hidden text-primary-500 font-[700] group-hover:opacity-60 focus-opacity-60">
            الرجوع إلى الخلف
          </h2>
          <TbArrowBackUp className="size-7 group-hover:opacity-60 focus-opacity-60" />
        </Link>
      </div>
    </div>
  );
}
