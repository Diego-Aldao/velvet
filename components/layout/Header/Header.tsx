import React from "react";
import NavDesktop from "./NavDesktop/NavDesktop";
import fetchData from "@/services/fetchData";
import NavMobile from "./NavMobile/NavMobile";
import GeneroSelector from "./GeneroSelector";
import { InitialFetch } from "@/types/fetchTypes";

export default async function Header() {
  const data = await fetchData<InitialFetch>(
    "https://asos2.p.rapidapi.com/categories/list?country=ES&lang=es-ES"
  );
  return (
    <header className="w-full px-4 md:px-10 lg:px-12 py-4 xl:pt-8 gap-4 flex flex-col items-center justify-between absolute top-0 z-50 left-0">
      <nav className="flex items-center w-full justify-between lg:justify-center lg:gap-4">
        {data && <NavMobile data={data} />}
        <GeneroSelector />
        <div className="logo lg:self-center lg:flex-1 flex items-center justify-center">
          <span className="font-nunito-sans font-[1000] uppercase text-2xl md:text-3xl xl:text-4xl italic text-primary">
            Velvet
          </span>
        </div>
        <div className="flex items-center justify-end w-fit lg:gap-4 lg:w-[211px] gap-2">
          <span className="icon-[tabler--heart] w-7 h-7 hidden md:inline-block"></span>
          <span className="icon-[tabler--shopping-cart] w-6 h-6 md:w-7 md:h-7"></span>
          <span className="icon-[tabler--user] w-6 h-6  md:w-7 md:h-7"></span>
        </div>
      </nav>
      {data && <NavDesktop data={data} />}
    </header>
  );
}
