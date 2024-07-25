import { Navigation } from "@/types/fetchTypes";
import React from "react";
import { ItemDropdown } from "./ItemDropdown";

interface Props {
  listadoDropdown: Navigation[];
  visible: boolean;
}

export default function Dropdown({ listadoDropdown, visible }: Props) {
  return (
    <ul
      className={`${
        visible
          ? "opacity-100 visible top-[44px]"
          : "opacity-0 invisible top-12"
      } absolute w-full h-fit  left-0 bg-secondary-black z-[2] transition-all rounded-md py-4 xl:py-8 grid grid-cols-[repeat(4,minmax(200px,auto))] xl:grid-cols-[repeat(4,minmax(250px,auto))] 2xl:grid-cols-[repeat(4,1fr)]`}
    >
      {listadoDropdown.map((item) => (
        <li
          key={item.id}
          className={`px-4 xl:px-8 border-r border-secondary last:border-transparent col-span-${item.display?.webLargeColumnSpan} ${item.style.webLargeStyleType}`}
        >
          <span className="uppercase font-nunito-sans font-bold text-sm">
            {item.content.title}
          </span>
          <ul
            className={`mt-4 grid gap-1 gap-x-4 ${item.display?.webLargeTemplateName} grid-cols-${item.display?.webLargeColumnSpan}`}
          >
            {item.children.map((itemLista) => (
              <ItemDropdown
                content={itemLista.content}
                key={itemLista.id}
                webLargeDisplay={item.display?.webLargeTemplateName}
                estilo={itemLista.style.webLargeStyleType}
                categoriaId={itemLista.link?.categoryId}
              />
            ))}
          </ul>
        </li>
      ))}
    </ul>
  );
}
