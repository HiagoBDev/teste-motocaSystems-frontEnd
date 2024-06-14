import Button from "../Button/Index";
import InputForm from "../InputForm/Index";
import Select from "../Select/Index";
import UpEditIcon from '../../../assets/icons/UpEditIcon.svg';
import { useState, ChangeEvent } from "react";

export default function EditForm() {
  const [value, setValue] = useState<string>('branca');

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setValue(newValue);
    console.log(newValue);
  };

  return (
    <form className="flex flex-col gap-4 w-full items-center">
      <InputForm label="Código" type="text" disabled />
      <InputForm label="Modelo da Moto" type="text" value={value} onChange={handleInputChange} />
      <InputForm label="Cor" type="text" />
      <InputForm label="Valor" type="text" />
      <Select />
      <Button size="large" icon={UpEditIcon}>ATUALIZAR</Button>
    </form>
  );
}
