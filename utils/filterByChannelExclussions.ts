import { Navigation } from "@/types/fetchTypes";

export default function filterByChannelExclusions(
  categorias: Navigation[],
  channelExclussion: string
) {
  const MainCategoriasFiltradas = categorias.filter(
    (categoria) => !categoria.channelExclusions.includes(channelExclussion)
  );
  return MainCategoriasFiltradas.map((subCategoria) => ({
    ...subCategoria,
    children: subCategoria.children.filter(
      (child) => !child.channelExclusions.includes(channelExclussion)
    ),
  }));
}
