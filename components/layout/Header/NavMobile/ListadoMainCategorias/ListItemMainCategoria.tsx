import { Navigation } from "@/types/fetchTypes";
import Image from "next/image";
import React, { useState } from "react";
import ListadoSubCategoria from "../ListadoSubCategorias/ListadoSubCategoria";

interface Props {
  categoria: Navigation;
}

export default function ListItemMainCategoria({ categoria }: Props) {
  const [subCategoriaVisible, setSubCategoriaVisible] =
    useState<boolean>(false);

  const noTitle = categoria.style.mobileStyleType === "noTitle";

  const handleClick = () => {
    setSubCategoriaVisible((subCategoriaVisible) => !subCategoriaVisible);
  };

  return (
    <li className="relative w-full">
      <div
        className="categoria-content flex items-center relative w-full"
        onClick={handleClick}
      >
        <span className="absolute left-4 uppercase font-nunito-sans text-main-black font-black z-[2] tracking-tight italic flex gap-2 items-center">
          {!noTitle && (
            <>
              <span>{categoria.content.title}</span>
              <span
                className={`icon-[tabler--chevron-down] transition-transform ${
                  subCategoriaVisible ? "rotate-180" : "rotate-0"
                }`}
              ></span>
            </>
          )}
        </span>
        <div
          className={`imagen w-full rounded-md overflow-hidden after:absolute relative after:inset-0 after:bg-main-black/15 border-2 transition-colors ${
            subCategoriaVisible ? "border-secondary" : "border-transparent"
          } `}
        >
          <Image
            src={categoria.content.mobileImageUrl || ""}
            alt=""
            width={0}
            height={0}
            sizes="100vw"
            className="sm:min-h-[100px] md:min-h-[112px]"
          />
        </div>
      </div>
      {subCategoriaVisible && (
        <ListadoSubCategoria
          mainCategoria={categoria}
          listadoVisible={subCategoriaVisible}
        />
      )}
    </li>
  );
}
