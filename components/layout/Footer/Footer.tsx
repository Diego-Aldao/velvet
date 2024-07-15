import React from "react";
import ListadoFooter from "./ListadoFooter";
import MainContentFooter from "./MainContentFooter";
import Copy from "./Copy";

export default function Footer() {
  return (
    <footer className="px-4 md:px-8 lg:px-12 flex flex-col gap-8 max-w-[1440px] mx-auto 2xl:px-0">
      <MainContentFooter />
      <ListadoFooter />
      <Copy />
    </footer>
  );
}
