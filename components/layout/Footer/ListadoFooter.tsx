import Link from "next/link";
import React from "react";

const LISTADO_NAV_FOOTER = [
  {
    id: 1,
    nombre: "general",
    listado: [
      {
        id: 1,
        nombre: "nosotros",
        destino: "",
      },
      {
        id: 2,
        nombre: "blog",
        destino: "",
      },
      {
        id: 3,
        nombre: "como funciona",
        destino: "",
      },
      {
        id: 4,
        nombre: "contactanos",
        destino: "",
      },
    ],
  },
  {
    id: 2,
    nombre: "productos",
    listado: [
      {
        id: 1,
        nombre: "hombre",
        destino: "",
      },
      {
        id: 2,
        nombre: "mujer",
        destino: "",
      },
      {
        id: 3,
        nombre: "accesorios de mujer",
        destino: "",
      },
      {
        id: 4,
        nombre: "calzado masculino",
        destino: "",
      },
    ],
  },
  {
    id: 3,
    nombre: "servicio al cliente",
    listado: [
      {
        id: 1,
        nombre: "faQ",
        destino: "",
      },
      {
        id: 2,
        nombre: "ayuda y soporte",
        destino: "",
      },
      {
        id: 3,
        nombre: "ciclo de pago",
        destino: "",
      },
      {
        id: 4,
        nombre: "politica de privacidad",
        destino: "",
      },
    ],
  },
  {
    id: 4,
    nombre: "redes sociales",
    listado: [
      {
        id: 1,
        nombre: "instagram",
        destino: "https://instagram.com",
      },
      {
        id: 2,
        nombre: "facebook",
        destino: "https://facebook.com",
      },
      {
        id: 3,
        nombre: "tiktok",
        destino: "https://tiktok.com",
      },
      {
        id: 4,
        nombre: "youtube",
        destino: "https://youtube.com",
      },
    ],
  },
];

export default function ListadoFooter() {
  return (
    <ul className="bg-secondary-black rounded-xl w-full pt-8 pb-24 sm:pb-32 lg:pb-40 xl:pb-52 px-2 grid grid-cols-2 lg:grid-cols-4 gap-8 sm:px-8 lg:pt-12 relative overflow-hidden">
      {LISTADO_NAV_FOOTER.map((itemListado) => (
        <li
          className="flex flex-col gap-4 lg:gap-8 relative z-[2]"
          key={itemListado.id}
        >
          <span className="uppercase text-xs lg:text-sm font-bold xl:text-base font-nunito-sans">
            {itemListado.nombre}
          </span>
          <ul className="flex flex-col gap-2 lg:gap-4">
            {itemListado.listado.map((itemListadoInside) => (
              <li
                className="capitalize text-xs xl:text-sm"
                key={itemListadoInside.id}
              >
                <Link href={itemListadoInside.destino} target="blank_">
                  {itemListadoInside.nombre}
                </Link>
              </li>
            ))}
          </ul>
        </li>
      ))}
      <li className="col-span-full  absolute -bottom-[12vw] sm:-bottom-[13vw] lg:-bottom-[14vw] w-full left-0 xl:-bottom-48 ">
        <span className="text-[clamp(56px,_22vw,_310px)] uppercase font-bold text-main-black/50 text-center w-full block">
          velvet
        </span>
      </li>
    </ul>
  );
}
