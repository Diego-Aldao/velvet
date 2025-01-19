import React from "react";
import imagenSelectionAnteojos from "@/assets/VelvetSelection/selectionAnteojos.webp";
import imagenSelectionAbrigos from "@/assets/VelvetSelection/SelectionAbrigos.webp";
import imagenSelectionCardigans from "@/assets/VelvetSelection/selectionCardigans.webp";
import imagenSelectionPlusSize from "@/assets/VelvetSelection/selectionPlusSize.webp";
import imagenSelectionAccesorios from "@/assets/VelvetSelection/selectionCollares.webp";
import imagenSelectionBlusas from "@/assets/VelvetSelection/selectionBlusas.webp";
import imagenSelectionVestidosFiesta from "@/assets/VelvetSelection/selectionVestidosFiesta.webp";
import Selection from "./Selection";
import { ItemSelection } from "@/types/localTypes";

const listadoSelectionMujer: ItemSelection[] = [
  {
    type: "SelectionGridCard",
    destino: "/productos/11057",
    imagen: imagenSelectionVestidosFiesta,
    tag: "vestidos de fiesta",
    tagPosition: "rightDeco",
    gridPosition: "sm:col-span-2 lg:col-span-1 lg:row-span-2",
  },
  {
    type: "SelectionGridCardInfo",
    destino: "/productos/4545",
    infoSM: "recién llegados",
    imagen: imagenSelectionAnteojos,
    tag: "anteojos",
    tagPosition: "midDecoVertical",
    gridPosition: "sm:col-span-2 lg:col-span-1 row-span-2 lg:row-span-4",
  },
  {
    type: "SelectionGridCard",
    destino: "/productos/2637",
    imagen: imagenSelectionCardigans,
    tag: "cárdigans",
    tagPosition: "rightDeco",
    gridPosition:
      "sm:col-span-2 lg:col-span-1 row-span-2 lg:col-start-3 lg:row-span-3",
  },
  {
    type: "SelectionGridCard",
    destino: "/productos/2641",
    imagen: imagenSelectionAbrigos,
    tag: "abrigos",
    tagPosition: "rightDeco",
    gridPosition: "sm:col-span-2 lg:col-span-1 lg:col-start-2 lg:row-span-3",
    imagePosition: "lg:object-[50%,-40px]",
  },
  {
    type: "SelectionGridCardTitle",
    destino: "/productos/11408",
    titulo: "accesorios",
    tag: "collares",
    tagPosition: "midDeco",
    imagen: imagenSelectionAccesorios,
    gridPosition:
      "col-span-2 lg:col-span-1 row-span-2 lg:col-start-1 lg:row-start-3 lg:row-span-5",
  },
  {
    type: "SelectionGridCard",
    destino: "/productos/15199",
    imagen: imagenSelectionBlusas,
    tag: "blusas",
    tagPosition: "leftDeco",
    gridPosition:
      "col-span-2 lg:col-span-1 lg:col-start-3 lg:row-start-4 lg:row-span-2",
    imagePosition: "object-[50%,100%]",
  },
  {
    type: "SelectionGridCardDecorated",
    destino: "/productos/9577",
    imagen: imagenSelectionPlusSize,
    gridPosition:
      "col-span-2 lg:col-start-3 lg:col-span-1 lg:row-start-6 lg:row-span-2 bg-secondary-black flex items-center justify-center flex-col gap-1",
    tag: "",
    tagPosition: "",
  },
];

export default function SelectionMujer() {
  return <Selection listadoSelection={listadoSelectionMujer} />;
}
