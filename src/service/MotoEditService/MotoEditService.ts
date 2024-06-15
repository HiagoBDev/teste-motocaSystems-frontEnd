
import { httpClient } from '../../utils/httpClient';
import { MotoCard } from '../ServiceType';

export class MotoEditService {
  static async updateMoto(motoId: string|undefined, updatedFields: Partial<MotoCard>): Promise<MotoCard> {
    try {
      const response = await httpClient.patch<MotoCard>(`/motos/${motoId}`, updatedFields);
      return response.data;
    } catch (error) {
      console.error('Erro ao atualizar moto:', error);
      throw new Error('Erro ao atualizar moto');
    }
  }
}
