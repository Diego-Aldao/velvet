import { LocalFilters } from "@/types/localTypes";

export default function objectToFilterString(objeto: LocalFilters) {
  const stringFinal = Object.entries(objeto)
    .map(([clave, valor]) => `${clave}=${valor}`)
    .join("&");
  return stringFinal;
}
