import Image from "next/image";
import React from "react";
import imagenMarcaHD from "@/assets/PageInicioTienda/pageInicioImageHD.webp";
import imagenMarcaSD from "@/assets/PageInicioTienda/pageInicioTiendaSM.webp";
import Link from "next/link";
import { ContainerSectionFullWidthNoHeader } from "../containers/ContainerSection";

export default function Tienda() {
  return (
    <ContainerSectionFullWidthNoHeader>
      <Link
        href="/productos/28477"
        className="imagen w-full rounded-md overflow-hidden max-w-[500px] mx-auto md:max-w-full"
      >
        <Image
          src={imagenMarcaSD}
          alt=""
          width={0}
          height={0}
          sizes="100vw"
          className="md:hidden"
        />
        <Image
          src={imagenMarcaHD}
          alt=""
          width={0}
          height={0}
          sizes="100vw"
          className="hidden md:block"
        />
      </Link>
    </ContainerSectionFullWidthNoHeader>
  );
}
