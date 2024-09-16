import MainContent from "@/components/ChekoutFlow/Carrito/MainContent";
import LinksFlow from "@/components/ChekoutFlow/LinksFlow";
import ContainerChekoutFlow from "@/components/containers/ContainerChekoutFlow";

import React from "react";

export default function Carrito() {
  return (
    <ContainerChekoutFlow>
      <LinksFlow />
      <MainContent />
    </ContainerChekoutFlow>
  );
}
