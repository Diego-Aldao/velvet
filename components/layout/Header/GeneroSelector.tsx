"use client";
import GeneroButton from "@/components/buttons/PageInicio/GeneroButton";
import { usePathname } from "next/navigation";
import React from "react";

export default function GeneroSelector() {
  const pathname = usePathname();
  const pathHombre = pathname.includes("hombre");
  return (
    <div className="generos hidden lg:flex items-center gap-4">
      <GeneroButton nombre="mujer" path="/" checked={!pathHombre} />
      <GeneroButton nombre="hombre" path="/hombre" checked={pathHombre} />
    </div>
  );
}
