import React from "react";
import CustomFieldset from "./CustomFieldset";
import CustomInput from "@/components/inputs/CustomInput";
import { LISTADO_DE_PAISES } from "@/data/data";
import { Select, SelectItem } from "@nextui-org/select";

const ListadoInputsEntrega = [
  {
    nombreInput: "nombre completo",
    customStyles: "",
    id: "nombrecompleto",
    type: "text",
    placeholder: "Ingresa tu nombre completo",
  },
  {
    nombreInput: "email",
    customStyles: "sm:w-[calc(50%-8px)]",
    id: "email",
    type: "email",
    placeholder: "Ingresa tu correo electrónico",
  },
  {
    nombreInput: "confirmacion de email",
    customStyles: "sm:w-[calc(50%-8px)]",
    id: "emailconfirmation",
    type: "email",
    placeholder: "Confirma tu correo electrónico",
  },
  {
    nombreInput: "número de teléfono",
    customStyles: "",
    id: "telefono",
    type: "tel",
    placeholder: "Ingresa tu número de telefono",
  },
  {
    nombreInput: "Nombre de la calle y número de la casa",
    customStyles: "",
    id: "direccion",
    type: "text",
    placeholder: "Nombre de la calle y número de la calle",
  },
  {
    nombreInput: "ciudad",
    customStyles: "sm:w-[calc(50%-8px)]",
    id: "ciudad",
    type: "text",
    placeholder: "Ciudad",
  },
  {
    nombreInput: "código postal",
    customStyles: "sm:w-[calc(50%-8px)]",
    id: "código postal",
    type: "text",
    placeholder: "Ingresa tu código postal",
  },
];

interface Props {
  direccionCorrecta: boolean;
  setDireccionCorrecta: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function DireccionDeEntrega({
  direccionCorrecta,
  setDireccionCorrecta,
}: Props) {
  return (
    <CustomFieldset
      fieldsetCompleted={direccionCorrecta}
      fieldName="direccion de entrega"
      customStyles="md:col-start-1"
    >
      <div className="flex flex-wrap gap-4 md:gap-y-6 xl:gap-y-8 px-2 mt-4">
        {ListadoInputsEntrega.slice(0, 4).map((input) => (
          <CustomInput
            key={input.id}
            nombreInput={input.nombreInput}
            customStyles={input.customStyles}
            id={input.id}
            type={input.type}
            placeholder={input.placeholder}
          />
        ))}
        <Select
          items={LISTADO_DE_PAISES}
          label="país de envío"
          placeholder="Selecciona un país"
          radius="sm"
          isRequired
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
        {ListadoInputsEntrega.slice(4, 7).map((input) => (
          <CustomInput
            key={input.id}
            nombreInput={input.nombreInput}
            customStyles={input.customStyles}
            id={input.id}
            type={input.type}
            placeholder={input.placeholder}
          />
        ))}
      </div>
    </CustomFieldset>
  );
}
