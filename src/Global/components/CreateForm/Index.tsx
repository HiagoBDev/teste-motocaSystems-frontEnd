import Button from "../Button/Index";
import InputForm from "../InputForm/Index";
import Select from "../Select/Index";
import PlusIcon from "../../../assets/icons/PlusIcon.svg";
import { useCreateForm } from "./useCreateForm";

export default function CreateForm() {
  const { handleSubmit, errors, register } = useCreateForm();

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-8 w-full items-center"
    >
      <InputForm
        label="Código"
        type="text"
        mask="#9999"
        placeholder="#"
        register={register("code")}
        errorMessage={errors.code?.message}
      />
      <InputForm
        label="Modelo da Moto"
        type="text"
        placeholder="CB 500F"
        register={register("name")}
        errorMessage={errors.name?.message}
      />
      <InputForm
        label="Cor"
        type="text"
        placeholder="VERMELHA"
        register={register("color")}
        errorMessage={errors.color?.message}
      />
      <InputForm
        label="Valor"
        type="text"
        placeholder="40.660,00"
        register={register("value")}
        errorMessage={errors.value?.message}
        mask="99.999,99"
      />
      <Select
      label="Status"
      register={register("status")}
      errorMessage={errors.status?.message}
      />
      <Button size="large" icon={PlusIcon}>
        REGISTRAR
      </Button>
    </form>
  );
}
