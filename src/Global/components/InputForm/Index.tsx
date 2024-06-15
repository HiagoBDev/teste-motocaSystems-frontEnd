import { twMerge } from "tailwind-merge";
import classNames from "classnames";
import { InputFormProps } from "./InputFormProps";
import InputMask from "react-input-mask";
import { ChangeEvent, useState } from "react";

export default function InputForm({ label, placeholder, register, type, errorMessage, value, disabled, onChange, mask }: InputFormProps) {
  const [inputValue, setInputValue] = useState(value);

  const legendClasses = classNames({
    "text-[#E7E3FC80]": disabled, 
    "text-[#E7E3FC]": !disabled, 
    "text-red-500": errorMessage,
  });

  const fieldsetClasses = classNames({
    "border-[#E7E3FC80]": disabled,
    "border-[#E7E3FC]": !disabled,
    "border-red-500": errorMessage,
  });

  const inputClasses = classNames({
    "text-[#E7E3FC80]": disabled,
    "text-[#E7E3FC]": !disabled,
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setInputValue(newValue);
    if (onChange) {
      onChange(e);
    }
  };

  return (
    <div className="w-full max-w-[419px]">
      <fieldset className={twMerge("border-[0.5px] rounded-[5px] bg-transparent w-full max-w-[419px]", fieldsetClasses)}>
        <legend className={twMerge("mx-2 px-2 font", legendClasses)}>
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
            className={twMerge("pl-[15px] mb-2 pt w-full focus:outline-none bg-transparent h-[30px] border-none", inputClasses)}
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
            className={twMerge("pl-[15px] mb-2 pt w-full focus:outline-none bg-transparent h-[30px] border-none", inputClasses)}
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
