"use client";
import { CustomToastAdd, CustomToastRemove } from "@/components/CustomToast";
import { useProductContext } from "@/context/ProductsContext";
import React, { useEffect, useState } from "react";
import { toast } from "sonner";

interface Props {
  id: number;
}

export default function useCarrito({ id }: Props) {
  const { carrito, updateCarrito } = useProductContext();
  const [itemCarrito, setItemCarrito] = useState<boolean>(false);

  useEffect(() => {
    const itemYaEstaEnCarrito = carrito.some(
      (itemCarrito) => itemCarrito.id === id
    );
    setItemCarrito(itemYaEstaEnCarrito);
  }, [carrito]);

  const handleToast = (nombre: string, color: string, marca: string) => {
    const primerPalabra = nombre.split(" ")[0];

    const nombreToast = `${primerPalabra} ${
      color !== "Sin color" ? color : ""
    } de ${marca}`;

    const estiloToast = {
      background: "var(--secondary-black)",
      borderColor: "var(--secondary-black)",
    };

    if (itemCarrito) {
      toast(<CustomToastRemove nombre={nombreToast} tipo="carrito" />, {
        style: estiloToast,
      });
    } else {
      toast(<CustomToastAdd nombre={nombreToast} tipo="carrito" />, {
        style: estiloToast,
      });
    }
  };

  const handleItemCarrito = (
    nombre: string,
    precio: string,
    color: string,
    imagen: string,
    tamaño: string,
    marca: string
  ) => {
    handleToast(nombre, color, marca);
    const newItemCarrito = {
      nombre: nombre,
      precioFinal: precio,
      color: color,
      imagen: imagen,
      id: id,
      tamaño: tamaño,
    };
    updateCarrito(newItemCarrito);
  };

  return { handleItemCarrito, itemCarrito };
}
