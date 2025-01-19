import React from "react";
import Oferta from "@/components/PageInicio/Oferta";
import PageInicioMainContainer from "@/components/containers/PaginaInicio/PageInicioMainContainer";
import HeroHombres from "@/components/PageInicio/hero/HeroHombres";
import MarcasHombres from "@/components/PageInicio/marcas/MarcasHombres";
import SelectionHombre from "@/components/PageInicio/selection/SelectionHombre";

export default function PageInicio() {
  return (
    <PageInicioMainContainer>
      <HeroHombres />
      <Oferta />
      <MarcasHombres />
      <SelectionHombre />
    </PageInicioMainContainer>
  );
}
