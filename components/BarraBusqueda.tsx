"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import BusquedaButton from "./buttons/BusquedaButton";

export default function BarraBusqueda() {
  const [value, setValue] = useState<string>("");
  const router = useRouter();

  const handleOnChange = (value: string) => {
    setValue(value);
  };

  const HandleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const valueEncode = encodeURIComponent(value);
    router.push(`/busqueda?query=${valueEncode}`);
  };

  return (
    <form
      className="bg-secondary-black rounded-full flex items-center w-full p-[6px] pr-3 gap-2 pointer-events-auto has-[input:focus]:border-main-white/15 border border-transparent transition-[border-color]"
      onSubmit={(e) => HandleSubmit(e)}
    >
      <BusquedaButton />
      <input
        type="text"
        placeholder="Vestidos de fiesta, gafas de sol..."
        className="bg-transparent border-0 outline-0 h-full placeholder:text-main-white/25 w-full placeholder:text-xs text-sm md:text-base md:placeholder:text-base"
        value={value}
        onChange={(e) => handleOnChange(e.target.value)}
      />
    </form>
  );
}
