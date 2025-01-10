"use client";
import React from "react";
import CustomFieldset from "./CustomFieldset";
import CustomInput from "@/components/inputs/CustomInput";
import { LISTADO_PAISES_ENVIO } from "@/constants";
import { Select, SelectItem } from "@nextui-org/select";
import { useForm } from "react-hook-form";

const ListadoInputsEntrega = [
  {
    nombreInput: "nombre completo",
    customStyles: "",
    id: "nombrecompleto",
    type: "text",
    placeholder: "Ingresa tu nombre completo",
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
    nombreInput: "email",
    customStyles: "sm:w-[calc(50%-8px)]",
    id: "email",
    type: "email",
    placeholder: "Ingresa tu correo electrónico",
    pattern: {
      value: /^\S+@\S+$/i,
      message: "Email no válido",
    },
    maxLength: {
      value: 30,
      message: "La longitud máxima es de 30 caracteres",
    },
  },
  {
    nombreInput: "teléfono",
    customStyles: "sm:w-[calc(50%-8px)]",
    id: "telefono",
    type: "number",
    placeholder: "Ingresa tu número de telefono",
    minLength: {
      value: 4,
      message: "La longitud minima es de 4 caracteres",
    },
    maxLength: {
      value: 20,
      message: "La longitud máxima es de 20 caracteres",
    },
  },
  {
    nombreInput: "dirección",
    customStyles: "",
    id: "direccion",
    type: "text",
    placeholder: "Nombre y número de la calle",
    minLength: {
      value: 4,
      message: "La longitud minima es de 4 caracteres",
    },
    maxLength: {
      value: 40,
      message: "La longitud máxima es de 40 caracteres",
    },
  },
  {
    nombreInput: "ciudad",
    customStyles: "sm:w-[calc(50%-8px)]",
    id: "ciudad",
    type: "text",
    placeholder: "Ciudad",
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
    nombreInput: "código postal",
    customStyles: "sm:w-[calc(50%-8px)]",
    id: "código postal",
    type: "number",
    placeholder: "Ingresa tu código postal",
    minLength: {
      value: 4,
      message: "La longitud minima es de 4 números",
    },
    maxLength: {
      value: 10,
      message: "La longitud máxima es de 10 caracteres",
    },
  },
];

interface Props {
  setDireccionCorrecta: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function DireccionDeEntrega({ setDireccionCorrecta }: Props) {
  const { register, handleSubmit, formState } = useForm();

  return (
    <form
      onSubmit={handleSubmit((data) => {
        localStorage.setItem("direccion", JSON.stringify(data));
        setDireccionCorrecta(true);
      })}
    >
      <CustomFieldset
        fieldsetError={formState.isSubmitted && !formState.isValid}
        fieldsetCompleted={formState.isValid}
        fieldName="direccion de entrega"
        customStyles="md:col-start-1"
      >
        <div className="flex flex-wrap gap-4 md:gap-y-6 xl:gap-y-8 px-2 mt-4">
          {ListadoInputsEntrega.slice(0, 3).map((input) => (
            <CustomInput
              key={input.id}
              nombreInput={input.nombreInput}
              customStyles={input.customStyles}
              id={input.id}
              type={input.type}
              placeholder={input.placeholder}
              errors={formState.errors}
              register={register}
              pattern={input.pattern}
              minLength={input.minLength}
              maxLength={input.maxLength}
            />
          ))}
          <Select
            {...register("pais", { required: "Este campo es obligatorio" })}
            errorMessage={formState.errors.pais?.message as string | undefined}
            isInvalid={formState.errors.pais?.message as boolean | undefined}
            isRequired
            items={LISTADO_PAISES_ENVIO}
            label="país de envío"
            placeholder="Selecciona un país"
            radius="sm"
            labelPlacement="outside"
            variant="bordered"
            classNames={{
              trigger: "border border-main-white/20",
              label: "text-xs first-letter:uppercase lg:text-sm",
              value: "text-xs ",
            }}
          >
            {(pais) => (
              <SelectItem key={pais.name} className="text-xs lg:text-sm">
                {pais.es_name}
              </SelectItem>
            )}
          </Select>
          {ListadoInputsEntrega.slice(3, 7).map((input) => (
            <CustomInput
              key={input.id}
              nombreInput={input.nombreInput}
              customStyles={input.customStyles}
              id={input.id}
              type={input.type}
              placeholder={input.placeholder}
              errors={formState.errors}
              register={register}
              pattern={input.pattern}
              minLength={input.minLength}
              maxLength={input.maxLength}
            />
          ))}
        </div>
      </CustomFieldset>

      <button
        type="submit"
        className="w-full py-1 flex items-center justify-center gap-4 bg-primary text-main-black rounded-md font-bold uppercase mt-4"
      >
        <span>elegir envio</span>
        <span className="icon-[tabler--arrow-narrow-right]"></span>
      </button>
    </form>
  );
}
