import React from "react";
import imagenTiendaUnoMobile from "@/assets/PageInicioMarcas/marcasHombre/imagenTiendaUnoMobile.webp";
import imagenTiendaUnoDesktop from "@/assets/PageInicioMarcas/marcasHombre/imagenTiendaUnoDesktop.webp";
import imagenTiendaDosMobile from "@/assets/PageInicioMarcas/marcasHombre/imagenTiendaDosMobile.webp";
import imagenTiendaDosDesktop from "@/assets/PageInicioMarcas/marcasHombre/imagenTiendaDosDesktop.webp";
import imagenTiendaTresMobile from "@/assets/PageInicioMarcas/marcasHombre/imagenTiendaTresMobile.webp";
import imagenTiendaTresDesktop from "@/assets/PageInicioMarcas/marcasHombre/imagenTiendaTresDesktop.webp";
import { LocalTienda } from "@/types/localTypes";
import Marcas from "../Marcas";

const listadoMarcasHombre: LocalTienda[] = [
  {
    id: 1,
    destino: "/productos/51971",
    imagenMobile: imagenTiendaUnoMobile,
    imagenDesktop: imagenTiendaUnoDesktop,
  },
  {
    id: 2,
    destino: "/productos/21528",
    imagenMobile: imagenTiendaDosMobile,
    imagenDesktop: imagenTiendaDosDesktop,
  },
  {
    id: 3,
    destino: "/productos/4766",
    imagenMobile: imagenTiendaTresMobile,
    imagenDesktop: imagenTiendaTresDesktop,
  },
];

export default function MarcasHombres() {
  return <Marcas marcas={listadoMarcasHombre} />;
}
