import { Content } from "@/types/fetchTypes";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Props {
  content: Content;
  webLargeDisplay: string | undefined;
  estilo: string | null;
  categoriaId: number | undefined | null;
}

export function ItemDropdown({
  content,
  webLargeDisplay,
  estilo,
  categoriaId,
}: Props) {
  return (
    <li>
      <Link
        href={`/productos/${categoriaId}`}
        className={`li-${webLargeDisplay || "itemListado"} ${estilo} `}
      >
        {content.webLargeImageUrl && (
          <div>
            <Image
              src={content.webLargeImageUrl}
              alt=""
              width={0}
              height={0}
              sizes="100vw"
            />
          </div>
        )}
        <span className="text-sm  font-light text-main-white">
          {content.title}
        </span>
      </Link>
    </li>
  );
}
