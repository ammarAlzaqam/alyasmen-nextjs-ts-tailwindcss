"use client";

import Image from "next/image";
import NavigationLinks from "./NavigationLinks";
import { FaWhatsapp } from "react-icons/fa";
import Sidebar from "./Sidebar";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export default function Header() {
  const [isScroll, setIsScroll] = useState(false);
  useEffect(() => {
    const handelScroll = () => {
      setIsScroll(scrollY > 60);
    };

    addEventListener("scroll", handelScroll);
    return () => removeEventListener("scroll", handelScroll);
  }, []);
  return (
    <header className={cn("z-20 fixed top-[37px] left-0 w-full duration-200 transition-all",
      isScroll && "bg-primary-900/70 backdrop-blur-md py-1 -translate-y-[37px]"
    )}>
      <div className="main-container flex max-md:flex-row-reverse items-center justify-between">
        <Image
          src="/assets/header/logo.png"
          alt="logo-img"
          width={100}
          height={60}
          className=""
        />

        <NavigationLinks />

        <Sidebar />

        <button className="gradient-border max-md:hidden group cursor-pointer w-[50px] sm:w-[61px] h-[50px] sm:h-[61px] flex items-center justify-center rounded-full bg-[#EEE7DD3D] backdrop-blur-[17.43px]">
          <FaWhatsapp className="size-8 text-primary-300 transition-all group-hover:scale-130 group-focus:text-primary-50" />
        </button>
      </div>
    </header>
  );
}
