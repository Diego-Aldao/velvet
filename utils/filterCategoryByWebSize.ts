import { Navigation } from "@/types/fetchTypes";

export default function filterCategoryByWebSize(
  categorias: Navigation[],
  webSize: string
) {
  return categorias.filter(
    (categoria) => !categoria.channelExclusions.includes(webSize)
  );
}
