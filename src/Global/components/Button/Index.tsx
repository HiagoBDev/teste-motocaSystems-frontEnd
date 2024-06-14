import { twMerge } from "tailwind-merge";
import classNames from "classnames";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size: 'small' | 'large';
  icon: string;
}

export default function Button({ size, onClick, children, icon, ...props }: ButtonProps) {
  const sizeClasses = classNames({
    "px-2 py-3 text-xs": size === 'small',
    "w-full max-w-[419px] h-[45px] items-center justify-center py-6 text-base ": size === 'large',
  });

  return (
    <button
    type="submit"
      {...props}
      className={twMerge(
        "bg-[#3BADFB] rounded-[5px] flex items-center gap-1  text-white h-[34px] font-semibold hover:opacity-80 active:opacity-100",
        sizeClasses
      )}
      onClick={onClick}
    >
      {icon && <img src={icon} alt={`icone de ${children}`} />}
      {children}
    </button>
  );
}
