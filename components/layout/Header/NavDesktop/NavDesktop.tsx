"use client";
import { InitialFetch, Navigation } from "@/types/fetchTypes";
import React, { useState } from "react";
import Dropdown from "./Dropdown/Dropdown";
import GetGenreNavigation from "@/services/GetGenreNavigation";
import getCategories from "@/services/getCategories";
import ItemNav from "./ItemNavDesktop";
import ItemNavDesktop from "./ItemNavDesktop";
import filterByChannelExclusions from "@/utils/filterByChannelExclussions";

interface Props {
  data: InitialFetch;
}

export default function NavDesktop({ data }: Props) {
  const dataGenero = GetGenreNavigation(data);
  const categorias = getCategories(dataGenero);
  const categoriasFiltradas = filterByChannelExclusions(categorias, "webLarge");

  const [currentDropdown, setCurrentDropdown] = useState<Navigation[]>([]);
  const [dropdownVisible, setDropdownVisible] = useState<boolean>(false);

  const handleMouseEnter = (categoria: Navigation[]) => {
    setCurrentDropdown(categoria);
    setDropdownVisible(true);
  };

  const handleMouseLeave = () => {
    setDropdownVisible(false);
    setCurrentDropdown([]);
  };

  return (
    <nav className="w-full hidden lg:block max-w-[1440px]">
      {categoriasFiltradas && (
        <ul
          className="flex gap-1 items-center rounded-md py-2 justify-between relative"
          onMouseLeave={handleMouseLeave}
        >
          {categoriasFiltradas.map((categoria) => (
            <ItemNavDesktop
              handleMouseEnter={handleMouseEnter}
              categoria={categoria}
              key={categoria.id}
              dropdownVisible={
                currentDropdown[0]?.id === categoria.children[0]?.id
              }
            />
          ))}
          {currentDropdown && (
            <Dropdown
              listadoDropdown={currentDropdown}
              visible={dropdownVisible}
            />
          )}
        </ul>
      )}
    </nav>
  );
}
