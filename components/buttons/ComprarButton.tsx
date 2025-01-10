"use client";
import useCarrito from "@/hooks/useCarrito";
import { Current } from "@/types/fetchTypes";
import { useRouter } from "next/navigation";
import React from "react";

interface Props {
  selectedSize: null | string;
  setNoVariantError: React.Dispatch<React.SetStateAction<boolean>>;
  nombre: string;
  precio: Current | undefined;
  color: string;
  imagen: string;
  id: number;
  marca: string;
}

export default function ComprarButton({
  selectedSize,
  setNoVariantError,
  nombre,
  color,
  imagen,
  marca,
  precio,
  id,
}: Props) {
  const { handleItemCarrito, itemCarrito } = useCarrito({ id });
  const router = useRouter();

  const handleClick = () => {
    if (selectedSize === null) {
      setNoVariantError(true);
    } else {
      if (!itemCarrito) {
        handleItemCarrito(nombre, precio, color, imagen, selectedSize, marca);
      }
      router.push("/cf/carrito");
    }
  };
  return (
    <button
      onClick={handleClick}
      className={`py-2 px-3 uppercase font-bold text-sm border hover:opacity-95 transition-opacity border-primary bg-primary text-main-black rounded-full w-full md:px-3 ${
        !selectedSize && "cursor-not-allowed"
      } `}
    >
      comprar ahora
    </button>
  );
}
