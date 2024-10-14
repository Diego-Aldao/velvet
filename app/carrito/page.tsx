import MainContentCarrito from "@/components/ChekoutFlow/Carrito/MainContentCarrito";
import LinksFlow from "@/components/ChekoutFlow/LinksFlow";
import ContainerChekoutFlow from "@/components/containers/ContainerChekoutFlow";

import React from "react";

export default function Carrito() {
  return (
    <ContainerChekoutFlow>
      <LinksFlow />
      <MainContentCarrito />
    </ContainerChekoutFlow>
  );
}
