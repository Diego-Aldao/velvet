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

export const LISTADO_PAISES_ENVIO = [
  {
    name: "Argentina",
    es_name: "Argentina",
  },
  {
    name: "Bolivia",
    es_name: "Bolivia",
  },
  {
    name: "Brazil",
    es_name: "Brasil",
  },
  {
    name: "Canada",
    es_name: "Canadá",
  },
  {
    name: "Chile",
    es_name: "Chile",
  },
  {
    name: "Colombia",
    es_name: "Colombia",
  },
  {
    name: "Costa Rica",
    es_name: "Costa Rica",
  },
  {
    name: "Cuba",
    es_name: "Cuba",
  },
  {
    name: "Dominican Republic",
    es_name: "República Dominicana",
  },
  {
    name: "Ecuador",
    es_name: "Ecuador",
  },
  {
    name: "El Salvador",
    es_name: "El Salvador",
  },
  {
    name: "Falkland Islands (Malvinas)",
    es_name: "Islas Malvinas",
  },
  {
    name: "Guatemala",
    es_name: "Guatemala",
  },
  {
    name: "Honduras",
    es_name: "Honduras",
  },
  {
    name: "Mexico",
    es_name: "México",
  },
  {
    name: "Panama",
    es_name: "Panamá",
  },
  {
    name: "Paraguay",
    es_name: "Paraguay",
  },
  {
    name: "Peru",
    es_name: "Perú",
  },
  {
    name: "Puerto Rico",
    es_name: "Puerto Rico",
  },
  {
    name: "Spain",
    es_name: "España",
  },
  {
    name: "United States",
    es_name: "Estados Unidos",
  },
  {
    name: "Uruguay",
    es_name: "Uruguay",
  },
  {
    name: "Venezuela",
    es_name: "Venezuela",
  },
];

export const BASE_URL_PRODUCTOS = `https://asos2.p.rapidapi.com/products/v2/list?store=ES&lang=es-ES&country=ES&currency=EUR&sizeSchema=ES&`;
export const BASE_URL_CATEGORIAS = `https://asos2.p.rapidapi.com/categories/list?country=ES&lang=es-ES`;
export const BASE_URL_DETALLE_PRODUCTO = `https://asos2.p.rapidapi.com/products/v4/detail?`;
