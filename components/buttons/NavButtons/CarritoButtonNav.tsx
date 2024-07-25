import React from "react";
import { IconButtonLink } from "../IconButton";

interface Props {
  customStyles?: string;
  customIconSize: string;
}

export default function FavoriteButtonNav({
  customStyles,
  customIconSize,
}: Props) {
  return (
    <IconButtonLink
      destino={"/carrito"}
      customIcon={`icon-[tabler--shopping-cart] ${customIconSize}`}
      customStyles={customStyles}
    />
  );
}
