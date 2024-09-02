import ContenedorImagen from "@/components/containers/ContenedorImagen";
import { Navigation } from "@/types/fetchTypes";
import Image from "next/image";
import Link from "next/link";
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
    <li className="single-categoria">
      <Link
        href={`/productos/${singleCategoria.link?.categoryId}`}
        className={`${display} ${singleCategoria.type}`}
      >
        <ContenedorImagen>
          <Image
            src={singleCategoria.content.mobileImageUrl || ""}
            alt=""
            width={0}
            height={0}
            sizes="100vw"
          />
        </ContenedorImagen>
        <span className={`${singleCategoria.style.mobileStyleType}`}>
          {singleCategoria.content.title}
        </span>
      </Link>
    </li>
  );
}
