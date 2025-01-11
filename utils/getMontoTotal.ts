import { LocalProductInteraction } from "@/types/localTypes";

export default function getMontoTotal(carrito: LocalProductInteraction[]) {
  const formatter = new Intl.NumberFormat("es-ES", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
  let total: number = 0;
  carrito.map((item) => {
    return (total += item.precio.value || 0);
  });
  return formatter.format(total);
}
