import { ReactNode } from "react";

interface MotoActionsProps {
  children: ReactNode;
}

export default function MotoActions({ children }: MotoActionsProps) {
  return (
    <div className="flex justify-end items-center mt-2 sm:mt-0 gap-4">
      {children}
    </div>
  );
}
