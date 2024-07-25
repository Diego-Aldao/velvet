import React from "react";

interface Props {
  children: React.ReactNode;
}

export default function PageDetalleMainContainer({ children }: Props) {
  return (
    <main className="mt-16 md:mt-24 lg:mt-36 xl:mt-40 grid md:grid-cols-[3fr,1.5fr] lg:grid-cols-[600px,300px] xl:grid-cols-[650px,350px] gap-4 px-4 min-h-screen md:px-10 lg:px-12 lg:w-fit max-w-[1440px] 2xl:px-0 mx-auto pb-20">
      {children}
    </main>
  );
}
