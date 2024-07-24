import Link from "next/link";
import React from "react";

interface Props {
  nombre: string;
  path: string;
  checked: boolean;
}

export default function GeneroButton({ nombre, path, checked }: Props) {
  return (
    <Link
      href={path}
      className={`py-2 px-4 rounded-md  uppercase font-bold font-nunito-sans tracking-wider hover:bg-primary hover:text-main-black transition-colors ${
        checked
          ? "bg-primary text-main-black"
          : "bg-secondary-black text-main-white"
      }`}
    >
      {nombre}
    </Link>
  );
}
