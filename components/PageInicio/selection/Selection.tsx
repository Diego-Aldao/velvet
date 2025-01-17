import React from "react";
import ContainerSection from "@/components/containers/ContainerSection";
import SelectionGridContainer from "@/components/containers/PaginaInicio/SelectionGridContainer";
import SelectionGridCard, {
  SelectionGridCardDecorated,
  SelectionGridCardInfo,
  SelectionGridCardTitle,
} from "@/components/cards/PageInicio/SelectionGridCard";
import { ItemSelection } from "@/types/localTypes";

interface Props {
  listadoSelection: ItemSelection[];
}

export default function Selection({ listadoSelection }: Props) {
  return (
    <ContainerSection titulo="velvet selection">
      <SelectionGridContainer>
        {listadoSelection.map((item, index) => {
          switch (item.type) {
            case "SelectionGridCard":
              return (
                <SelectionGridCard
                  key={index}
                  destino={item.destino}
                  imagen={item.imagen}
                  tag={item.tag}
                  tagPosition={item.tagPosition}
                  gridPosition={item.gridPosition}
                />
              );
            case "SelectionGridCardInfo":
              return (
                <SelectionGridCardInfo
                  key={index}
                  destino={item.destino}
                  infoSM={item.infoSM || ""}
                  imagen={item.imagen}
                  tag={item.tag}
                  tagPosition={item.tagPosition}
                  gridPosition={item.gridPosition}
                />
              );
            case "SelectionGridCardTitle":
              return (
                <SelectionGridCardTitle
                  key={index}
                  destino={item.destino}
                  titulo={item.titulo || ""}
                  tag={item.tag}
                  tagPosition={item.tagPosition}
                  imagen={item.imagen}
                  gridPosition={item.gridPosition}
                />
              );
            case "SelectionGridCardDecorated":
              return (
                <SelectionGridCardDecorated
                  key={index}
                  destino={item.destino}
                  imagen={item.imagen}
                  gridPosition={item.gridPosition}
                />
              );
            default:
              return null;
          }
        })}
      </SelectionGridContainer>
    </ContainerSection>
  );
}
