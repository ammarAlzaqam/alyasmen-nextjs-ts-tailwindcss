"use client";

import React, { useState } from "react";
import {
  useTransition,
  useSpring,
  useChain,
  config,
  animated,
  useSpringRef,
} from "@react-spring/web";

import { CiGrid2H } from "react-icons/ci";
import { IoGridOutline } from "react-icons/io5";

import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

export default function Popup() {
  const [open, set] = useState(false);
  const [grid, setGrid] = useState(true);

  const springApi = useSpringRef();
  const { size, ...rest } = useSpring({
    ref: springApi,
    config: config.stiff,
    from: { size: "0%", background: "transparent" },
    to: {
      size: open ? "100%" : "0%",
      background: open ? "var(--color-primary-50)" : "transparent",
    },
  });

  const transApi = useSpringRef();
  const transition = useTransition(
    open ? Array.from({ length: 99 }, (_, i) => i) : [],
    {
      ref: transApi,
      trail: 400 / Array.from({ length: 96 }, (_, i) => i).length,
      from: { opacity: 0, scale: 0 },
      enter: { opacity: 1, scale: 1 },
      leave: { opacity: 0, scale: 0 },
    }
  );

  // This will orchestrate the two animations above, comment the last arg and it creates a sequence
  useChain(open ? [springApi, transApi] : [transApi, springApi], [
    0,
    open ? 0.1 : 0.6,
  ]);

  return (
    <div className="w-full flex justify-center">
      {/*//! Trigger */}
      <Button
        onClick={() => set(true)}
        className="z-15 text-[16px] sm:text-[20px] rounded-[30px] py-5 px-10 bg-primary-600 hover:bg-primary-700! cursor-pointer focus:bg-secondary-300! focus:text-primary-500! focus:text-shadow-xs! focus:text-shadow-primary-600/80!"
      >
        المزيد
      </Button>

      <animated.div
        style={{ ...rest, width: size, height: size }}
        className={cn(
          "fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-dvh z-50 w-full overflow-y-auto overflow-x-hidden grid gap-3 p-2",
          grid
            ? "grid-cols-2 md:grid-cols-3 xl:grid-cols-4"
            : "grid-cols-1 md:grid-cols-2",
          !open && "p-0 overflow-hidden"
        )}
        onClick={() => set((open) => !open)}
      >
        {/*//! Popup header (title, grid button) */}
        <div
          className={cn(
            "col-span-full flex justify-between items-center transition-all duration-200",
            !open && "max-h-0 max-w-0 opacity-0 scale-0"
          )}
        >
          <h1 className="text-heading2 md:text-[60px] text-primary-500">
            اعملنا
          </h1>
          <button
            onClick={(e) => {
              e.stopPropagation();
              setGrid((prev) => !prev);
            }}
            className="size-8 md:size-10 relative"
          >
            <CiGrid2H
              data-state={grid}
              className="animate-open_close absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-7 md:size-9 text-primary-600"
            />
            <IoGridOutline
              data-state={!grid}
              className="animate-open_close absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-7 md:size-9 text-primary-600"
            />
          </button>
        </div>
        {transition((style, item) => (
          <animated.div
            key={item}
            className="aspect-square"
            style={{
              ...style,
              background: `url(/projects/${
                item + 1
              }.jpg) center/cover no-repeat`,
            }}
          />
        ))}
      </animated.div>
    </div>
  );
}
