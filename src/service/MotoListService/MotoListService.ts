import { httpClient } from '../../utils/httpClient';
import { MotoCard } from '../ServiceType';

export class MotoListService {
  static async getMotoList(): Promise<MotoCard[]> {
    try {
      const response = await httpClient.get<MotoCard[]>('/motos');
      return response.data;
    } catch (error) {
      console.error('Erro ao buscar lista de motos:', error);
      throw error;
    }
  }

  static async getMotoById(id: string): Promise<MotoCard> {
    try {
      const response = await httpClient.get<MotoCard>(`/motos/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Erro ao buscar moto com ID ${id}:`, error);
      throw error;
    }
  }
}

