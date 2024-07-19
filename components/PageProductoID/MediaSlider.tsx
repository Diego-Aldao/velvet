"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs, Scrollbar } from "swiper/modules";
import ReactPlayer from "react-player/lazy";
import Image from "next/image";
import { Swiper as SwiperType } from "swiper";
import { Media } from "@/types/fetchTypes";

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
    <div className="contenedor-slider w-full h-full relative">
      <div className="grid-slider w-full grid gap-4 sm:grid-cols-[1fr,4fr] lg:grid-cols-[1fr,5fr] sm:max-w-full max-w-[450px] lg:w-fit mx-auto lg:mr-0 sticky top-4">
        <div className="main-slider min-w-full sm:col-start-2">
          <Swiper
            spaceBetween={10}
            navigation={true}
            thumbs={{ swiper: thumbsSwiper }}
            modules={[FreeMode, Navigation, Thumbs]}
            className="swiper-detalle-producto"
          >
            {media.images.map((imagen) => (
              <SwiperSlide key={imagen.url}>
                <div className="rounded-md overflow-hidden lg:h-[650px] lg:w-[474px] xl:h-[700px] xl:w-[524px]">
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
                </div>
              </SwiperSlide>
            ))}
            <SwiperSlide>
              <div className="rounded-md overflow-hidden w-full h-full">
                <ReactPlayer
                  playing={true}
                  muted={true}
                  loop={true}
                  url={
                    "https://video.asos-media.com/products/vestido-corto-burdeos-con-cuello-ancho-y-detalle-de-lazada-de-punto-de-asos-design/206292845-catwalk-AVS.m3u8"
                  }
                  width="100%"
                  height="100%"
                />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="thumbnails-slider w-full min-w-full min-h-full sm:h-[500px] sm:col-start-1 sm:row-start-1 md:min-h-fit md:h-[57.5vw] lg:h-[650px] xl:h-[700px]">
          <Swiper
            onSwiper={setThumbsSwiper}
            watchSlidesProgress={true}
            modules={[FreeMode, Thumbs, Scrollbar]}
            scrollbar={{
              hide: false,
              draggable: true,
            }}
            className="h-full !pb-3 sm:!pb-0 sm:!pl-3 lg:!p-0"
            slidesPerView={3}
            spaceBetween={10}
            breakpoints={{
              640: {
                direction: "vertical",
                spaceBetween: 10,
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
                <div className="rounded-md overflow-hidden w-full h-full">
                  <Image
                    src={`https://${imagen.url}`}
                    alt=""
                    width={0}
                    height={0}
                    sizes="100vw"
                  />
                </div>
              </SwiperSlide>
            ))}
            <SwiperSlide>
              <div className="rounded-md overflow-hidden relative flex items-center justify-center h-full w-full">
                <span className="absolute bg-secondary-black rounded-full p-2 flex items-center justify-center">
                  <span className="icon-[tabler--player-play] h-5 w-5"></span>
                </span>
                <Image
                  src={`https://${media.catwalk[0].url}`}
                  alt=""
                  width={0}
                  height={0}
                  sizes="100vw"
                />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
}
