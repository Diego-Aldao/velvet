export default function getPorcentajeDescuento(
  precioOriginal: number | null,
  precioActual: number | null
) {
  if (!precioOriginal || !precioActual) return;
  const descuento = precioOriginal - precioActual;
  const porcentajeDescuento = (descuento / precioOriginal) * 100;
  return Math.round(porcentajeDescuento);
}
