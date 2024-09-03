"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs, Scrollbar } from "swiper/modules";
import ReactPlayer from "react-player/lazy";
import Image from "next/image";
import { Swiper as SwiperType } from "swiper";
import { Media } from "@/types/fetchTypes";
import PlayButton from "../buttons/PlayButton";
import ContenedorImagen from "../containers/ContenedorImagen";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

interface Props {
  media: Media;
}

export default function MediaSlider({ media }: Props) {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType>();
  return (
    <div className="main-contenedor-sliders w-full h-full relative">
      <div className="contenedor-grid w-full grid gap-4 sm:grid-cols-[1fr,4fr] md:grid-cols-1 lg:grid-cols-[1fr,5fr] sm:max-w-full max-w-[450px] lg:w-fit mx-auto lg:mr-0 sticky top-4">
        <div className="main-slider min-w-full sm:col-start-2 md:col-start-1 lg:col-start-2">
          <Swiper
            spaceBetween={10}
            navigation={true}
            thumbs={{ swiper: thumbsSwiper }}
            modules={[FreeMode, Navigation, Thumbs]}
            className="swiper-detalle-producto"
          >
            {media.images.map((imagen) => (
              <SwiperSlide key={imagen.url}>
                <ContenedorImagen customStyles="lg:h-[650px] lg:w-[474px] xl:h-[700px] xl:w-[524px]">
                  <Image
                    src={`https://${imagen.url}?$&wid=513&fit=constrain`}
                    alt=""
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="sm:hidden"
                  />
                  <Image
                    src={`https://${imagen.url}?$&wid=1080&fit=constrain`}
                    alt=""
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="hidden sm:inline-block"
                  />
                </ContenedorImagen>
              </SwiperSlide>
            ))}
            {media.catwalk[0] && (
              <SwiperSlide>
                <ContenedorImagen customStyles="lg:h-[650px] lg:w-[474px] xl:h-[700px] xl:w-[524px]">
                  <ReactPlayer
                    playing={true}
                    muted={true}
                    loop={true}
                    url={`https://${media.catwalk[0].url}`}
                    width="100%"
                    height="100%"
                  />
                </ContenedorImagen>
              </SwiperSlide>
            )}
          </Swiper>
        </div>
        <div className="thumbnails-slider w-full min-w-full min-h-full sm:h-[500px] sm:col-start-1 sm:row-start-1 md:row-start-2 lg:row-start-1 md:h-[170px] md:min-w-full  lg:h-[650px] xl:h-[700px]">
          <Swiper
            onSwiper={setThumbsSwiper}
            watchSlidesProgress={true}
            modules={[FreeMode, Thumbs, Scrollbar]}
            scrollbar={{
              hide: false,
              draggable: true,
            }}
            className="h-full !pb-3 sm:!pb-0 sm:!pl-3 md:!pb-3 md:!p-0"
            slidesPerView={3}
            spaceBetween={10}
            breakpoints={{
              640: {
                direction: "vertical",
                spaceBetween: 10,
              },
              768: {
                direction: "horizontal",
                spaceBetween: 10,
                slidesPerView: 4,
              },
              1024: {
                direction: "vertical",
                spaceBetween: 10,
                slidesPerView: 5,
              },
            }}
          >
            {media.images.map((imagen) => (
              <SwiperSlide key={imagen.url}>
                <ContenedorImagen customStyles="cursor-pointer">
                  <Image
                    src={`https://${imagen.url}`}
                    alt=""
                    width={0}
                    height={0}
                    sizes="100vw"
                  />
                </ContenedorImagen>
              </SwiperSlide>
            ))}
            {media.catwalk[0] && (
              <SwiperSlide>
                <div className="contenedor-video w-full h-full flex flex-col gap-2 items-center justify-center bg-main-white rounded-md cursor-pointer">
                  <PlayButton />
                  <span className="uppercase font-nunito-sans text-sm font-black italic tracking-wide text-main-black">
                    video
                  </span>
                </div>
              </SwiperSlide>
            )}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
