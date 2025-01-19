import React from "react";
import imagenTiendaUnoMobile from "@/assets/PageInicioMarcas/ImagenTiendaUnoMobile.webp";
import imagenTiendaUnoDesktop from "@/assets/PageInicioMarcas/ImagenTiendaUnoDesktop.webp";
import imagenTiendaDosMobile from "@/assets/PageInicioMarcas/ImagenTiendaDosMobile.webp";
import imagenTiendaDosDesktop from "@/assets/PageInicioMarcas/ImagenTiendaDosDesktop.webp";
import imagenTiendaTresMobile from "@/assets/PageInicioMarcas/ImagenTiendaTresMobile.webp";
import imagenTiendaTresDesktop from "@/assets/PageInicioMarcas/ImagenTiendaTresDesktop.webp";
import { LocalTienda } from "@/types/localTypes";
import Marcas from "../Marcas";

const listadoMarcasMujer: LocalTienda[] = [
  {
    id: 1,
    destino: "/productos/28477",
    imagenMobile: imagenTiendaUnoMobile,
    imagenDesktop: imagenTiendaUnoDesktop,
  },
  {
    id: 2,
    destino: "/productos/10597",
    imagenMobile: imagenTiendaDosMobile,
    imagenDesktop: imagenTiendaDosDesktop,
  },
  {
    id: 3,
    destino: "/productos/8264",
    imagenMobile: imagenTiendaTresMobile,
    imagenDesktop: imagenTiendaTresDesktop,
  },
];

export default function MarcasMujeres() {
  return <Marcas marcas={listadoMarcasMujer} />;
}
