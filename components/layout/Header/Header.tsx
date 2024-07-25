import React from "react";
import NavDesktop from "./NavDesktop/NavDesktop";
import fetchData from "@/services/fetchData";
import NavMobile from "./NavMobile/NavMobile";
import GeneroSelector from "./GeneroSelector";
import { InitialFetch } from "@/types/fetchTypes";
import FavoriteButtonNav from "@/components/buttons/NavButtons/FavoriteButtonNav";
import CarritoButtonNav from "@/components/buttons/NavButtons/CarritoButtonNav";
import { IconButtonLink } from "@/components/buttons/IconButton";
import Logo from "../Logo";
import { BASE_URL_CATEGORIAS } from "@/constants";

export default async function Header() {
  const data = await fetchData<InitialFetch>(BASE_URL_CATEGORIAS);
  return (
    <header className="w-full px-4 md:px-10 lg:px-12 py-4 xl:pt-8 gap-4 flex flex-col items-center justify-between absolute top-0 z-50 left-0">
      <nav className="flex items-center w-full justify-between lg:justify-center lg:gap-4">
        {data && <NavMobile data={data} />}
        <GeneroSelector />
        <Logo customStyles="lg:self-center lg:flex-1" />
        <div className="flex items-center justify-end w-fit lg:gap-4 lg:w-[211px] gap-2">
          <FavoriteButtonNav
            customIconSize="w-6 h-6 lg:w-7 lg:h-7"
            customStyles="hidden md:flex"
          />
          <CarritoButtonNav customIconSize="w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7" />
          <IconButtonLink
            destino="/perfil"
            customIcon="icon-[tabler--user] w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7"
          />
        </div>
      </nav>
      {data && <NavDesktop data={data} />}
    </header>
  );
}
