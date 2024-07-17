import React from "react";

interface Props {
  children: React.ReactNode;
}

export default function PageInicioMainContainer({ children }: Props) {
  return <main className="mt-16 md:mt-20 lg:mt-44 xl:mt-52">{children}</main>;
}
