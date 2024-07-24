import Link from "next/link";
import React from "react";

interface Props {
  customStyles?: string;
  customIcon: string;
}

interface PropsLink extends Pick<Props, "customStyles" | "customIcon"> {
  destino: string;
}
export function IconButtonLink({
  customStyles,
  customIcon,
  destino,
}: PropsLink) {
  return (
    <Link href={destino} className={customStyles}>
      <IconButton customIcon={customIcon} customStyles={customStyles} />
    </Link>
  );
}

export default function IconButton({ customStyles, customIcon }: Props) {
  return (
    <div
      className={`p-1 rounded-full flex items-center justify-center bg-secondary-black hover:text-main-black hover:bg-primary transition-colors ${customStyles}`}
    >
      <span className={`${customIcon}`}></span>
    </div>
  );
}
