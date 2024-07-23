export default function translateNombreSubInfo(nombreSubInfo: string) {
  const nombreTraducido =
    nombreSubInfo === "aboutMe"
      ? "sobre mí"
      : nombreSubInfo === "careInfo"
      ? "cómo cuidarme"
      : nombreSubInfo === "sizeAndFit"
      ? "talla y corte"
      : nombreSubInfo;
  return nombreTraducido;
}
