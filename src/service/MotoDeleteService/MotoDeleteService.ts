import { httpClient } from '../../utils/httpClient';

export class MotoDeleteService {
  static async deleteMoto(id: number): Promise<void> {
    try {
      await httpClient.delete(`/motos/${id}`);
    } catch (error) {
      console.error('Erro ao deletar a moto:', error);
      throw error;
    }
  }
}
