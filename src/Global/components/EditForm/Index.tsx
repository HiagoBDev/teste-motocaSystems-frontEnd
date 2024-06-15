import Button from "../Button/Index";
import InputForm from "../InputForm/Index";
import Select from "../Select/Index";
import UpEditIcon from '../../../assets/icons/UpEditIcon.svg';
import useEditForm from "./useEditForm";
import { MotoCard } from "../../../service/ServiceType";

interface EditFormProps {
  motoData: MotoCard;
  motoId: string | undefined;
}

export default function EditForm({ motoData, motoId }: EditFormProps) {
  const { handleSubmit, errors, register } = useEditForm({
    initialData: motoData,
    onSubmit: () => {}
  });

  return (
    <form className="flex flex-col gap-4 w-full items-center" onSubmit={handleSubmit(motoId)}>
      <InputForm
        label="Código"
        type="text"
        mask="#9999"
        placeholder="#"
        register={register('code')}
        errorMessage={errors.code?.message}
      />
      <InputForm
        label="Modelo da Moto"
        type="text"
        placeholder="CB 500F"
        register={register('name')}
        errorMessage={errors.name?.message}
      />
      <InputForm
        label="Cor"
        type="text"
        placeholder="VERMELHA"
        register={register('color')}
        errorMessage={errors.color?.message}
      />
      <InputForm
        label="Valor"
        type="text"
        placeholder="40.660,00"
        register={register('value')}
        errorMessage={errors.value?.message}
        mask="99.999,99"
      />
      <Select
        label="Status"
        register={register('status')}
        errorMessage={errors.status?.message}
      />
      <Button type="submit" size="large" icon={UpEditIcon}>ATUALIZAR</Button>
    </form>
  );
}
