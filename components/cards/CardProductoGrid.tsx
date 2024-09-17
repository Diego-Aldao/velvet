"use client";
import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";
import { Price } from "@/types/fetchTypes";
import ContenedorImagen from "../containers/ContenedorImagen";
import PrecioProducto from "../PrecioProducto";
import { LocalFilters } from "@/types/localTypes";
import { useInView } from "react-intersection-observer";
import AddFavoriteButton from "../buttons/AddFavoriteButton";

export function CardProductoGridFull({
  id,
  nombre,
  imgUrl,
  marca,
  precio,
  color,
  filtersForSimilars,
  secondaryImage,
}: Props) {
  const [secondaryImageVisible, setSecondaryImageVisible] =
    useState<boolean>(false);
  const [imageLoaded, setImageLoaded] = useState<boolean>(false);

  const handleHover = () => {
    setSecondaryImageVisible((secondaryImageVisible) => !secondaryImageVisible);
  };

  const [ref, inView] = useInView({
    threshold: 0,
  });

  return (
    <CardProductoGrid
      id={id}
      nombre={nombre}
      imgUrl={imgUrl}
      marca={marca}
      precio={precio}
      color={color}
      filtersForSimilars={filtersForSimilars}
      handleHover={handleHover}
    >
      <>
        <AddFavoriteButton
          id={id}
          nombre={nombre}
          imagen={imgUrl}
          color={color}
          precio={precio.current}
          marca={marca}
        />
        <ContenedorImagen customStyles="relative block bg-secondary-black min-h-[56vw] sm:min-h-[37vw] md:min-h-[27vw] lg:min-h-[25vw] xl:min-h-[20vw] 2xl:min-h-[22vw] !h-fit">
          {secondaryImageVisible && secondaryImage && (
            <span
              ref={ref}
              className={`absolute top-0 left-0 w-full h-full ${
                inView && imageLoaded
                  ? "opacity-100 visible scale-100"
                  : "invisible opacity-0 scale-110"
              } transition-all`}
            >
              <Image
                src={`https://${secondaryImage}`}
                alt={nombre}
                width={0}
                onLoad={() => setImageLoaded(true)}
                height={0}
                sizes="100vw"
                className="sm:hidden"
              />

              <Image
                src={`https://${secondaryImage}?$&wid=513&fit=constrain`}
                alt={nombre}
                width={0}
                onLoad={() => setImageLoaded(true)}
                height={0}
                sizes="100vw"
                className="hidden sm:inline-block"
              />
            </span>
          )}

          <Image
            src={`https://${imgUrl}`}
            alt={nombre}
            width={0}
            height={0}
            sizes="100vw"
            className="sm:hidden"
          />
          <Image
            src={`https://${imgUrl}?$&wid=513&fit=constrain`}
            alt={nombre}
            width={0}
            height={0}
            sizes="100vw"
            className="hidden sm:inline-block"
          />
        </ContenedorImagen>
        <span className="info flex flex-col gap-1">
          <span className="uppercase text-[10px] font-medium">{marca}</span>
          <span className="text-xs line-clamp-2 2xl:text-sm min-h-[32px] 2xl:min-h-[40px]">
            {nombre}
          </span>
          <PrecioProducto
            precio={precio}
            isSimple={true}
            customStyles="relative bottom-0 text-base"
          />
        </span>
      </>
    </CardProductoGrid>
  );
}

export function CardProductoGridSimple({
  id,
  nombre,
  imgUrl,
  marca,
  precio,
  color,
}: Props) {
  return (
    <CardProductoGrid
      id={id}
      nombre={nombre}
      imgUrl={imgUrl}
      marca={marca}
      precio={precio}
      color={color}
      filtersForSimilars={undefined}
    >
      <ContenedorImagen>
        <Image
          src={`https://${imgUrl}`}
          alt=""
          width={0}
          height={0}
          sizes="100vw"
        />
      </ContenedorImagen>
      <div className="info flex flex-col gap-1">
        <span className="text-xs text-main-white/75">{marca}</span>
        <PrecioProducto
          precio={precio}
          isSimple={true}
          customStyles="!text-sm"
        />
      </div>
    </CardProductoGrid>
  );
}

interface Props {
  id: number;
  nombre: string;
  imgUrl: string;
  marca: string;
  precio: Price;
  color: string;
  children?: React.ReactNode;
  filtersForSimilars: LocalFilters | undefined;
  secondaryImage?: string;
  handleHover?: () => void;
}

export default function CardProductoGrid({
  id,
  nombre,
  imgUrl,
  marca,
  precio,
  color,
  children,
  filtersForSimilars,
  handleHover,
}: Props) {
  const handleClick = () => {
    const currentProducto = {
      id: id,
      nombre: nombre,
      imagen: imgUrl,
      marca: marca,
      precio: precio,
      color: color,
    };
    localStorage.setItem("current", JSON.stringify(currentProducto));
    if (filtersForSimilars) {
      localStorage.setItem(
        "currentFilters",
        JSON.stringify(filtersForSimilars)
      );
    }
  };

  return (
    <Link
      href={`/detalle/${id}`}
      onClick={handleClick}
      className="producto rounded-md overflow-hidden flex flex-col gap-2 relative group sm:p-2 lg:p-3 bg-transparent sm:hover:bg-secondary-black transition-colors border border-transparent hover:border-main-white/10"
      key={id}
      onMouseEnter={handleHover}
      onMouseLeave={handleHover}
    >
      {children}
    </Link>
  );
}
