import { Content } from "@/types/fetchTypes";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Props {
  content: Content;
  webLargeDisplay: string | undefined;
  estilo: string | null;
  categoriaId: number | undefined | null;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

export function ItemDropdown({
  content,
  webLargeDisplay,
  estilo,
  categoriaId,
  setVisible,
}: Props) {
  return (
    <li
      onClick={() => {
        setVisible((visible) => !visible);
      }}
    >
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
        <span className="text-xs xl:text-sm font-light text-main-white">
          {content.title}
        </span>
      </Link>
    </li>
  );
}
