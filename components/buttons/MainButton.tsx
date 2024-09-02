import Link from "next/link";
import React from "react";

interface Props {
  destino: string;
  nombreDestino: string;
  customStyles?: string;
}

interface PropsButtonInteractive
  extends Pick<Props, "nombreDestino" | "customStyles"> {
  handleClick: () => void;
}

export function MainButtonInteractive({
  nombreDestino,
  customStyles,
  handleClick,
}: PropsButtonInteractive) {
  return (
    <button
      onClick={handleClick}
      className={`flex items-center gap-1 first-letter:uppercase border hover:border-primary hover:text-primary transition-colors group border-main-white py-1 px-2 text-xs rounded-full font-semibold lg:px-4 ${customStyles}`}
    >
      <span className="first-letter:uppercase text-inherit">
        {nombreDestino}
      </span>
      <span className="icon-[tabler--arrow-narrow-right] group-hover:left-1 relative transition-all left-0"></span>
    </button>
  );
}

export default function MainButton({
  destino,
  nombreDestino,
  customStyles,
}: Props) {
  return (
    <Link
      href={destino}
      className={`flex items-center gap-1 first-letter:uppercase border hover:border-primary hover:text-primary transition-colors group border-main-white py-1 px-2 text-xs rounded-full font-semibold lg:px-4 ${customStyles}`}
    >
      <span className="first-letter:uppercase text-inherit">
        {nombreDestino}
      </span>
      <span className="icon-[tabler--arrow-narrow-right] group-hover:left-1 relative transition-all left-0"></span>
    </Link>
  );
}
