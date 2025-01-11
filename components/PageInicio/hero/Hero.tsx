"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay, EffectFade } from "swiper/modules";
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
import "swiper/css/autoplay";
import "swiper/css/effect-fade";

export default function Hero() {
  return (
    <HeroContainer>
      <DecoracionTopHero>
        <BarraBusqueda />
      </DecoracionTopHero>

      <Swiper
        modules={[Pagination, Navigation, Autoplay, EffectFade]}
        autoplay={{
          pauseOnMouseEnter: true,
          delay: 5000,
        }}
        effect="fade"
        fadeEffect={{
          crossFade: true,
        }}
        navigation
        pagination={{ clickable: true }}
        className="!pt-16 !pb-12 md:!pt-0 max-w-full"
        loop
      >
        <SwiperSlide>
          <GridSlide>
            <GridSlideMainContent
              titulo="libera tu potencial"
              destino="/productos/26091"
              nombreDestino="ver ropa deportiva"
              imagenUrl={imagenPrincipalDeporte}
            />
            <GridSlideVertical
              destino="/productos/27171"
              nombreDestino="gimnasio"
              imagenUrl={imagenDeporteGimnasio}
            />
            <GridSlideHorizontal
              destino="/productos/27172"
              nombreDestino="running"
              imagenUrl={imagenDeporteRunning}
              ubicacionGrid="row-start-1 sm:row-start-4 sm:col-span-4 sm:row-span-2"
            />
            <GridSlideHorizontal
              destino="/productos/27175"
              nombreDestino="yoga"
              imagenUrl={imagenDeporteYoga}
              ubicacionGrid="sm:col-span-3 sm:row-start-4 sm:row-span-2"
            />
          </GridSlide>
        </SwiperSlide>
        <SwiperSlide>
          <VideoSlide
            urlVideoDesktop="/heroVideoHD.mp4"
            urlVideoMobile="/heroVideoSD.mp4"
          >
            <ContenidoFullSlide
              titulo="una entrada estelar"
              subtitulo="Tu momento de brillar comienza aquí y ahora."
              destino="/productos/8799"
              nombreDestino="los mejores vestidos"
            />
          </VideoSlide>
        </SwiperSlide>
        <SwiperSlide>
          <FullImageSlide imagenUrl={ImagenTrajes}>
            <ContenidoFullSlide
              titulo="elegancia absoluta"
              subtitulo="Para mujeres que conquistan con cada paso"
              destino="/productos/13632"
              nombreDestino="trajes y prendas sueltas"
            />
          </FullImageSlide>
        </SwiperSlide>
        <SwiperSlide>
          <FullImageSlide imagenUrl={ImagenBikini}>
            <ContenidoFullSlide
              titulo="verano inolvidable"
              subtitulo="Diseños exclusivos para acompañar el espiritu veraniego"
              destino="/productos/2238"
              nombreDestino="moda baño y playa"
            />
          </FullImageSlide>
        </SwiperSlide>
      </Swiper>
    </HeroContainer>
  );
}
