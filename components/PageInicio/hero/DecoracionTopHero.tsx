import React from "react";

interface Props {
  children: React.ReactNode;
}

export default function DecoracionTopHero({ children }: Props) {
  return (
    <div className="w-full lg:absolute lg:top-0 lg:z-10 flex justify-center pointer-events-none">
      <div className="deco overflow-hidden w-14 h-14 relative hidden lg:block"></div>
      <div className="children-container w-full bg-main-black max-w-[500px] lg:max-w-[700px] lg:px-8 rounded-b-xl lg:pb-4 relative lg:-top-11 xl:max-w-[800px] md:max-w-[600px]">
        {children}
      </div>
      <div className="deco deco-izquierda overflow-hidden w-14 h-14 relative hidden lg:block"></div>
    </div>
  );
}
