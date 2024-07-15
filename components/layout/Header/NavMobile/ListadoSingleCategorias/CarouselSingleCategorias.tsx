"use client";
import { Navigation } from "@/types/fetchTypes";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import ListItemSingleCategoria from "./ListItemSingleCategoria";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

interface Props {
  singleCategorias: Navigation[];
  displayChildren: string | undefined;
}

export default function CarouselSingleCategorias({
  singleCategorias,
  displayChildren,
}: Props) {
  return (
    <li className="w-full max-w-[250px] mx-auto">
      <Swiper
        spaceBetween={20}
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        className="!pb-8 !max-w-full !min-w-full"
        autoplay
        loop
      >
        {singleCategorias.map((singleCategorias) => (
          <SwiperSlide key={singleCategorias.id}>
            <ListItemSingleCategoria
              singleCategoria={singleCategorias}
              display={displayChildren}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </li>
  );
}
