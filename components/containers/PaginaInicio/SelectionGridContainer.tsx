import React from "react";
interface Props {
  children: React.ReactNode;
}

export default function SelectionGridContainer({ children }: Props) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 grid-rows-[repeat(7,minmax(100px,auto))] sm:grid-rows-[repeat(5,minmax(100px,auto))] lg:grid-rows-[repeat(7,100px)] xl:md:grid-rows-[repeat(7,120px)] gap-2 max-w-[600px] mx-auto md:max-w-[800px] lg:max-w-full lg:grid-cols-3 sm:gap-4">
      {children}
    </div>
  );
}
