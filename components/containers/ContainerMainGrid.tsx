import React from "react";

interface Props {
  children: React.ReactNode;
  customStyles: string;
}

export default function ContainerMainGrid({ children, customStyles }: Props) {
  return (
    <section
      className={`grid h-fit w-full grid-cols-2 sm:grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-4 gap-x-2 lg:grid-cols-3  xl:grid-cols-4 ${customStyles}`}
    >
      {children}
    </section>
  );
}
