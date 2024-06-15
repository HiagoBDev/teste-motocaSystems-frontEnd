import classNames from "classnames";
import { twMerge } from "tailwind-merge";

interface MotoContentProps {
  code: string;
  name: string;
  status: "Em estoque" | "Sem estoque" | "Em trânsito";
  value: string;
  color: string;
}

export default function MotoContent({ name, status, value, color, code, }: MotoContentProps) {
  const statusClasses = classNames({
    "bg-[#354546] text-[#56CA00]": status === "Em estoque",
    "bg-[#55304C] text-[#FF4C51]": status === "Sem estoque",
    "bg-[#544146] text-[#FFB400]": status === "Em trânsito",
  });

  return (
    <div className="flex flex-col sm:flex-row sm:gap-10">
      <div className="flex items-center mb-2 sm:mb-0 sm:px-8 md:px-10">
        <span className="text-[#8C57FF] font-medium text-[17px]">{code}</span>
      </div>
      <div className="text-[#E7E3FC] flex flex-col sm:gap-3 gap-1">
        <div className=" flex gap-3">  
          <p className=" font-semibold text-[15px] sm:text-[17px] flex gap-3 break-words">
            {name.toUpperCase()}
          </p>
            <span
              className={twMerge(
                "px-2 rounded-[35px] text-[13px] text-center sm:text-[15px] font-medium",
                statusClasses
              )}
            >
              {status}
            </span>
        </div>
        <p className=" font-medium text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px]">
          Valor: R$ {value}
        </p>
        <p className=" font-medium text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px]">
          Cor: {color.toUpperCase()}
        </p>
      </div>
    </div>
  );
}
