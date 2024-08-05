import { Info, Media, Price, Variant } from "./fetchTypes";

export interface LocalFilters {
  categoryId: string;
  offset: number;
  sort: string;
  limit: number;
  [key: string]: string | number | boolean;
}

export interface LocalOrden {
  id: number;
  nombre: string;
  value: string;
  isSelected: boolean;
}

export interface LocalSubInfo {
  nombre: string;
  contenido: string;
}

export interface LocalProducto {
  id: number;
  nombre: string;
  imagen: string;
  marca: string;
  precio?: Price;
  color: string;
  descripcion?: string;
  variants?: Variant[];
  media?: Media;
  info?: Info;
}

export interface LocalProductInteraction {
  variantes?: Variant[];
  nombre: string;
  precioFinal: string;
  color: string;
  imagen: string;
  id: number;
  tamaño: string;
}
