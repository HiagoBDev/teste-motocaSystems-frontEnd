import { useState, useEffect } from "react";

interface UseDynamicMaskProps {
  initialValue?: string;
}

export function useDynamicMask({ initialValue = "" }: UseDynamicMaskProps) {
  const [value, setValue] = useState<string>(initialValue);
  const [mask, setMask] = useState<string>("");

  useEffect(() => {
    updateMask(value);
  }, [value]);

  const updateMask = (inputValue: string) => {
    if (typeof inputValue === "string" && inputValue.trim() !== "") {
      const numericValue = parseFloat(inputValue.replace(/[^\d]/g, ""));
      if (numericValue < 100000) {
        setMask("999.999,99");
      } else {
        setMask("999.999.999,99");
      }
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value: inputValue } = e.target;
    setValue(inputValue);
  };

  return { value, mask, handleChange };
}
