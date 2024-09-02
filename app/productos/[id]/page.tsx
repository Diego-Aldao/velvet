import React from "react";
import MainContent from "@/components/PageProductos/MainContent";

interface Props {
  params: { id: string };
}

export default function Page({ params }: Props) {
  const { id } = params;
  return (
    <main className="px-4 md:px-10 lg:px-12 pt-24 md:pt-32 lg:pt-48 xl:pt-52 pb-20 min-h-[200vh]">
      <MainContent idCategoria={id} />
    </main>
  );
}
