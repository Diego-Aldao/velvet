import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";

interface PropsCardDecorated
  extends Pick<Props, "imagen" | "gridPosition" | "destino"> {}

export function SelectionGridCardDecorated({
  imagen,
  gridPosition,
  destino,
}: PropsCardDecorated) {
  return (
    <SelectionGridCard
      destino={destino}
      imagen={imagen}
      tag=""
      tagStyles="hidden"
      gridPosition={gridPosition}
      imagenStyles="my-10 relative max-w-[75%] lg:max-w-[80%]"
    >
      <span className="absolute uppercase top-1 mr-14 group-hover:mr-24 transition-all text-main-white/25 font-nunito-sans font-[1000] text-4xl line-clamp-1 w-fit">
        plusplusplusplus
        <span className="text-main-white">plus</span>
        plusplusplusplus
      </span>
      <span className="absolute uppercase bottom-0 ml-14 group-hover:ml-24 transition-all text-main-white/25 font-nunito-sans font-[1000] text-4xl line-clamp-1 w-fit">
        sizesizesizesize
        <span className="text-main-white">size</span>
        sizesizesizesize
      </span>
    </SelectionGridCard>
  );
}

interface PropsCardTitle
  extends Pick<Props, "imagen" | "tag" | "gridPosition" | "destino"> {
  titulo: string;
}
export function SelectionGridCardTitle({
  titulo,
  imagen,
  tag,
  gridPosition,
  destino,
}: PropsCardTitle) {
  return (
    <SelectionGridCard
      destino={destino}
      gridPosition={gridPosition}
      imagen={imagen}
      tag={tag}
      tagStyles="right-0 left-0 w-fit mx-auto block"
    >
      <span className="absolute top-2 uppercase font-bold w-full text-center block italic text-4xl sm:text-6xl lg:text-4xl xl:text-5xl z-[2]">
        {titulo}
      </span>
    </SelectionGridCard>
  );
}

interface PropsCardMiniImage
  extends Pick<Props, "imagen" | "tag" | "gridPosition" | "destino"> {
  miniImage: StaticImageData;
}
export function SelectionGridCardMiniImage({
  imagen,
  tag,
  miniImage,
  gridPosition,
  destino,
}: PropsCardMiniImage) {
  return (
    <SelectionGridCard
      gridPosition={gridPosition}
      imagen={imagen}
      tag={tag}
      destino={destino}
    >
      <span className="mini-imagen w-36 h-16 rounded-md overflow-hidden absolute right-2 bottom-12 hidden lg:block">
        <Image src={miniImage} alt="" width={144} height={64} />
      </span>
    </SelectionGridCard>
  );
}

interface PropsCardInfo
  extends Pick<Props, "imagen" | "tag" | "gridPosition" | "destino"> {
  infoSM: string;
  infoLG: string;
}
export function SelectionGridCardInfo({
  imagen,
  tag,
  infoSM,
  infoLG,
  gridPosition,
  destino,
}: PropsCardInfo) {
  return (
    <SelectionGridCard
      destino={destino}
      gridPosition={gridPosition}
      imagen={imagen}
      tag={tag}
      imagePosition="lg:object-[50%-60px]"
      tagStyles="right-auto left-2 bottom-[70px] sm:bottom-[134px] md:bottom-40 xl:bottom-48"
    >
      <span className="absolute bottom-2 left-2 z-[2] uppercase font-bold italic text-xl max-w-[100px] sm:max-w-[200px] sm:text-4xl md:text-5xl tracking-tighter xl:max-w-[300px] xl:text-6xl">
        {infoSM}
        <span className="hidden sm:inline-block">{infoLG}</span>
      </span>
    </SelectionGridCard>
  );
}

interface Props {
  imagen: StaticImageData;
  tag: string;
  children?: React.ReactNode;
  gridPosition: string;
  tagStyles?: string;
  imagePosition?: string;
  imagenStyles?: string;
  destino: string;
}
export default function SelectionGridCard({
  imagen,
  tag,
  children,
  gridPosition,
  tagStyles,
  imagePosition,
  imagenStyles,
  destino,
}: Props) {
  return (
    <Link
      href={destino}
      className={`relative rounded-md overflow-hidden ${gridPosition} border border-transparent hover:border-secondary-black transition-[border-color] group`}
    >
      <span
        className={`image-container block rounded-md relative overflow-hidden w-full h-full after:inset-0 after:absolute after:bg-main-black/25 ${imagenStyles} after:transition-[background-color] group-hover:after:bg-main-black/15`}
      >
        <Image
          src={imagen}
          alt=""
          width={0}
          height={0}
          sizes="100vw"
          className={`group-hover:scale-[1.05] transition-transform ${imagePosition}`}
        />
      </span>

      <span
        className={`absolute bottom-2 right-2 text-[10px]  sm:text-xs sm:py-1 sm:px-4 font-semibold uppercase py-[2px] tracking-wide px-2 rounded-full bg-main-black/75 ${tagStyles}`}
      >
        {tag}
      </span>
      {children}
    </Link>
  );
}
