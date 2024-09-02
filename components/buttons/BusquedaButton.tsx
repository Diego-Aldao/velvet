import React from "react";

export default function BusquedaButton() {
  return (
    <button className="bg-primary flex items-center justify-center rounded-full p-2 gap-2 md:px-4">
      <span className="hidden md:inline-block text-main-black capitalize font-semibold">
        buscar
      </span>
      <span className="icon-[tabler--search] text-main-black"></span>
    </button>
  );
}
