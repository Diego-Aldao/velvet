import React from "react";
import MainContent from "@/components/PageProductos/MainContent";

interface Props {
  params: { id: string };
}

export default async function Page({ params }: Props) {
  const { id } = params;
  return (
    <main className="px-4 md:px-10 lg:px-12 pt-40 lg:pt-56 xl:pt-60">
      <MainContent idCategoria={id} />
    </main>
  );
}
