import { ButtonHTMLAttributes } from "react";

interface MotoActionProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: string;
  alt: string;
}

export default function MotoAction({ icon, alt, ...rest }:MotoActionProps) {
  return (
    <button
    {...rest}
    >
      <img src={icon} alt={alt} className="mr-2" />
    </button>
  )
}
