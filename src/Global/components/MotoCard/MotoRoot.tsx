import { ReactNode } from "react";

interface MotoRootProps {
  children: ReactNode;
}

export default function MotoRoot({ children }: MotoRootProps) {
  return (
    <article className="h-[150px] sm:h-[138px] bg-[#312D4B] text-sm sm:flex sm:justify-between sm:items-center p-4 rounded-[10px]">
      {children}
    </article>
  );
}
