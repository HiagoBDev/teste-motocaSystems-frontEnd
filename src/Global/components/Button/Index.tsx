import { twMerge } from "tailwind-merge";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>{
  size?: 'small' | 'large';
  icon?: string;
}

export default function Button({ size, onClick, children, icon, ...props }:ButtonProps) {
  return (
    <button
    {...props}
    className={twMerge( " bg-[#3BADFB] rounded-[5px] flex items-center gap-1 text-white h-[34px]" , size === 'small' ? 'px-2 py-3 text-xs' : ' w-full px-6 py-3 text-base', props.className )}
    onClick={onClick}
    >
      
      {icon && <img src={icon} alt={`icone de ${children}`} />}
      {children}
    </button>
  )
}
