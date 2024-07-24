import React from "react";
import MainContent from "@/components/PageDetalle/MainContent";

interface Props {
  params: { id: string };
}

export default function PageDetalleID({ params }: Props) {
  const { id } = params;
  return <MainContent id={id} />;
}
