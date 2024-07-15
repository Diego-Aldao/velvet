import { Navigation } from "@/types/fetchTypes";
import React from "react";
import ListItemSubCategoria from "./ListItemSubCategoria";
import ListadoSingleCategorias from "../ListadoSingleCategorias/ListadoSingleCategorias";
import filterCategoryByWebSize from "@/utils/filterCategoryByWebSize";
interface Props {
  mainCategoria: Navigation;
  listadoVisible: boolean;
}

export default function ListadoSubCategoria({
  mainCategoria,
  listadoVisible,
}: Props) {
  let subCategorias = filterCategoryByWebSize(
    mainCategoria.children,
    "webSmall"
  );
  subCategorias = subCategorias.filter(
    (categoria) => categoria.children.length >= 1
  );

  return (
    <ul
      className={`flex flex-col gap-4 px-2 mt-8 relative ${
        listadoVisible
          ? "visible opacity-100 top-0"
          : "invisible opacity-0 top-2"
      }`}
    >
      {subCategorias.map((subCategoria) => {
        return (
          <ListItemSubCategoria
            subCategoria={subCategoria}
            key={subCategoria.id}
          >
            <ListadoSingleCategorias
              subCategoria={subCategoria}
              display={subCategoria.display?.mobileDisplayLayout}
              displayChildren={subCategoria.display?.mobileTemplateName}
            />
          </ListItemSubCategoria>
        );
      })}
    </ul>
  );
}
