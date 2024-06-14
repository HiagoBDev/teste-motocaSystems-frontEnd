import classNames from "classnames";
import { UseFormRegisterReturn } from "react-hook-form";
import { twMerge } from "tailwind-merge";

interface SelectProps {
  register?: UseFormRegisterReturn;
  errorMessage?: string | null;
}



export default function Select({ register, errorMessage }:SelectProps) {

  const fieldsetClasses = classNames({
    "border-red-500": errorMessage,
  });
  const legendClasses = classNames({
    "text-red-500": errorMessage,
  });

  return (
    <>
      <fieldset className={twMerge("border-[0.5px] border-[#E7E3FC] rounded-[5px] bg-transparent w-full mb-4 max-w-[419px]", fieldsetClasses)}>
          <legend className={twMerge("mx-2 px-2 font-medium text-sm lg:text-lg text-[#E7E3FC]", legendClasses)}>
            <label htmlFor="status">Status</label>
          </legend>
          <select
            {...register}
            id="status"
            className="custom-select pl-[15px] mb-2 w-full text-[#E7E3FC] focus:outline-none bg-[#2A233C] h-[30px] border-black"

          >
            <option value=""></option>
            <option value="Em trânsito">Em trânsito</option>
            <option value="Em estoque">Em estoque</option>
            <option value="Sem estoque">Sem estoque</option>
          </select>
      </fieldset>
    </>
  )
}
