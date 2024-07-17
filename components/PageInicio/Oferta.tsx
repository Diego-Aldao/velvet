import Link from "next/link";
import React from "react";

export default function Oferta() {
  return (
    <section className="flex px-4 md:px-10 lg:px-12 flex-col gap-4 pt-12 pb-4 items-center justify-center mb-20 bg-secondary text-center">
      <span className="uppercase text-sm font-nunito-sans text-main-white font-bold lg:text-base ">
        velvet premier party
      </span>
      <span className="uppercase text-main-white text-3xl max-w-[300px] md:max-w-full sm:text-3xl font-bold md:text-4xl">
        hazte miembro por el 25% en todo mañana!
      </span>
      <Link
        href=""
        className=" flex items-center gap-1 uppercase bg-transparent border border-main-white tracking-wide text-main-white  py-2 px-6 text-sm lg:text-base  rounded-full  font-bold lg:px-4"
      >
        <span>registrarme</span>
        <span className="icon-[tabler--arrow-narrow-right] w-6 h-6"></span>
      </Link>
      <span className="text-[10px] text-main-white font-medium mt-4">
        Se aplican terminos y condiciones. Solo por tiempo limitado
      </span>
    </section>
  );
}
