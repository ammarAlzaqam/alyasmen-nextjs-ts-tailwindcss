import linksList from "@/constants/navigationLinks";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export default function NavigationLinks() {
  const pathname = usePathname();
  return (
    <div className="max-md:hidden flex gap-5 rounded-[30px] bg-accent-700/70 backdrop-blur-[16px] px-4 py-2">
      {linksList.map(({ label, route }) => {
        const isActive =
          (pathname.includes(route) && route !== "/") || pathname === route;
        return (
          <Link
            className={cn(
              "rounded-[30px] px-4 py-2",
              isActive ? "bg-primary-500" : "hover:bg-accent-400"
            )}
            href={route}
            key={label}
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
