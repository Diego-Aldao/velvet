import MainContent from "@/components/PageFavoritos/MainContent";
import React from "react";

export default function Favoritos() {
  return (
    <main className="px-4 md:px-10 lg:px-12 pt-24 md:pt-32 lg:pt-48 xl:pt-52 pb-20 max-w-[1440px] 2xl:px-0 mx-auto flex flex-col gap-12 min-h-[50vh]">
      <header>
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl uppercase font-nunito-sans text-center font-black italic">
          tus favoritos
        </h1>
      </header>
      <MainContent />
    </main>
  );
}
