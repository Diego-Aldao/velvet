import React from "react";
import imagenDiscoverLentes from "@/assets/velvetDiscover/discoverLentes.webp";
import imagenDiscoverJeans from "@/assets/velvetDiscover/discoverJeans.webp";
import imagenDiscoverSudaderas from "@/assets/velvetDiscover/discoverSudaderas.webp";
import imagenDiscoverMiniJeans from "@/assets/velvetDiscover/discoverMiniJeans.webp";
import imagenDiscoverPlusSize from "@/assets/velvetDiscover/discoverPlusSize.webp";
import imagenDiscoverAccesorios from "@/assets/velvetDiscover/discoverAccesorios.webp";
import imagenDiscoverBotas from "@/assets/velvetDiscover/discoverBotas.webp";
import imagenDiscoverVestidosFiesta from "@/assets/velvetDiscover/discoverVestidosFiesta.webp";
import ContainerSection from "@/components/containers/ContainerSection";
import SelectionGridContainer from "@/components/containers/PaginaInicio/SelectionGridContainer";
import SelectionGridCard, {
  SelectionGridCardDecorated,
  SelectionGridCardInfo,
  SelectionGridCardMiniImage,
  SelectionGridCardTitle,
} from "@/components/cards/PageInicio/SelectionGridCard";

export default function Selection() {
  return (
    <ContainerSection titulo="velvet selection">
      <SelectionGridContainer>
        <SelectionGridCard
          destino="/productos/11057"
          imagen={imagenDiscoverVestidosFiesta}
          tag="vestidos de fiesta"
          gridPosition="sm:col-span-2 lg:col-span-1 lg:row-span-2"
        />
        <SelectionGridCardInfo
          destino="/productos/4545"
          infoSM="recien llegados"
          infoLG="para ti"
          imagen={imagenDiscoverLentes}
          tag="lentes"
          gridPosition="sm:col-span-2 lg:col-span-1 row-span-2 lg:row-span-4"
        />
        <SelectionGridCard
          destino="/productos/11321"
          imagen={imagenDiscoverSudaderas}
          tag="sudaderas"
          gridPosition="sm:col-span-2 lg:col-span-1 row-span-2 lg:col-start-3 lg:row-span-3"
          imagePosition="lg:object-[50%,-80px]"
        />
        <SelectionGridCardMiniImage
          destino="/productos/3630"
          miniImage={imagenDiscoverMiniJeans}
          imagen={imagenDiscoverJeans}
          tag="jeans"
          gridPosition="sm:col-span-2 lg:col-span-1 lg:col-start-2 lg:row-span-3"
        />
        <SelectionGridCardTitle
          destino="/productos/11408"
          titulo="accesorios"
          tag="collares"
          imagen={imagenDiscoverAccesorios}
          gridPosition="col-span-2 lg:col-span-1 row-span-2 lg:col-start-1 lg:row-start-3 lg:row-span-5"
        />
        <SelectionGridCard
          destino="/productos/9455"
          imagen={imagenDiscoverBotas}
          tag="botas"
          gridPosition="col-span-2 lg:col-span-1 lg:col-start-3 lg:row-start-4 lg:row-span-2"
          imagePosition="object-[50%,100%]"
        />
        <SelectionGridCardDecorated
          destino="/productos/9577"
          imagen={imagenDiscoverPlusSize}
          gridPosition="col-span-2 lg:col-start-3 lg:col-span-1 lg:row-start-6 lg:row-span-2 bg-secondary-black flex items-center justify-center flex-col gap-1"
        />
      </SelectionGridContainer>
    </ContainerSection>
  );
}
