import React from "react";

interface Props {
  children: React.ReactNode;
}

export default function ContainerMainGrid({ children }: Props) {
  return (
    <section className="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-4 2xl:grid-cols-4">
      {children}
    </section>
  );
}
