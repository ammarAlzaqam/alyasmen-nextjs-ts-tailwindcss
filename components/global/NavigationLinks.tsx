import linksList from "@/constants/navigationLinks";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export default function NavigationLinks() {
  const pathname = usePathname();
  return (
    <div className="gradient-border max-md:hidden flex gap-5 rounded-[30px] bg-[#EEE7DD3D] backdrop-blur-[16px] px-4 py-2">
      {linksList.map(({ label, route }) => {
        const isActive =
          (pathname.includes(route) && route !== "/") || pathname === route;
        return isActive ? (
          <button
            className={cn(
              "cursor-pointer rounded-[30px] px-4 py-2",
              label !== "من نحن" && "bg-primary-500"
            )}
            key={label}
            onClick={() => {
              if (label === "من نحن" && pathname === "/") {
                scrollTo({ left: 0, top: innerHeight, behavior: "smooth" });
              } else if (label === "من نحن" && pathname !== "/") {
                setTimeout(
                  () =>
                    scrollTo({ left: 0, top: innerHeight, behavior: "smooth" }),
                  500
                );
              } else {
                scrollTo({ left: 0, top: 0, behavior: "smooth" });
              }
            }}
          >
            <h3 className="text-[24px] text-primary-50 font-link font-[400] leading-[100%]">
              {label}
            </h3>
          </button>
        ) : (
          <Link
            className={cn(
              "rounded-[30px] px-4 py-2",
              isActive ? "bg-primary-500" : "hover:bg-accent-400"
            )}
            href={route}
            key={label}
            onClick={() => {
              if (label === "من نحن" && pathname === "/") {
                scrollTo({ left: 0, top: innerHeight, behavior: "smooth" });
              }
              if (label === "من نحن" && pathname !== "/") {
                setTimeout(
                  () =>
                    scrollTo({ left: 0, top: innerHeight, behavior: "smooth" }),
                  500
                );
              }
            }}
          >
            <h3 className="text-[24px] text-primary-50 font-link font-[400] leading-[100%]">
              {label}
            </h3>
          </Link>
        );
      })}
    </div>
  );
}
