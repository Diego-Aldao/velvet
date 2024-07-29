"use client";
import Image from "next/image";
import React from "react";
import imagenTiendaUnoMobile from "@/assets/PageInicioTienda/ImagenTiendaUnoMobile.webp";
import imagenTiendaUnoDesktop from "@/assets/PageInicioTienda/ImagenTiendaUnoDesktop.webp";
import imagenTiendaDosMobile from "@/assets/PageInicioTienda/ImagenTiendaDosMobile.webp";
import imagenTiendaDosDesktop from "@/assets/PageInicioTienda/ImagenTiendaDosDesktop.webp";
import imagenTiendaTresMobile from "@/assets/PageInicioTienda/ImagenTiendaTresMobile.webp";
import imagenTiendaTresDesktop from "@/assets/PageInicioTienda/ImagenTiendaTresDesktop.webp";
import Link from "next/link";
import { ContainerSectionFullWidthNoHeader } from "../containers/ContainerSection";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

const listadoTiendas = [
  {
    id: 1,
    destino: "/productos/28477",
    imgMobile: imagenTiendaUnoMobile,
    imgDesktop: imagenTiendaUnoDesktop,
  },
  {
    id: 2,
    destino: "/productos/10597",
    imgMobile: imagenTiendaDosMobile,
    imgDesktop: imagenTiendaDosDesktop,
  },
  {
    id: 3,
    destino: "/productos/8264",
    imgMobile: imagenTiendaTresMobile,
    imgDesktop: imagenTiendaTresDesktop,
  },
];

export default function Tienda() {
  return (
    <ContainerSectionFullWidthNoHeader>
      <Swiper
        className="swiper-tienda w-full h-[120vw] sm:w-[600px] sm:h-[770px] mx:auto md:w-full md:h-[40vw] lg:h-[40vw]"
        loop
        direction="vertical"
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Autoplay]}
        autoplay={{
          pauseOnMouseEnter: true,
          delay: 3500,
        }}
      >
        {listadoTiendas.map((tienda) => (
          <SwiperSlide key={tienda.id} className="rounded-md overflow-hidden">
            <Link href={tienda.destino} className="rounded-md overflow-hidden">
              <Image
                src={tienda.imgMobile}
                alt=""
                width={0}
                height={0}
                sizes="100vw"
                className="md:hidden"
              />
              <Image
                src={tienda.imgDesktop}
                alt=""
                width={0}
                height={0}
                sizes="100vw"
                className="hidden md:block"
              />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </ContainerSectionFullWidthNoHeader>
  );
}
