"use client";
import { InitialFetch } from "@/types/fetchTypes";
import { usePathname } from "next/navigation";

const GetGenreNavigation = (data: InitialFetch) => {
  const pathname = usePathname();
  if (!data) return;
  if (pathname.includes("/hombre")) {
    return data.navigation[0];
  } else {
    return data.navigation[1];
  }
};

export default GetGenreNavigation;
