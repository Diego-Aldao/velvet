import MainButton from "@/components/buttons/MainButton";
import React from "react";

interface Props {
  titulo: string;
  destino: string;
  nombreDestino: string;
  subtitulo: string;
}

export default function ContenidoFullSlide({
  titulo,
  destino,
  nombreDestino,
  subtitulo,
}: Props) {
  return (
    <div className="contenido absolute top-0 left-0 z-[2] p-4 pb-0 lg:p-8 lg:pb-0 w-full h-full flex flex-col justify-between">
      <div className="titulo flex flex-col gap-2 sm:gap-4">
        <span className="text-4xl sm:text-6xl font-bold uppercase italic tracking-tighter lg:text-8xl xl:text-9xl max-w-[250px] sm:max-w-[450px] md:mt-10 lg:max-w-[650px] xl:max-w-[850px]">
          {titulo}
        </span>
        <span className="text-xs first-letter:uppercase sm:inline-block tracking-wide max-w-[200px] sm:max-w-[300px] lg:text-base lg:max-w-[600px] font-light ">
          {subtitulo}
        </span>
        <MainButton
          destino={destino}
          nombreDestino={nombreDestino}
          customStyles="w-fit py-2 px-6 backdrop-blur-sm mt-4 gap-2 lg:px-6 md:text-sm lg:text-base"
        />
      </div>
      <div className="rounded-bottom w-full flex justify-center absolute bottom-0 left-0">
        <div className="deco deco-bottom relative overflow-hidden w-10 h-10 bottom-0"></div>
        <div className="black-space flex items-center h-10 bg-main-black rounded-t-xl w-[calc(100%-80px)] justify-center max-w-[300px] relative top-5 lg:max-w-[400px]"></div>
        <div className="deco deco-bottom deco-bottom-izquierda relative overflow-hidden w-10 h-10 bottom-0"></div>
      </div>
    </div>
  );
}
