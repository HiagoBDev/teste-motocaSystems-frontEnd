import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { MotoCard } from '../../../service/ServiceType';
import { MotoEditService } from '../../../service/MotoEditService/MotoEditService';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';


const schema = z.object({
  code: z.string().regex(/^#[0-9]{4}$/, 'A moto deve ter um código (EX:1234)'),
  color: z.string().min(1, 'A moto deve ter uma cor'),
  name: z.string().min(1, 'A moto deve ter um nome'),
  value: z.string().min(1, 'A moto deve ter um valor'),
  status: z.enum(['Em estoque', 'Sem estoque', 'Em trânsito'])
});

type MotoEditForm = z.infer<typeof schema>;

interface UseEditFormProps {
  initialData: MotoCard;
  onSubmit: (formData: MotoEditForm) => void;
}

const useEditForm = ({ initialData, onSubmit }: UseEditFormProps) => {
  const {
    register,
    handleSubmit: hookFormHandleSubmit,
    formState: { errors }
  } = useForm<MotoEditForm>({
    resolver: zodResolver(schema),
    defaultValues: initialData
  });
  const navigate = useNavigate();

  const handleSubmit = (motoId: string | undefined) => hookFormHandleSubmit(async (updatedFields) => {
    try {
      const response = await MotoEditService.updateMoto(motoId, {
        code: updatedFields.code,
        name: updatedFields.name,
        color: updatedFields.color,
        value: updatedFields.value,
        status: updatedFields.status,
      });
      console.log(response);
      onSubmit(updatedFields);
        toast.success('Moto atualizada com sucesso!');
      navigate('/')
    } catch (error) {
      toast.error('Erro ao atualizar moto.');
      console.error('Erro ao atualizar moto:', error);
    }
  });

  return {
    handleSubmit,
    errors,
    register,
  };
};

export default useEditForm;
