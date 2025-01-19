"use client";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import { ContainerSectionFullWidthNoHeader } from "../containers/ContainerSection";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { LocalTienda } from "@/types/localTypes";

interface Props {
  marcas: LocalTienda[];
}

export default function Marcas({ marcas }: Props) {
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
        {marcas.map((tienda) => (
          <SwiperSlide key={tienda.id} className="rounded-md overflow-hidden">
            <Link href={tienda.destino} className="rounded-md overflow-hidden">
              <Image
                src={tienda.imagenMobile}
                alt=""
                width={0}
                height={0}
                sizes="100vw"
                className="md:hidden"
              />
              <Image
                src={tienda.imagenDesktop}
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
