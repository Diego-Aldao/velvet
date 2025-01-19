"use client";
import HeroContainer from "@/components/containers/PaginaInicio/HeroContainer";
import React from "react";
import DecoracionTopHero from "./DecoracionTopHero";
import { Swiper } from "swiper/react";
import { Pagination, Navigation, Autoplay, EffectFade } from "swiper/modules";

// swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";

interface Props {
  children: React.ReactNode;
}

export default function SwiperHero({ children }: Props) {
  return (
    <HeroContainer>
      <DecoracionTopHero />

      <Swiper
        modules={[Pagination, Navigation, Autoplay, EffectFade]}
        effect="fade"
        autoplay={{
          delay: 5000,
          pauseOnMouseEnter: true,
        }}
        fadeEffect={{
          crossFade: true,
        }}
        navigation
        pagination={{ clickable: true }}
        className="!py-12 md:!pt-0 max-w-full"
        loop
      >
        {children}
      </Swiper>
    </HeroContainer>
  );
}
