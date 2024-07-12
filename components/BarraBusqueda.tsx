"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

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
      className="bg-secondary-black rounded-full flex items-center w-full p-[6px] pr-3 gap-2 pointer-events-auto"
      onSubmit={(e) => HandleSubmit(e)}
    >
      <button className="bg-primary flex items-center justify-center rounded-full p-2 gap-2 md:px-4">
        <span className="hidden md:inline-block text-main-black capitalize font-medium">
          buscar
        </span>
        <span className="icon-[tabler--search] text-main-black"></span>
      </button>
      <input
        type="text"
        placeholder="Vestidos, remeras, zapatos..."
        className="bg-transparent border-0 outline-0 h-full placeholder:text-main-white/25 w-full"
        value={value}
        onChange={(e) => handleOnChange(e.target.value)}
      />
    </form>
  );
}
