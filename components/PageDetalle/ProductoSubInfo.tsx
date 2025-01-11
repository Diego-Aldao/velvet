"use client";
import { Info } from "@/types/fetchTypes";
import React, { useState } from "react";
import SubInfoItem from "./SubInfoItem";
import parse from "html-react-parser";
import { LocalSubInfo } from "@/types/localTypes";

interface Props {
  descripcion: string;
  info: Info;
}
export default function ProductoSubInfo({ descripcion, info }: Props) {
  const initialSubInfo: LocalSubInfo = {
    nombre: "descripción",
    contenido: descripcion,
  };
  const [currentSubInfo, setCurrentSubInfo] =
    useState<LocalSubInfo>(initialSubInfo);

  const handleClick = (nombreItem: string) => {
    if (nombreItem === "descripción") {
      const newCurrentInfo = {
        nombre: "descripción",
        contenido: descripcion,
      };
      setCurrentSubInfo(newCurrentInfo);
    } else {
      const infoFiltrada = Object.entries(info).filter(
        (itemInfo) => itemInfo[0] === nombreItem
      )[0];
      const newCurrentInfo = {
        nombre: infoFiltrada[0],
        contenido: infoFiltrada[1],
      };
      setCurrentSubInfo(newCurrentInfo);
    }
  };

  return (
    <div className="subInfo flex flex-col gap-4">
      <div className="subinfo flex gap-2 w-full flex-wrap">
        <SubInfoItem
          nombreItem="descripción"
          contenido={descripcion}
          handleClick={handleClick}
          currentSubInfo={currentSubInfo}
        />
        {Object.entries(info).map((value, i) => (
          <SubInfoItem
            key={i}
            nombreItem={value[0]}
            contenido={value[1]}
            handleClick={handleClick}
            currentSubInfo={currentSubInfo}
          />
        ))}
      </div>
      <div className="sub-info-activo min-h-[150px]">
        {parse(currentSubInfo.contenido.replace(/.*?(<ul>)/, "$1"))}
      </div>
    </div>
  );
}
