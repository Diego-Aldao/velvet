"use client";
import { BASE_URL_DETALLE_PRODUCTO } from "@/constants";
import FetchDataClient from "@/services/fetchDataClient";
import { FetchProductDetail } from "@/types/fetchTypes";
import { LocalProducto } from "@/types/localTypes";
import { useEffect, useState } from "react";

export default function useProductDetail(id: string) {
  const [producto, setProducto] = useState<LocalProducto>();
  const { data } = FetchDataClient<FetchProductDetail>(
    `${BASE_URL_DETALLE_PRODUCTO}id=${id}&lang=es-ES&store=ES&sizeSchema=ES&currency=EUR`
  );

  useEffect(() => {
    const dataFromLS = localStorage.getItem("current");
    if (dataFromLS !== null) {
      const dataFromLSParsed: LocalProducto = JSON.parse(dataFromLS);
      if (dataFromLSParsed.id === Number(id)) {
        setProducto(dataFromLSParsed);
      }
    }
  }, [id]); //este effect es para mostrar rapidamente informacion del producto gracias a la data que se guardo en LS cuando se le hizo click al mismo en la lista de su categoria

  const getSameProductFromLS = (id: string) => {
    const dataFromLS = localStorage.getItem("current");
    if (dataFromLS !== null) {
      const dataFromLSParsed: LocalProducto = JSON.parse(dataFromLS);
      if (dataFromLSParsed.id === Number(id)) {
        return dataFromLSParsed;
      }
    } else return undefined;
  };

  useEffect(() => {
    if (!data) return;
    const productoIdenticoLS = getSameProductFromLS(id);
    if (productoIdenticoLS) {
      const newProducto: LocalProducto = {
        ...productoIdenticoLS,
        descripcion: data.description,
        info: data.info,
        media: data.media,
        variants: data.variants,
      };
      setProducto(newProducto);
    } else {
      const newProducto: LocalProducto = {
        id: Number(id),
        imagen: data.media.images[0].url,
        nombre: data.name,
        info: data.info,
        marca: data.brand,
        variants: data.variants,
        media: data.media,
        descripcion: data.description,
        color: data.media.images[0].colour,
      };
      setProducto(newProducto);
    }
  }, [data]);

  return { producto };
}
