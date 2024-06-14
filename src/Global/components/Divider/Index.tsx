import { twMerge } from "tailwind-merge"

interface DividerProps {
  color?: string;
  width?: string;
}

export default function Divider({ color = 'bg-gray-700', width = 'w-full' }: DividerProps) {
  return (
    <div >
      <div className={twMerge("h-[1px]", color, width)}></div>
    </div>
  )
}
