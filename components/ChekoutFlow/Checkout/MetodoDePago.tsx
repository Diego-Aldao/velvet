"use client";
import CustomInput from "@/components/inputs/CustomInput";
import React from "react";
import CustomFieldset from "./CustomFieldset";
import { useForm } from "react-hook-form";

interface Props {
  setDatosCorrectos: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function MetodoDePago({ setDatosCorrectos }: Props) {
  const { register, handleSubmit, formState } = useForm();
  const listadoInputsPago = [
    {
      nombreInput: "número de la tarjeta",
      customStyles: "",
      id: "numerotarjeta",
      type: "tel",
      placeholder: "xxxx-xxxx-xxxx-xxxx",
      pattern: {
        value:
          /^(?:4[0-9]{12}(?:[0-9]{3})?|[25][1-7][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/,
        message: "formato incorrecto",
      },
    },
    {
      nombreInput: "Nombre en la tarjeta",
      customStyles: "",
      id: "nombretarjeta",
      type: "text",
      placeholder: "Ingresa el nombre en la tarjeta",
      minLength: {
        value: 4,
        message: "La longitud minima es de 4 caracteres",
      },
      maxLength: {
        value: 30,
        message: "La longitud máxima es de 30 caracteres",
      },
    },
    {
      nombreInput: "Vencimiento de la tarjeta",
      customStyles: "sm:w-[calc(50%-8px)]",
      id: "vencimiento",
      type: "month",
      placeholder: "xx-xx",
    },
    {
      nombreInput: "ccv (numero de seguridad)",
      customStyles: "sm:w-[calc(50%-8px)]",
      id: "ccv",
      type: "num",
      placeholder: "xxx",
      minLength: {
        value: 3,
        message: "La longitud minima es de 3 caracteres",
      },
      maxLength: {
        value: 4,
        message: "La longitud máxima es de 4 caracteres",
      },
    },
  ];
  return (
    <section className="grid gap-8 max-w-[450px] mx-auto md:max-w-[550px] w-full lg:max-w-full lg:grid-cols-[1fr,350px] xl:grid-cols-[1fr,450px]">
      <form
        onSubmit={handleSubmit(() => {
          setDatosCorrectos(true);
          localStorage.removeItem("carrito");
        })}
      >
        <CustomFieldset
          fieldsetError={!formState.isValid && formState.isSubmitted}
          fieldName="selecciona un metodo de pago"
          fieldsetCompleted={formState.isValid}
        >
          <div className="flex flex-col gap-4 mt-4 px-2">
            {listadoInputsPago.map((input) => (
              <CustomInput
                key={input.id}
                register={register}
                errors={formState.errors}
                id={input.nombreInput}
                type={input.type}
                nombreInput={input.nombreInput}
                placeholder={input.placeholder}
                maxLength={input.maxLength}
                minLength={input.minLength}
                pattern={input.pattern}
              />
            ))}
          </div>
        </CustomFieldset>
        <button
          type="submit"
          className="w-full py-1 flex items-center justify-center gap-4 bg-primary text-main-black rounded-md font-bold uppercase mt-4"
        >
          <span>confirmar compra</span>
        </button>
      </form>
    </section>
  );
}
