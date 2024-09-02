import React from "react";

interface Props {
  children: React.ReactNode;
  customStyles?: string;
}

export default function ContenedorImagen({ children, customStyles }: Props) {
  return (
    <div className={`rounded-md overflow-hidden w-full h-full ${customStyles}`}>
      {children}
    </div>
  );
}
