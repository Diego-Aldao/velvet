"use client";
import { CustomToastAdd, CustomToastRemove } from "@/components/CustomToast";
import { useProductContext } from "@/context/ProductsContext";
import React, { useEffect, useState } from "react";
import { toast } from "sonner";

interface Props {
  id: number;
}

export default function useFavoritos({ id }: Props) {
  const { favoritos, updateFavoritos } = useProductContext();
  const [itemFavorito, setItemFavorito] = useState<boolean>(false);

  useEffect(() => {
    const itemYaEsFavorito = favoritos.some((favorito) => favorito.id === id);
    setItemFavorito(itemYaEsFavorito);
  }, [favoritos]);

  const handleToast = (nombre: string, color: string, marca: string) => {
    const primerPalabra = nombre.split(" ")[0];

    const nombreToast = `${primerPalabra} ${
      color !== "Sin color" ? color : ""
    } de ${marca}`;

    const estiloToast = {
      background: "var(--secondary-black)",
      borderColor: "var(--secondary-black)",
    };

    if (itemFavorito) {
      toast(<CustomToastRemove nombre={nombreToast} />, {
        style: estiloToast,
      });
    } else {
      toast(<CustomToastAdd nombre={nombreToast} />, {
        style: estiloToast,
      });
    }
  };

  const handleFavorito = (
    e: React.MouseEvent<HTMLSpanElement, MouseEvent>,
    nombre: string,
    precio: string,
    color: string,
    imagen: string,
    tamaño: string,
    marca: string
  ) => {
    e.preventDefault();
    e.stopPropagation();
    handleToast(nombre, color, marca);
    const newFavorito = {
      nombre: nombre,
      precioFinal: precio,
      color: color,
      imagen: imagen,
      id: id,
      tamaño: tamaño,
    };
    updateFavoritos(newFavorito);
  };

  return { handleFavorito, itemFavorito };
}
