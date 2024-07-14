"use client";
import { InitialFetch, Navigation } from "@/types/fetchTypes";
import React, { useState } from "react";
import ListadoMainCategorias from "./ListadoMainCategorias/ListadoMainCategorias";
import { NavButtonClick } from "@/components/buttons/NavButton";
import HeaderNavMobile from "./HeaderNavMobile";
import GetGenreNavigation from "@/services/GetGenreNavigation";
import getCategories from "@/services/getCategories";

interface Props {
  data: InitialFetch;
}

export default function NavMobile({ data }: Props) {
  const [menuVisible, setMenuVisible] = useState<boolean>(false);

  const handleClick = () => {
    setMenuVisible((menuVisible) => !menuVisible);
  };
  const dataGenero = GetGenreNavigation(data);
  const categorias = getCategories(dataGenero);

  return (
    <>
      <NavButtonClick
        handleClick={handleClick}
        icon="icon-[tabler--menu-deep] md:h-7 md:w-7"
        customStyles="lg:hidden w-[56px] !justify-start md:w-[100px]"
      />
      <div
        onClick={handleClick}
        className={`contenedor h-screen w-full fixed top-0 left-0 bg-main-black/95 lg:hidden transition-opacity ${
          menuVisible
            ? "visible opacity-100 z-50 delay-0"
            : "invisible opacity-0 -z-1 delay-200"
        }`}
      >
        <nav
          onClick={(e) => e.stopPropagation()}
          className={`nav-mobile absolute left-0 w-full bg-secondary-black p-4 pb-1 rounded-t-md pt-8 flex flex-col gap-4 transition-all ${
            menuVisible
              ? "bottom-0 opacity-100 delay-200"
              : "-bottom-4 opacity-0 delay-0"
          }`}
        >
          <HeaderNavMobile
            handleClick={handleClick}
            menuVisible={menuVisible}
          />
          <div className="listado-categorias h-[500px] overflow-scroll w-full">
            {categorias && <ListadoMainCategorias categorias={categorias} />}
          </div>
        </nav>
      </div>
    </>
  );
}
