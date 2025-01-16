"use client";
import { Envio } from "@/types/localTypes";
import { useEffect, useState } from "react";

export default function useEnvio() {
  const [currentEnvio, setCurrentEnvio] = useState<Envio | null>(null);
  useEffect(() => {
    if (currentEnvio == null) return;
    localStorage.setItem("currentEnvio", JSON.stringify(currentEnvio));
  }, [currentEnvio]);

  useEffect(() => {
    const storedEnvio = localStorage.getItem("currentEnvio");
    if (!storedEnvio) return;
    const parsedEnvio = JSON.parse(storedEnvio);
    setCurrentEnvio(parsedEnvio);
  }, []);

  return { currentEnvio, setCurrentEnvio };
}
