import { MotoCard } from '../MotoListService/MotoListServiceType'; // Supondo que MotoServiceType defina a interface Moto
import { httpClient } from '../../utils/httpClient';

export class MotoEditService {
  static async updateMoto(motoId: string, updatedFields: Partial<MotoCard>): Promise<MotoCard> {
    try {
      const response = await httpClient.patch<MotoCard>(`/motos/${motoId}`, updatedFields);
      return response.data;
    } catch (error) {
      console.error('Erro ao atualizar moto:', error);
      throw new Error('Erro ao atualizar moto');
    }
  }
}
