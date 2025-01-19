import React from "react";
import ImagenTrajes from "@/assets/HeroMainPage/heroElegancia.webp";
import ImagenBikini from "@/assets/HeroMainPage/heroSkinCare.webp";
import imagenPrincipalDeporte from "@/assets/HeroMainPage/heroDeporte/heroDeporteMain.webp";
import imagenDeporteGimnasio from "@/assets/HeroMainPage/heroDeporte/heroDeporteGimnasio.webp";
import imagenDeporteYoga from "@/assets/HeroMainPage/heroDeporte/HeroDeporteYoga.webp";
import imagenDeporteRunning from "@/assets/HeroMainPage/heroDeporte/heroDeporteRunning.webp";
import { SlideData } from "@/types/localTypes";
import Hero from "./Hero";

const slidesMujeres: SlideData[] = [
  {
    type: "grid",
    content: {
      titulo: "libera tu potencial",
      destino: "/productos/26091",
      nombreDestino: "ver ropa deportiva",
    },
    media: {
      imagen: imagenPrincipalDeporte,
    },
    gridItems: [
      {
        destino: "/productos/27171",
        nombreDestino: "gimnasio",
        imagen: imagenDeporteGimnasio,
      },
      {
        destino: "/productos/27172",
        nombreDestino: "running",
        imagen: imagenDeporteRunning,
        ubicacionGrid: "row-start-1 sm:row-start-4 sm:col-span-4 sm:row-span-2",
        imagePosition: "object-[50%-0px]",
      },
      {
        destino: "/productos/27175",
        nombreDestino: "yoga",
        imagen: imagenDeporteYoga,
        ubicacionGrid: "sm:col-span-3 sm:row-start-4 sm:row-span-2",
      },
    ],
  },
  {
    type: "video",
    content: {
      titulo: "una entrada estelar",
      subtitulo: "Tu momento de brillar comienza aquí y ahora.",
      destino: "/productos/8799",
      nombreDestino: "los mejores vestidos",
    },
    media: {
      videoUrls: {
        desktop: "/heroVideoHD.mp4",
        mobile: "/heroVideoSD.mp4",
      },
    },
  },
  {
    type: "image",
    content: {
      titulo: "elegancia absoluta",
      subtitulo: "Para mujeres que conquistan con cada paso",
      destino: "/productos/13632",
      nombreDestino: "trajes y prendas sueltas",
    },
    media: {
      imagen: ImagenTrajes,
    },
  },
  {
    type: "image",
    content: {
      titulo: "piel de ensueño",
      subtitulo: "Que tu piel refleje tu luz interior.",
      destino: "/productos/4540",
      nombreDestino: "cuidado de la piel",
    },
    media: {
      imagen: ImagenBikini,
    },
  },
];

export default function HeroMujeres() {
  return <Hero slides={slidesMujeres} />;
}
