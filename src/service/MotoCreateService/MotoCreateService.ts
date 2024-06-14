import { httpClient } from "../../utils/httpClient";

export interface MotoCard {
  code: string;
  name: string;
  status: 'Em estoque' | 'Sem estoque' | 'Em trânsito';
  value: string;
  color: string;
}


export class MotoCreateService {
  static async store({ code, color, name, value, status }: MotoCard) {
    const { data } = await httpClient.post("/motos", {
      code,
      name,
      color,
      value,
      status,
    });

    return data;
  }
}