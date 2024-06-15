// useMotoEdit.tsx
import { useEffect, useState } from 'react';
import { MotoListService } from '../../service/MotoListService/MotoListService';
import { MotoCard } from '../../service/ServiceType';

const useMotoEdit = (motoId: string | undefined) => {
  const [motoData, setMotoData] = useState<MotoCard | null>(null);

  useEffect(() => {
    const fetchMotoData = async () => {
      try {
        if (motoId) {
          const data = await MotoListService.getMotoById(motoId);
          setMotoData(data);
        }
      } catch (error) {
        console.log('Erro ao buscar dados da moto', error);
      }
    };

    fetchMotoData();
  }, [motoId]);

  return { motoData };
};

export default useMotoEdit;
