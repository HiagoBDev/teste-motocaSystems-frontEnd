import { httpClient } from '../../utils/httpClient';

export interface MotoCard {
  id: number;
  code: string;
  name: string;
  status: 'Em estoque' | 'Sem estoque' | 'Em trânsito';
  value: string;
  color: string;
}


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
