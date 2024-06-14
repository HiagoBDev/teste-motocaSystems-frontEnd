import { MotoList } from './MotoListServiceType';
import { httpClient } from '../../utils/httpClient';

export class MotoListService {
  static async getMotoList(): Promise<MotoList> {
    try {
      const response = await httpClient.get<MotoList>('/motos');
      return response.data;
    } catch (error) {
      console.error('Erro ao buscar dados das motos:', error);
      throw error; 
    }
  }
}
