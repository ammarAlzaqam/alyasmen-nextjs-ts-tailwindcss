"use client";

import ShinyText from "@/components/shared/ShinyText";
import { Button } from "@/components/ui/button";

export default function GoServicesButton() {
  return (
    <div className="flex justify-center">
      <Button onClick={() => scrollBy({top: innerHeight, behavior: "smooth"})} className="animate__animated animate__flipInX btn w-full max-w-[512px]">
        <ShinyText text="الإطلاع على الخدمات" />
      </Button>
    </div>
  );
}
