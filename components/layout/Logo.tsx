import React from "react";

interface Props {
  customStyles: string;
  customTextSize?: string;
}

export default function Logo({ customStyles, customTextSize }: Props) {
  return (
    <div className={`flex items-center justify-center ${customStyles}`}>
      <span
        className={`font-nunito-sans font-[1000] uppercase text-2xl md:text-3xl xl:text-4xl italic text-primary ${customTextSize}`}
      >
        Velvet
      </span>
    </div>
  );
}
