import React from "react";

interface Props {
  children: React.ReactNode;
}

export default function ContainerChekoutFlow({ children }: Props) {
  return (
    <main className="px-4 md:px-10 lg:px-12 pt-24 md:pt-32 lg:pt-48 xl:pt-52 pb-20 max-w-7xl 2xl:px-0 mx-auto flex flex-col gap-12">
      {children}
    </main>
  );
}
