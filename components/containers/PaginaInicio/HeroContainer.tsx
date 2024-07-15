import React from "react";

interface Props {
  children: React.ReactNode;
}

export default function HeroContainer({ children }: Props) {
  return (
    <section className="hero px-4 md:px-10 lg:px-4 w-full max-w-full mx-auto xl:px-12 pb-20 relative flex flex-col items-center gap-8 lg:gap-0">
      {children}
    </section>
  );
}
