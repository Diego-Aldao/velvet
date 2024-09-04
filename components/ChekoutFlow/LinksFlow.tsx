"use client";
import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const listadoLinksFlow = [
  {
    id: 1,
    nombre: "carrito",
    destino: "/carrito",
  },
  {
    id: 2,
    nombre: "checkout",
    destino: "/checkout",
  },
  {
    id: 3,
    nombre: "pago",
    destino: "/pago",
  },
];

export default function LinksFlow() {
  const pathname = usePathname();
  return (
    <nav>
      <ul className="flex gap-2 items-center">
        {listadoLinksFlow.map((link) => (
          <li className="text-xs capitalize" key={link.id}>
            <Link href={link.destino} className="flex items-center gap-2">
              {link.id >= 2 && (
                <span className="icon-[tabler--chevron-right] text-main-white/50"></span>
              )}
              <span
                className={`${
                  !pathname.includes(link.destino) && "text-main-white/50"
                }`}
              >
                {link.nombre}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
