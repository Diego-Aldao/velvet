import React from "react";

interface Props {
  fieldName: string;
  children: React.ReactNode;
  customStyles?: string;
  fieldsetCompleted?: boolean;
}

export default function CustomFieldset({
  fieldName,
  children,
  customStyles,
  fieldsetCompleted,
}: Props) {
  return (
    <fieldset
      className={`w-full border border-main-white/10 rounded-md p-1 pb-4 ${customStyles} overflow-hidden ${
        fieldsetCompleted ? "border-primary/20" : "border-main-white/10"
      }`}
    >
      <legend className="text-sm py-1 pr-4 pl-2 flex items-center gap-4">
        <span className="first-letter:uppercase">{fieldName}</span>
        <span
          className={`icon-[tabler--check] text-primary h-5 w-5 relative transition-all ${
            fieldsetCompleted ? "top-0 opacity-100" : "top-1 opacity-0"
          }`}
        ></span>
      </legend>
      {children}
    </fieldset>
  );
}
