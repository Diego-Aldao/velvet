import Image from "next/image";
import React from "react";
import imagenRegistro from "@/assets/register.webp";
import LoginButton, { LoginButtonSocial } from "../buttons/LoginButton";

interface Props {
  modalVisible: boolean;
  setModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function ModalRegistro({
  modalVisible,
  setModalVisible,
}: Props) {
  return (
    <div
      onClick={() => setModalVisible(false)}
      className={`fixed inset-0 flex items-center justify-center px-4 md:px-10 lg:px-12 transition-all ${
        modalVisible
          ? "z-50 bg-main-black/75 pointer-events-auto opacity-100 visible delay-0"
          : "-z-50 bg-transparent pointer-events-none opacity-0 invisible delay-200"
      }`}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`flex relative rounded-xl overflow-hidden p-2 lg:p-4 md:gap-4 w-full max-w-[450px] md:max-w-[800px] md:h-[500px] bg-secondary-black ${
          modalVisible
            ? "top-0 opacity-100 visible delay-200"
            : "top-4 invisible opacity-0 delay-0"
        } relative transition-all`}
      >
        <button
          onClick={() => setModalVisible(false)}
          className={`boton-cerrar absolute right-6 rounded-full p-2 flex items-center justify-center bg-main-black z-10 transition-all ${
            modalVisible
              ? "top-6 opacity-100 visible delay-300"
              : "top-12 invisible opacity-0 delay-0"
          }`}
        >
          <span className="icon-[tabler--x]"></span>
        </button>
        <div className="info md:w-1/2 w-full bg-main-black rounded-xl p-8 flex flex-col gap-4 items-center">
          <header className="flex flex-col gap-2 mb-4">
            <span className="font-bold font-nunito-sans sm:text-2xl lg:text-3xl first-letter:uppercase text-xl">
              regístrate en Velvet
            </span>
            <span className="text-xs first-letter:uppercase lg:text-sm">
              la mejor tienda de ropa de la vida
            </span>
          </header>
          <LoginButton
            nombre="Continuar con Email"
            customStyles="text-main-black bg-primary"
          />
          <div className="separador flex gap-2 items-center w-full max-w-[300px]">
            <span className="h-[1px] w-full bg-main-white/15"></span>
            <span>o</span>
            <span className="h-[1px] w-full bg-main-white/15"></span>
          </div>
          <LoginButtonSocial
            nombre="continuar con Google"
            icono="icon-[tabler--brand-google-filled] w-5 h-5"
            customStyles="flex gap-2 items-center justify-center"
          />
          <LoginButtonSocial
            nombre="continuar con Facebook"
            icono="icon-[logos--facebook] h-5 w-5"
            customStyles="flex gap-2 items-center justify-center"
          />
          <LoginButtonSocial
            nombre="continuar con Apple"
            icono="icon-[tabler--brand-apple-filled] h-5 w-5"
            customStyles="flex gap-2 items-center justify-center"
          />

          <span className="mt-4 text-xs first-letter:uppercase">
            si continuas, aceptas nuestra{" "}
            <span className="text-primary">politica de privacidad</span> y{" "}
            <span className="text-primary">terminos de uso</span>
          </span>
        </div>
        <div className="imagen hidden md:block w-1/2 rounded-xl overflow-hidden relative after:absolute after:inset-0 after:bg-main-black/25">
          <Image
            src={imagenRegistro}
            alt=""
            width={0}
            height={0}
            sizes="100vw"
          />
        </div>
      </div>
    </div>
  );
}
