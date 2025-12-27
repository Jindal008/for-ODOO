"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import UserProfile from "./UserProfile";

export default function TopMenu() {
  const pathname = usePathname();

  const menus = [
    { name: "Dashboard", path: "/" },
    { name: "Maintenance", path: "/maintenance" },
    // { name: "Calendar", path: "/maintenance/calendar" },
    { name: "Equipment", path: "/equipment" },
    { name: "Work-Center", path: "/work-center"},
    { name: "Teams", path: "/teams" },
  ];

  return (
    <div className="bg-white border-b px-6 py-3 flex justify-between items-center">
      <div className="flex gap-6 text-sm font-medium">
        {menus.map((menu) => {
          const isActive =
            menu.path === "/"
              ? pathname === "/"
              : pathname.startsWith(menu.path);

          return (
           <Link
              key={menu.name}
              href={menu.path}
              className={`pb-1 transition ${
                isActive
                  ? "text-blue-600 font-semibold border-b-2 border-blue-600"
                  : "text-gray-600 hover:text-blue-600"
              }`}
            >
              {menu.name}
            </Link>
          );
        })}
      </div>

      <UserProfile />
    </div>
  );
}
