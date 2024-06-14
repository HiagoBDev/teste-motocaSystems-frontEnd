import { InputHTMLAttributes } from "react";
import { UseFormRegisterReturn } from "react-hook-form";

export interface InputFormProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  placeholder?: string;
  errorMessage?: string | null;
  register?: UseFormRegisterReturn;
  type: string;
  value?: string;
  disabled?: boolean;
  mask?: string;
}