import { useEffect, useState } from 'react';
import { MotoListService } from '../../../service/MotoListService/MotoListService';
import { MotoDeleteService } from '../../../service/MotoDeleteService/MotoDeleteService';
export interface MotoCard {
  id: number;
  code: string;
  name: string;
  status: 'Em estoque' | 'Sem estoque' | 'Em trânsito';
  value: string;
  color: string;
}

export function useMotoWrapper() {
  const [motos, setMotos] = useState<MotoCard[]>([]);
  const [loadingMotoId, setLoadingMotoId] = useState<number | null>(null);

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

  const deleteMoto = async (id: number) => {
    setLoadingMotoId(id);
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
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
