import { useEffect, useState } from 'react';
import { MotoListService } from '../../../service/MotoListService/MotoListService';
import { MotoDeleteService } from '../../../service/MotoDeleteService/MotoDeleteService';

export interface MotoCard {
  id?: string;
  code: string;
  name: string;
  status: 'Em estoque' | 'Sem estoque' | 'Em trânsito';
  value: string;
  color: string;
}

export function useMotoWrapper() {
  const [motos, setMotos] = useState<MotoCard[]>([]);
  const [loadingMotoId, setLoadingMotoId] = useState<string | null>(null);

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

  const deleteMoto = async (id: string) => {
    setLoadingMotoId(id);
    try {
      await new Promise(resolve => setTimeout(resolve, 500));
      await MotoDeleteService.deleteMoto(id);
      setMotos(motos.filter(moto => moto.id !== id));
    } catch (error) {
      console.error('Erro ao deletar a moto:', error);
    } finally {
      setLoadingMotoId(null);
    }
  };


  return { motos, deleteMoto, loadingMotoId };
}
