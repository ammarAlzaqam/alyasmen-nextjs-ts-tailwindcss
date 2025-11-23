import linksList from "@/constants/navigationLinks";
import { cn } from "@/lib/utils";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

export default function Sidebar() {
  const [open, set] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  return (
    <>
      {/*//! open close button */}
      <button
        onClick={() => set(true)}
        className="md:hidden group cursor-pointer w-[50px] md:w-[61px] h-[50px] md:h-[61px] flex items-center justify-center rounded-full bg-accent-700/70 backdrop-blur-[17.43px]"
      >
        <img
          src="/assets/header/menu.svg"
          alt="logo-img"
        />
      </button>

      {/*//! Layout closer */}
      <div
        className={cn(
          "fixed z-50 top-0 right-0 h-dvh w-dvw max-w-[calc(2*dvw)] bg-primary-900/80 transition-all duration-300",
          !open &&
            "-translate-x-[100dvw] scale-0 opacity-0"
        )}
        onClick={() => set(false)}
      />

      {/*//! Sidebar closer */}
      <aside
        className={cn(
          "z-100 fixed top-0 right-0 h-dvh p-2 sm:p-5 bg-primary-500 w-[266px] sm:w-[400px] transition-all duration-300",
          !open && "translate-x-[266px] sm:translate-x-[400px]"
        )}
      >
        {/*//* Links */}
        <div className="z-200 pt-14 flex flex-col gap-3">
          {linksList.map(({ label, route, Icon }) => {
            const isActive =
              (pathname.includes(route) && route !== "/") || pathname === route;

            return (
              <button
                onClick={() => {
                  router.push(route);
                  set(false);
                }}
                key={label}
                className={cn(
                  "cursor-pointer flex items-center p-2 rounded-xl text-secondary-500 hover:bg-secondary-500 hover:text-primary-500!",
                  isActive && "bg-secondary-500 text-primary-500"
                )}
              >
                <Icon className="size-9 sm:size-12 shrink-0" />
                <h3 className="flex-1 text-center text-[30px] sm:text-body">
                  {label}
                </h3>
              </button>
            );
          })}
        </div>
      </aside>
    </>
  );
}
