"use client";
import { Navigation } from "@/types/fetchTypes";
import React, { useState } from "react";
import Dropdown from "./Dropdown/Dropdown";

interface Props {
  categorias: Navigation[];
}

export default function NavDesktop({ categorias }: Props) {
  const [currentDropdown, setCurrentDropdown] = useState<Navigation[]>();
  const [dropdownVisible, setDropdownVisible] = useState<boolean>(false);

  const handleMouseEnter = async (categoria: Navigation[]) => {
    const categoriaFiltrada = categoria.filter(
      (item) => !item.channelExclusions.includes("webLarge")
    );
    await new Promise((resolve) => setTimeout(resolve, 200));

    setCurrentDropdown(categoriaFiltrada);
    setDropdownVisible(true);
  };

  const handleMouseLeave = () => {
    setDropdownVisible(false);
  };

  return (
    <nav className="w-full hidden lg:block max-w-[1440px]">
      <ul
        className="flex gap-1 items-center rounded-md py-2 justify-between relative"
        onMouseLeave={handleMouseLeave}
      >
        {categorias.map((categoria) => {
          if (!categoria.channelExclusions.includes("webLarge")) {
            return (
              <li
                onMouseEnter={() => {
                  handleMouseEnter(categoria.children);
                }}
                key={categoria.id}
                className="py-1 px-2 xl:text-sm xl:px-4 hover:bg-primary hover:text-main-black capitalize  line-clamp-1 text-xs rounded-full "
              >
                {categoria.content.title}
              </li>
            );
          }
        })}
        {currentDropdown && (
          <Dropdown
            listadoDropdown={currentDropdown}
            visible={dropdownVisible}
          />
        )}
      </ul>
    </nav>
  );
}
