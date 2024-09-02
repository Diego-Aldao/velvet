import React from "react";

interface Props {
  nombre: string;
  children: React.ReactNode;
}

interface PropsAdd extends Pick<Props, "nombre"> {}

export function CustomToastRemove({ nombre }: PropsAdd) {
  return (
    <CustomToast nombre={`${nombre} quitado de favoritos`}>
      <span className="icon-[tabler--heart-minus] 2xl:h-5 2xl:w-5 text-main-red"></span>
    </CustomToast>
  );
}

export function CustomToastAdd({ nombre }: PropsAdd) {
  return (
    <CustomToast nombre={`${nombre} añadido a favoritos`}>
      <span className="icon-[tabler--heart-plus] 2xl:h-5 2xl:w-5 text-primary"></span>
    </CustomToast>
  );
}

export default function CustomToast({ nombre, children }: Props) {
  return (
    <div className="flex gap-2 items-center">
      <span className="flex items-center justify-center p-1 2xl:p-[6px] bg-main-black rounded-full">
        {children}
      </span>
      <span className="font-semibold first-letter:uppercase text-xs lg:text-sm text-main-white">
        {nombre}
      </span>
    </div>
  );
}
