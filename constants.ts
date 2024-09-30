import { Envio, LocalOrden } from "./types/localTypes";

export const LISTADO_ORDEN_FILTROS_PRODUCTOS: LocalOrden[] = [
  {
    id: 1,
    nombre: "mas nuevo",
    value: "freshness",
    isSelected: true,
  },
  {
    id: 3,
    nombre: "precio ascendente",
    value: "pricedasc",
    isSelected: false,
  },
  {
    id: 2,
    nombre: "precio descendente",
    value: "pricedesc",
    isSelected: false,
  },
];

export const ENVIOS: Envio[] = [
  {
    tipo: "envio gratis",
    precio: "0,00",
    demora: "7-30 dias habiles",
    id: 1,
  },
  {
    tipo: "envio basico",
    precio: "5,50",
    demora: "3-14 dias habiles",
    id: 2,
  },
  {
    tipo: "envio express",
    precio: "12,50",
    demora: "1-3 dias habiles",
    id: 3,
  },
];

export const BASE_URL_PRODUCTOS = `https://asos2.p.rapidapi.com/products/v2/list?store=ES&lang=es-ES&country=ES&currency=EUR&sizeSchema=ES&`;
export const BASE_URL_CATEGORIAS = `https://asos2.p.rapidapi.com/categories/list?country=ES&lang=es-ES`;
export const BASE_URL_DETALLE_PRODUCTO = `https://asos2.p.rapidapi.com/products/v4/detail?`;
