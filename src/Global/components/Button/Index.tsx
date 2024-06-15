import { twMerge } from "tailwind-merge";
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size: 'small' | 'large';
  icon: string;
}

export default function Button({ size, onClick, children, icon, ...props }: ButtonProps) {
  return (
    <button
      type="submit"
      {...props}
      className={twMerge(
        "bg-[#3BADFB] rounded-[5px] flex items-center gap-1 text-white h-[34px] font-semibold hover:opacity-80 active:opacity-100",
        size === 'small' && "px-2 py-3 text-xs uppercase",
        size === 'large' && "w-full max-w-[419px] h-[45px] items-center justify-center py-6 text-base uppercase"
      )}
      onClick={onClick}
    >
      {icon && <img src={icon} alt={`Ícone de ${children}`} />}
      {children}
    </button>
  );
}
