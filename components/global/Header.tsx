"use client";

import Image from "next/image";
import NavigationLinks from "./NavigationLinks";
import { FaWhatsapp } from "react-icons/fa";
import Sidebar from "./Sidebar";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import GridDistortion from "../GridDistortion";
import Link from "next/link";

export default function Header() {
  const [isScroll, setIsScroll] = useState(false);
  useEffect(() => {
    const handelScroll = () => {
      setIsScroll(scrollY > 30);
    };
    handelScroll();
    addEventListener("scroll", handelScroll);
    return () => removeEventListener("scroll", handelScroll);
  }, []);
  return (
    <header
      className={cn(
        "z-30 fixed top-[37px] left-0 w-full duration-200 transition-all",
        isScroll &&
          "shadow-xl bg-primary-500/80 backdrop-blur-md py-1 -translate-y-[42px] md:-translate-y-[37px]"
      )}
    >
      <div className="main-container flex max-md:flex-row-reverse items-center justify-between">
        <Link href="/" className="z-20">
          <Image
            src="/assets/header/logo.png"
            alt="logo-img"
            width={100}
            height={60}
          />
        </Link>

        <NavigationLinks />

        <Sidebar />

        <Link href="https://wa.me/message/KFBIKLV33HYGF1" className="gradient-border max-md:hidden group cursor-pointer w-[50px] sm:w-[61px] h-[50px] sm:h-[61px] flex items-center justify-center rounded-full bg-[#EEE7DD3D] backdrop-blur-[17.43px]">
          <FaWhatsapp
            className={cn(
              "size-8 transition-all group-hover:scale-130 group-focus:text-primary-50",
              isScroll ? "text-primary-300" : "text-primary-50"
            )}
          />
        </Link>
      </div>
    </header>
  );
}
