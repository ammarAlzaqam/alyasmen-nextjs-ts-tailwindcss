"use client";
import { useEffect } from "react";
import Aos from "aos";

export default function AosProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    Aos.init({
      duration: 1500,
      once: true,
    });
  }, []);

  return <>{children}</>;
}
