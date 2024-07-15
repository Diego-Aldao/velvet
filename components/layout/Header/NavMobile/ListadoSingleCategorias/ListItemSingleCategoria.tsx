import { Navigation } from "@/types/fetchTypes";
import Image from "next/image";
import React from "react";

interface Props {
  singleCategoria: Navigation;
  display: string | undefined;
}

export default function ListItemSingleCategoria({
  singleCategoria,
  display,
}: Props) {
  return (
    <li className={`${display} ${singleCategoria.type} single-categoria`}>
      <div className="imagen rounded-md overflow-hidden">
        <Image
          src={singleCategoria.content.mobileImageUrl || ""}
          alt=""
          width={0}
          height={0}
          sizes="100vw"
        />
      </div>
      <span className={`${singleCategoria.style.mobileStyleType}`}>
        {singleCategoria.content.title}
      </span>
    </li>
  );
}
