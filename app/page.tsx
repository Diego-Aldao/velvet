import React from "react";
import Oferta from "@/components/PageInicio/Oferta";
import PageInicioMainContainer from "@/components/containers/PaginaInicio/PageInicioMainContainer";
import MarcasMujeres from "@/components/PageInicio/marcas/MarcasMujeres";
import SelectionMujer from "@/components/PageInicio/selection/SelectionMujer";
import HeroMujeres from "@/components/PageInicio/hero/HeroMujeres";

export default function PageInicio() {
  return (
    <PageInicioMainContainer>
      <HeroMujeres />
      <Oferta />
      <MarcasMujeres />
      <SelectionMujer />
    </PageInicioMainContainer>
  );
}
