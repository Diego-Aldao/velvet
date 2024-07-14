import { Navigation } from "@/types/fetchTypes";
import React from "react";
import ListItemSingleCategoria from "./ListItemSingleCategoria";
import filterCategoryByWebSize from "@/utils/filterCategoryByWebSize";
import CarouselSingleCategorias from "./CarouselSingleCategorias";

interface Props {
  subCategoria: Navigation;
  display: string | undefined;
  displayChildren: string | undefined;
}

export default function ListadoSingleCategorias({
  subCategoria,
  display,
  displayChildren,
}: Props) {
  const singleCategories = filterCategoryByWebSize(
    subCategoria.children,
    "webSmall"
  );
  return (
    <>
      {display === "carousel" ? (
        <CarouselSingleCategorias
          singleCategorias={singleCategories}
          displayChildren={displayChildren}
        />
      ) : (
        <ul className="flex flex-col gap-2">
          {singleCategories.map((singleCategoria) => (
            <ListItemSingleCategoria
              singleCategoria={singleCategoria}
              key={singleCategoria.id}
              display={displayChildren}
            />
          ))}
        </ul>
      )}
    </>
  );
}
