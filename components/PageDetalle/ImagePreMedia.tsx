import Image from "next/image";
import React from "react";
import ContenedorImagen from "../containers/ContenedorImagen";

interface Props {
  imgUrl: string;
}

export default function ImagePreMedia({ imgUrl }: Props) {
  return (
    <ContenedorImagen customStyles="lg:h-[650px] lg:w-[474px] xl:h-[700px] xl:w-[524px] ml-auto">
      <Image
        src={`https://${imgUrl}`}
        alt=""
        width={0}
        height={0}
        sizes="100vw"
      />
    </ContenedorImagen>
  );
}
