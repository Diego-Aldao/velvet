import React from "react";
import NavDesktop from "./NavDesktop/NavDesktop";
import fetchData from "@/services/fetchData";
import NavMobile from "./NavMobile/NavMobile";
import GeneroSelector from "./GeneroSelector";
import { InitialFetch } from "@/types/fetchTypes";
import { IconButtonLink } from "@/components/buttons/IconButton";
import Logo from "../Logo";
import { BASE_URL_CATEGORIAS } from "@/constants";
import UserInteractionButtonNav from "@/components/buttons/NavButtons/UserInteractionButtonNav";
import BarraBusqueda from "@/components/BarraBusqueda";

export default async function Header() {
  const data = await fetchData<InitialFetch>(BASE_URL_CATEGORIAS);
  return (
    <header className="w-full px-4 md:px-10 lg:px-12 py-4 xl:pt-8 gap-4 flex flex-col items-center justify-between absolute top-0 z-50 left-0">
      <nav className="flex items-center w-full justify-between lg:justify-center lg:gap-4">
        {data && <NavMobile data={data} />}
        <GeneroSelector />
        <Logo customStyles="lg:self-center lg:flex-1" />
        <div className="flex items-center justify-end w-fit lg:gap-4 lg:w-[211px] gap-2">
          <UserInteractionButtonNav nombre="favoritos" />
          <UserInteractionButtonNav nombre="carrito" />
          <IconButtonLink
            destino="/perfil"
            customIcon="icon-[tabler--user] w-6 h-6 lg:w-7 lg:h-7"
            customStyles="hidden md:flex"
          />
        </div>
      </nav>
      {data && <NavDesktop data={data} />}
      <BarraBusqueda customStyles="max-w-[500px] lg:max-w-[600px] xl:max-w-[750px] mx-auto" />
    </header>
  );
}
