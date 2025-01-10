"use client";
import { Input } from "@nextui-org/input";
import React from "react";
import {
  FieldErrors,
  FieldValues,
  UseFormRegister,
  ValidationRule,
} from "react-hook-form";

interface Props {
  customStyles?: string;
  id: string;
  type: React.HTMLInputTypeAttribute;
  placeholder: string;
  nombreInput: string;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors<FieldValues>;
  pattern?: ValidationRule<RegExp> | undefined;
  minLength?: ValidationRule<number> | undefined;
  maxLength?: ValidationRule<number> | undefined;
}

export default function CustomInput({
  customStyles,
  id,
  type,
  placeholder,
  nombreInput,
  register,
  errors,
  pattern,
  minLength,
  maxLength,
}: Props) {
  return (
    <>
      <Input
        id={id}
        {...register(nombreInput, {
          required: "Este campo es obligatorio",
          minLength,
          pattern,
          maxLength,
        })}
        isClearable
        isRequired
        className={`first-letter:uppercase ${customStyles}`}
        type={type}
        label={nombreInput}
        placeholder={placeholder}
        variant="bordered"
        errorMessage={errors[nombreInput]?.message as string | undefined}
        labelPlacement="outside"
        isInvalid={errors[nombreInput]?.message as boolean | undefined}
        classNames={{
          label: "first-letter:uppercase text-xs lg:text-sm",
          inputWrapper: "border border-main-white/20",
        }}
      />
    </>
  );
}
