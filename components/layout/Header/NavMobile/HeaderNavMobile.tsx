import { NavButtonClick } from "@/components/buttons/NavButton";
import React from "react";

interface Props {
  handleClick: () => void;
  menuVisible: boolean;
}

export default function HeaderNavMobile({ handleClick, menuVisible }: Props) {
  return (
    <header className="w-full flex justify-between items-center">
      <span className="uppercase font-nunito-sans text-primary font-[1000] italic text-2xl md:text-3xl">
        velvet
      </span>
      <NavButtonClick
        handleClick={handleClick}
        icon="icon-[tabler--x]"
        customStyles={`rounded-full bg-main-black text-xl p-2 self-end transition-all relative ${
          menuVisible
            ? "top-0 opacity-100 visible delay-300"
            : "top-4 opacity-0 invisible delay-0"
        }`}
      />
    </header>
  );
}
