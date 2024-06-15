import { useEffect, useState } from 'react';
import { MotoListService } from '../../../service/MotoListService/MotoListService';
import { MotoDeleteService } from '../../../service/MotoDeleteService/MotoDeleteService';
import toast from 'react-hot-toast';

export interface MotoCard {
  id?: string | undefined;
  code: string;
  name: string;
  status: 'Em estoque' | 'Sem estoque' | 'Em trânsito';
  value: string;
  color: string;
}

export function useMotoWrapper() {
  const [motos, setMotos] = useState<MotoCard[]>([]);
  const [loadingMotoId, setLoadingMotoId] = useState<string | undefined>(undefined);

  useEffect(() => {
    const fetchMotos = async () => {
      try {
        const data = await MotoListService.getMotoList();
        setMotos(data);
      } catch (error) {
        console.error('Erro ao buscar dados das motos:', error);
      }
    };

    fetchMotos();
  }, []);

  const deleteMoto = async (id: string | undefined) => {
    setLoadingMotoId(id);
    try {
      await new Promise(resolve => setTimeout(resolve, 500));
      await MotoDeleteService.deleteMoto(id);
      setMotos(motos.filter(moto => moto.id !== id));
      toast.success('Moto excluída com sucesso!');
    } catch (error) {
      console.error('Erro ao deletar a moto:', error);
    } finally {
      setLoadingMotoId(undefined);
    }
  };


  return { motos, deleteMoto, loadingMotoId };
}
