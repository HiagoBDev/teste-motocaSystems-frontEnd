import { httpClient } from '../../utils/httpClient';

export class MotoDeleteService {
  static async deleteMoto(id: string | undefined): Promise<void> {
    try {
      await httpClient.delete(`/motos/${id}`);
    } catch (error) {
      console.error('Erro ao deletar a moto:', error);
      throw error;
    }
  }
}
