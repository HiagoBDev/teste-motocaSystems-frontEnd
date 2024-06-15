import { SelectHTMLAttributes } from "react";
import { UseFormRegisterReturn } from "react-hook-form";
import { twMerge } from "tailwind-merge";

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  register?: UseFormRegisterReturn;
  errorMessage?: string | null;
  label: string;
}

export default function Select({ register, errorMessage, label, ...rest }: SelectProps) {
  return (
    <fieldset
      className={twMerge(
        "border-[0.5px] border-[#E7E3FC] rounded-[5px] bg-transparent w-full mb-4 max-w-[419px]",
        errorMessage && "border-red-500"
      )}
    >
      <legend
        className={twMerge(
          "mx-2 px-2 font-medium text-sm text-[#E7E3FC]",
          errorMessage && "text-red-500"
        )}
      >
        <label htmlFor={label}>{label}</label>
      </legend>
      <select
        {...register}
        id={label}
        className={twMerge(
          "custom-select pl-[15px] mb-2 w-full text-[#E7E3FC] focus:outline-none bg-[#2A233C] h-[30px] border-black"
        )}
        {...rest}
      >
        <option value=""></option>
        <option value="Em trânsito">Em trânsito</option>
        <option value="Em estoque">Em estoque</option>
        <option value="Sem estoque">Sem estoque</option>
      </select>
    </fieldset>
  );
}
