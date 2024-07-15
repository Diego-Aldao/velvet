import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";

interface PropsGridSlideHorizontal
  extends Pick<Props, "imagenUrl" | "destino" | "nombreDestino"> {
  ubicacionGrid: string;
}
export function GridSlideHorizontal({
  imagenUrl,
  destino,
  nombreDestino,
  ubicacionGrid,
}: PropsGridSlideHorizontal) {
  return (
    <GridSlideContent
      imagenUrl={imagenUrl}
      ubicacionGrid={ubicacionGrid}
      nombreDestino={nombreDestino}
      destino={destino}
    ></GridSlideContent>
  );
}

interface PropsGridSlideVertical
  extends Pick<Props, "imagenUrl" | "destino" | "nombreDestino"> {}
export function GridSlideVertical({
  imagenUrl,
  destino,
  nombreDestino,
}: PropsGridSlideVertical) {
  return (
    <GridSlideContent
      imagenUrl={imagenUrl}
      ubicacionGrid="row-span-2 row-start-1 col-start-2 sm:col-start-6 sm:row-span-3 sm:row-start-1 sm:col-span-2"
      nombreDestino={nombreDestino}
      destino={destino}
    ></GridSlideContent>
  );
}

interface PropsGridSlideMainContent
  extends Pick<Props, "imagenUrl" | "destino" | "nombreDestino"> {
  titulo: string;
}
export function GridSlideMainContent({
  titulo,
  imagenUrl,
  destino,
  nombreDestino,
}: PropsGridSlideMainContent) {
  return (
    <GridSlideContent
      imagenUrl={imagenUrl}
      imagenStyles="relative after:absolute after:inset-0 after:bg-gradient-to-r after:from-main-black/50 after:to-transparent"
      destino={destino}
      nombreDestino={nombreDestino}
      ubicacionGrid="row-start-3 col col-span-2 sm:col-span-5 sm:row-start-1 sm:row-span-3 sm:col-start-1"
    >
      <span className="text-3xl max-w-[150px] top-2 left-2 lg:left-8 lg:top-8  sm:text-5xl absolute sm:max-w-[350px] font-bold uppercase italic tracking-tighter lg:text-7xl lg:max-w-[440px] 2xl:text-8xl xl:max-w-[550px] z-[2]">
        {titulo}
      </span>
    </GridSlideContent>
  );
}

interface Props {
  children?: React.ReactNode;
  ubicacionGrid: string;
  nombreDestino: string;
  destino: string;
  imagenUrl: StaticImageData;
  imagenStyles?: string;
}

export default function GridSlideContent({
  children,
  ubicacionGrid,
  destino,
  nombreDestino,
  imagenUrl,
  imagenStyles,
}: Props) {
  return (
    <div className={`relative rounded-md overflow-hidden ${ubicacionGrid}`}>
      {children}
      <div className={`w-full h-full ${imagenStyles}`}>
        <Image src={imagenUrl} alt="" width={0} height={0} sizes="100vw" />
      </div>
      <div className="contenedor-button bg-transparent p-0 absolute bottom-2 right-2 sm:bg-main-black sm:bottom-0 sm:right-0 sm:p-3 sm:py-1 sm:rounded-tl-xl lg:px-6 lg:py-2">
        <div className="deco-top deco overflow-hidden deco-bottom absolute bg-transparent -top-10 h-10 w-10 right-0"></div>
        <div className="deco-left deco overflow-hidden deco-bottom absolute bg-transparent bottom-0 h-10 w-10 -left-10"></div>
        <Link
          href={destino}
          className=" flex items-center gap-1 first-letter:uppercase bg-primary sm:bg-transparent border border-transparent sm:border-primary sm:text-primary  py-1 px-2 text-xs text-main-black rounded-full  font-semibold lg:px-4"
        >
          <span className="first-letter:uppercase lg:text-sm">
            {nombreDestino}
          </span>
          <span className="icon-[tabler--arrow-narrow-right]"></span>
        </Link>
      </div>
    </div>
  );
}
