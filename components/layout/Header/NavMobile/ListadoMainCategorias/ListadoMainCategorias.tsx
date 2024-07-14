import { Navigation } from "@/types/fetchTypes";
import React from "react";
import ListItemMainCategoria from "./ListItemMainCategoria";
import filterCategoryByWebSize from "@/utils/filterCategoryByWebSize";

interface Props {
  categorias: Navigation[];
}

export default function ListadoMainCategorias({ categorias }: Props) {
  const categoriasMobile = filterCategoryByWebSize(categorias, "webSmall");
  return (
    <div className="grid sm:grid-cols-2 gap-4 max-w-[400px] mx-auto sm:max-w-[700px]">
      <ul className="flex flex-col gap-4 relative">
        {categoriasMobile.splice(0, 6).map((mainCategoria) => (
          <ListItemMainCategoria
            categoria={mainCategoria}
            key={mainCategoria.id}
          />
        ))}
      </ul>
      <ul className="flex flex-col gap-4 relative">
        {categoriasMobile.splice(0, 7).map((mainCategoria) => (
          <ListItemMainCategoria
            categoria={mainCategoria}
            key={mainCategoria.id}
          />
        ))}
      </ul>
    </div>
  );
}
