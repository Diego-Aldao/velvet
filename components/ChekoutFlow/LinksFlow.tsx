"use client";
import React from "react";
import { usePathname } from "next/navigation";

const listadoLinksFlow = [
  {
    id: 1,
    nombre: "carrito",
  },
  {
    id: 2,
    nombre: "checkout",
  },
  {
    id: 3,
    nombre: "pago",
  },
];

export default function LinksFlow() {
  const pathname = usePathname();
  return (
    <nav>
      <ul className="flex gap-2 items-center">
        {listadoLinksFlow.map((link) => (
          <li
            className="text-xs capitalize flex items-center gap-2"
            key={link.id}
          >
            {link.id >= 2 && (
              <span className="icon-[tabler--chevron-right] text-main-white/50"></span>
            )}
            <span
              className={`${
                !pathname.includes(link.nombre) && "text-main-white/50"
              }`}
            >
              {link.nombre}
            </span>
          </li>
        ))}
      </ul>
    </nav>
  );
}
