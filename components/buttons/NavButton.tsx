import Link from "next/link";
import React from "react";

interface PropsClick {
  handleClick: () => void;
  icon: string;
  customStyles?: string;
}
export function NavButtonClick({
  handleClick,
  icon,
  customStyles,
}: PropsClick) {
  return (
    <button
      onClick={handleClick}
      className={`flex items-center justify-center ${customStyles}`}
    >
      <NavButton icon={icon} />
    </button>
  );
}

interface PropsDestino {
  destino: string;
  icon: string;
}
export function NavButtonDestino({ destino, icon }: PropsDestino) {
  return (
    <Link href={destino} className="flex items-center justify-center">
      <NavButton icon={icon} />
    </Link>
  );
}

interface Props {
  icon: string;
}
export default function NavButton({ icon }: Props) {
  return <span className={`${icon} h-6 w-6`}></span>;
}
