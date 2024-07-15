import { Navigation } from "@/types/fetchTypes";
import React from "react";

interface Props {
  subCategoria: Navigation;
  children: React.ReactNode;
}

export default function ListItemSubCategoria({
  subCategoria,
  children,
}: Props) {
  const noTitle = subCategoria.style.mobileStyleType === "noTitle";
  return (
    <li className="w-full min-w-full max-w-full">
      {!noTitle && (
        <span className="w-full bg-main-black rounded-md font-bold font-nunito-sans block uppercase text-sm p-2 mb-4">
          {subCategoria.content.title}
        </span>
      )}
      {children}
    </li>
  );
}
