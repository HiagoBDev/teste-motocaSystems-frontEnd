import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { MotoCreateService } from "../../../service/MotoCreateService/MotoCreateService";
import { useNavigate } from 'react-router-dom';

const schema = z.object({
  code: z.string().regex(/^#[0-9]{4}$/, 'A moto deve ter um código (EX:1234)'),
  color: z.string().min(1, 'A moto deve ter uma cor'),
  name: z.string().min(1, 'A moto deve ter um nome'),
  value: z.string().min(1, 'A moto deve ter um valor'),
  status: z.enum(['Em estoque', 'Sem estoque', 'Em trânsito'])
});

type MotoCreateForm = z.infer<typeof schema>

export function useCreateForm() {

  const navigate = useNavigate();

  const {
    register,
    formState: { errors },
    handleSubmit: hookFormHandleSubmit,
  } = useForm<MotoCreateForm>({
    resolver: zodResolver(schema),
  });

  const handleSubmit = hookFormHandleSubmit(async (data) => {
    try {
      const response = await MotoCreateService.store({
        code: data.code,
        name: data.name,
        color: data.color,
        value: data.value,
        status: data.status,
      });
      console.log(response);
      navigate('/')
    } catch (error) {
      console.log(error);
    }
  });

  return { register, handleSubmit, errors };
}