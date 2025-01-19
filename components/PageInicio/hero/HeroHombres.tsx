import React from "react";
import imagenTrajes from "@/assets/HeroMainPage/heroHombre/heroTrajes.webp";
import imagenCasual from "@/assets/HeroMainPage/heroHombre/heroCasual.webp";
import imagenPrincipalDeporte from "@/assets/HeroMainPage/heroHombre/heroDeporte/heroDeportePrincipal.webp";
import imagenDeporteFootball from "@/assets/HeroMainPage/heroHombre/heroDeporte/heroDeporteFootball.webp";
import imagenDeporteGimnasio from "@/assets/HeroMainPage/heroHombre/heroDeporte/heroDeporteGimnasio.webp";
import imagenDeporteRunning from "@/assets/HeroMainPage/heroHombre/heroDeporte/heroDeporteRunning.webp";
import { SlideData } from "@/types/localTypes";
import Hero from "./Hero";

const slidesHombres: SlideData[] = [
  {
    type: "grid",
    content: {
      titulo: "libera tu potencial",
      destino: "/productos/26090",
      nombreDestino: "ropa deportiva",
    },
    media: {
      imagen: imagenPrincipalDeporte,
    },
    gridItems: [
      {
        destino: "/productos/27183",
        nombreDestino: "gimnasio",
        imagen: imagenDeporteGimnasio,
      },
      {
        destino: "/productos/27191",
        nombreDestino: "running",
        imagen: imagenDeporteRunning,
        ubicacionGrid: "row-start-1 sm:row-start-4 sm:col-span-4 sm:row-span-2",
        imagePosition: "object-[50%-0px]",
      },
      {
        destino: "/productos/27182",
        nombreDestino: "fútbol",
        imagen: imagenDeporteFootball,
        ubicacionGrid: "sm:col-span-3 sm:row-start-4 sm:row-span-2",
      },
    ],
  },
  {
    type: "video",
    content: {
      titulo: "imponiendo presencia",
      subtitulo: "Funcionalidad y diseño en perfecta sintonía.",
      destino: "/productos/8799",
      nombreDestino: "abrigos y chaquetas",
    },
    media: {
      videoUrls: {
        desktop: "/heroHombreVideoHD.mp4",
        mobile: "/heroHombreVideoSD.mp4",
      },
    },
  },
  {
    type: "image",
    content: {
      titulo: "elegancia absoluta",
      subtitulo: "Para hombres que conquistan con cada paso.",
      destino: "/productos/5678",
      nombreDestino: "los mejores trajes",
    },
    media: {
      imagen: imagenTrajes,
    },
  },
  {
    type: "image",
    content: {
      titulo: "estilo sin esfuerzo",
      subtitulo: "La clave para un look casual perfecto.",
      destino: "/productos/7616",
      nombreDestino: "camisetas y chalecos",
    },
    media: {
      imagen: imagenCasual,
    },
  },
];

export default function HeroHombres() {
  return <Hero slides={slidesHombres} />;
}
