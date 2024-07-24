"use client";
import { Navigation } from "@/types/fetchTypes";
import React, { useEffect, useState } from "react";
import Dropdown from "./Dropdown/Dropdown";

interface Props {
  handleMouseEnter: (singleCategoria: Navigation[]) => void;
  categoria: Navigation;
  dropdownVisible: boolean;
}

export default function ItemNavDesktop({
  handleMouseEnter,
  categoria,
  dropdownVisible,
}: Props) {
  return (
    <li
      onMouseEnter={() => {
        handleMouseEnter(categoria.children);
      }}
      className={`py-1 px-2 xl:text-sm xl:px-4 hover:bg-primary cursor-pointer hover:text-main-black transition-colors capitalize font-medium line-clamp-1 text-xs rounded-full ${
        dropdownVisible
          ? "bg-primary text-main-black"
          : "bg-transparent text-main-white"
      }`}
    >
      {categoria.content.title}
    </li>
  );
}
