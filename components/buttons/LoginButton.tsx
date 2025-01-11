import React from "react";

interface PropsSocial extends Pick<Props, "nombre" | "customStyles"> {
  icono: string;
}

export function LoginButtonSocial({
  nombre,
  customStyles,
  icono,
}: PropsSocial) {
  return (
    <LoginButton nombre={nombre} customStyles={customStyles}>
      <span className={`${icono}`}></span>
    </LoginButton>
  );
}

interface Props {
  nombre: string;
  customStyles?: string;
  children?: React.ReactNode;
}

export default function LoginButton({ nombre, customStyles, children }: Props) {
  return (
    <button
      className={`w-full rounded-full text-xs font-semibold py-2 max-w-[300px] sm:text-sm lg:text-base ${customStyles}`}
    >
      {children}
      <span className="first-letter:uppercase">{nombre}</span>
    </button>
  );
}
