"use client";
import React from "react";
import { SwiperSlide } from "swiper/react";
import { FullImageSlide, GridSlide, VideoSlide } from "./Slide";
import ContenidoFullSlide from "./ContenidoFullSlide";
import {
  GridSlideHorizontal,
  GridSlideMainContent,
  GridSlideVertical,
} from "./GridSlideContent";
import SwiperHero from "./SwiperHero";
import { SlideData } from "@/types/localTypes";

interface Props {
  slides: SlideData[];
}

export default function Hero({ slides }: Props) {
  return (
    <SwiperHero>
      {slides.map(({ content, type, media, gridItems }, i) => (
        <SwiperSlide key={i}>
          {type === "grid" && gridItems && media?.imagen && (
            <GridSlide>
              <GridSlideMainContent
                titulo={content.titulo}
                destino={content.destino}
                nombreDestino={content.nombreDestino}
                imagenUrl={media.imagen}
              />
              {gridItems.map((item, itemIndex) => (
                <React.Fragment key={itemIndex}>
                  {item.ubicacionGrid ? (
                    <GridSlideHorizontal
                      destino={item.destino}
                      nombreDestino={item.nombreDestino}
                      imagenUrl={item.imagen}
                      ubicacionGrid={item.ubicacionGrid}
                      imagePosition={item.imagePosition}
                    />
                  ) : (
                    <GridSlideVertical
                      destino={item.destino}
                      nombreDestino={item.nombreDestino}
                      imagenUrl={item.imagen}
                    />
                  )}
                </React.Fragment>
              ))}
            </GridSlide>
          )}
          {type === "video" && media?.videoUrls && (
            <VideoSlide
              urlVideoDesktop={media.videoUrls.desktop}
              urlVideoMobile={media.videoUrls.mobile}
            >
              <ContenidoFullSlide
                titulo={content.titulo}
                subtitulo={content.subtitulo || ""}
                destino={content.destino}
                nombreDestino={content.nombreDestino}
              />
            </VideoSlide>
          )}
          {type === "image" && media?.imagen && (
            <FullImageSlide imagenUrl={media.imagen}>
              <ContenidoFullSlide
                titulo={content.titulo}
                subtitulo={content.subtitulo || ""}
                destino={content.destino}
                nombreDestino={content.nombreDestino}
              />
            </FullImageSlide>
          )}
        </SwiperSlide>
      ))}
    </SwiperHero>
  );
}
