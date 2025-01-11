import React from "react";
import Hero from "@/components/PageInicio/hero/Hero";
import Oferta from "@/components/PageInicio/Oferta";
import Selection from "@/components/PageInicio/selection/Selection";
import Tienda from "@/components/PageInicio/Tienda";
import PageInicioMainContainer from "@/components/containers/PaginaInicio/PageInicioMainContainer";

export default function PageInicio() {
  return (
    <PageInicioMainContainer>
      <Hero />
      <Oferta />
      <Tienda />
      <Selection />
    </PageInicioMainContainer>
  );
}
