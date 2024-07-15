"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import ImagenTrajes from "@/assets/HeroMainPage/HeroTrajes.webp";
import ImagenBikini from "@/assets/HeroMainPage/HeroBikini.webp";
import imagenPrincipalDeporte from "@/assets/HeroMainPage/heroDeporte/HeroDeporteMain.webp";
import imagenDeporteGimnasio from "@/assets/HeroMainPage/heroDeporte/HeroDeporteGimnasio.webp";
import imagenDeporteYoga from "@/assets/HeroMainPage/heroDeporte/HeroDeporteYoga.webp";
import imagenDeporteRunning from "@/assets/HeroMainPage/heroDeporte/HeroDeporteRunning.webp";
import { FullImageSlide, GridSlide, VideoSlide } from "./Slide";
import ContenidoFullSlide from "./ContenidoFullSlide";
import {
  GridSlideHorizontal,
  GridSlideMainContent,
  GridSlideVertical,
} from "./GridSlideContent";
import DecoracionTopHero from "./DecoracionTopHero";
import BarraBusqueda from "@/components/BarraBusqueda";
import HeroContainer from "@/components/containers/PaginaInicio/HeroContainer";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Hero() {
  return (
    <HeroContainer>
      <DecoracionTopHero>
        <BarraBusqueda />
      </DecoracionTopHero>

      <Swiper
        spaceBetween={50}
        modules={[Pagination, Navigation]}
        navigation
        pagination={{ clickable: true }}
        className="!pt-16 !pb-12 md:!pt-0 max-w-full"
      >
        <SwiperSlide>
          <VideoSlide
            urlVideoDesktop="/heroVideoHD.mp4"
            urlVideoMobile="/heroVideoSD.mp4"
          >
            <ContenidoFullSlide
              titulo="una entrada estelar"
              subtitulo="Tu momento de brillar comienza aquí y ahora."
              destino=""
              nombreDestino="los mejores vestidos"
            />
          </VideoSlide>
        </SwiperSlide>
        <SwiperSlide>
          <GridSlide>
            <GridSlideMainContent
              titulo="libera tu potencial"
              destino=""
              nombreDestino="ver ropa deportiva"
              imagenUrl={imagenPrincipalDeporte}
            />
            <GridSlideVertical
              destino=""
              nombreDestino="gimnasio"
              imagenUrl={imagenDeporteGimnasio}
            />
            <GridSlideHorizontal
              destino=""
              nombreDestino="running"
              imagenUrl={imagenDeporteRunning}
              ubicacionGrid="row-start-1 sm:row-start-4 sm:col-span-4 sm:row-span-2"
            />
            <GridSlideHorizontal
              destino=""
              nombreDestino="yoga"
              imagenUrl={imagenDeporteYoga}
              ubicacionGrid="sm:col-span-3 sm:row-start-4 sm:row-span-2"
            />
          </GridSlide>
        </SwiperSlide>
        <SwiperSlide>
          <FullImageSlide imagenUrl={ImagenTrajes}>
            <ContenidoFullSlide
              titulo="elegancia absoluta"
              subtitulo="Para mujeres que conquistan con cada paso"
              destino=""
              nombreDestino="trajes y prendas sueltas"
            />
          </FullImageSlide>
        </SwiperSlide>
        <SwiperSlide>
          <FullImageSlide imagenUrl={ImagenBikini}>
            <ContenidoFullSlide
              titulo="verano inolvidable"
              subtitulo="Diseños exclusivos para acompañar el espiritu veraniego"
              destino=""
              nombreDestino="moda baño y playa"
            />
          </FullImageSlide>
        </SwiperSlide>
      </Swiper>
    </HeroContainer>
  );
}
