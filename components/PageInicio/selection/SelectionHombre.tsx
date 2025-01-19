import React from "react";
import imagenSelectionAnteojos from "@/assets/VelvetSelection/SelectionHombre/selectionAnteojos.webp";
import imagenSelectionSneakers from "@/assets/VelvetSelection/SelectionHombre/selectionZapatillas.webp";
import imagenSelectionHoodies from "@/assets/VelvetSelection/SelectionHombre/selectionHoodies.webp";
import imagenSelectionPlusSize from "@/assets/VelvetSelection/SelectionHombre/selectionPlusSize.webp";
import imagenSelectionCamisas from "@/assets/VelvetSelection/SelectionHombre/selectionCamisas.webp";
import imagenSelectionChaquetas from "@/assets/VelvetSelection/SelectionHombre/selectionChaquetas.webp";
import imagenSelectionbasicos from "@/assets/VelvetSelection/SelectionHombre/selectionBasicos.webp";
import Selection from "./Selection";
import { ItemSelection } from "@/types/localTypes";

const listadoSelectionHombre: ItemSelection[] = [
  {
    type: "SelectionGridCard",
    destino: "/productos/21508",
    imagen: imagenSelectionbasicos,
    tag: "básicos",
    tagPosition: "rightDeco",
    gridPosition: "sm:col-span-2 lg:col-span-1 lg:row-span-2",
  },
  {
    type: "SelectionGridCardInfo",
    destino: "/productos/6519",
    infoSM: "recién llegados",
    imagen: imagenSelectionAnteojos,
    tag: "anteojos",
    tagPosition: "midDecoVertical",
    gridPosition: "sm:col-span-2 lg:col-span-1 row-span-2 lg:row-span-4",
  },
  {
    type: "SelectionGridCard",
    destino: "/productos/5668",
    imagen: imagenSelectionHoodies,
    tag: "sudaderas",
    tagPosition: "rightDeco",
    gridPosition:
      "sm:col-span-2 lg:col-span-1 row-span-2 lg:col-start-3 lg:row-span-3",
    imagePosition: "object-[50%,0px]",
  },
  {
    type: "SelectionGridCard",
    destino: "/productos/4209",
    imagen: imagenSelectionSneakers,
    tag: "zapatillas",
    tagPosition: "rightDeco",
    gridPosition: "sm:col-span-2 lg:col-span-1 lg:col-start-2 lg:row-span-3",
  },
  {
    type: "SelectionGridCardTitle",
    destino: "/productos/3602",
    titulo: "Camisas",
    tag: "camisas",
    tagPosition: "midDeco",
    imagen: imagenSelectionCamisas,
    gridPosition:
      "col-span-2 lg:col-span-1 row-span-2 lg:col-start-1 lg:row-start-3 lg:row-span-5",
  },
  {
    type: "SelectionGridCard",
    destino: "/productos/3606",
    imagen: imagenSelectionChaquetas,
    tag: "chaquetas",
    tagPosition: "leftDeco",
    gridPosition:
      "col-span-2 lg:col-span-1 lg:col-start-3 lg:row-start-4 lg:row-span-2",
  },
  {
    type: "SelectionGridCardDecorated",
    destino: "/productos/25997",
    imagen: imagenSelectionPlusSize,
    gridPosition:
      "col-span-2 lg:col-start-3 lg:col-span-1 lg:row-start-6 lg:row-span-2 bg-secondary-black flex items-center justify-center flex-col gap-1",
    tag: "",
    tagPosition: "",
  },
];

export default function SelectionHombre() {
  return <Selection listadoSelection={listadoSelectionHombre} />;
}
