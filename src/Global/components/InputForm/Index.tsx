import { twMerge } from "tailwind-merge";
import { InputFormProps } from "./InputFormProps";
import InputMask from "react-input-mask";
import { ChangeEvent, useState } from "react";

export default function InputForm({ label, placeholder, register, type, errorMessage, value, disabled, onChange, mask }: InputFormProps) {

  const [inputValue, setInputValue] = useState(value);
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setInputValue(newValue);
    if (onChange) {
      onChange(e);
    }
  };
  

  return (
    <div className="w-full max-w-[419px]">
      <fieldset
        className={twMerge(
          "border-[0.5px] rounded-[5px] bg-transparent w-full max-w-[419px]",
          disabled ? "border-[#E7E3FC80]" : "border-[#E7E3FC]",
          errorMessage && "border-red-500"
        )}
      >
        <legend
          className={twMerge(
            "mx-2 px-2 font",
            disabled ? "text-[#E7E3FC80]" : "text-[#E7E3FC]",
            errorMessage && "text-red-500"
          )}
        >
          <label htmlFor={label}>{label}</label>
        </legend>
        {mask ? (
          <InputMask
            mask={mask}
            maskChar=""
            {...register}
            disabled={disabled}
            id={label}
            type={type}
            placeholder={placeholder}
            className={twMerge(
              "pl-[15px] mb-2 pt w-full focus:outline-none bg-transparent h-[30px] border-none",
              disabled ? "text-[#E7E3FC80]" : "text-[#E7E3FC]"
            )}
            value={inputValue}
            onChange={handleChange}
          />
        ) : (
          <input
            {...register}
            disabled={disabled}
            id={label}
            type={type}
            placeholder={placeholder}
            className={twMerge(
              "pl-[15px] mb-2 pt w-full focus:outline-none bg-transparent h-[30px] border-none",
              disabled ? "text-[#E7E3FC80]" : "text-[#E7E3FC]"
            )}
            value={inputValue}
            onChange={handleChange}
          />
        )}
      </fieldset>
      {errorMessage && (
        <p className="text-red-500 text-base lg:text-lg pt-1 pl-2">
          {errorMessage}
        </p>
      )}
    </div>
  );
}
