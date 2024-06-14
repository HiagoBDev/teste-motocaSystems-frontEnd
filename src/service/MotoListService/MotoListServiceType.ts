export interface MotoCard {
  id: number;
  code: string;
  name: string;
  status: 'Em estoque' | 'Sem estoque' | 'Em trânsito';
  value: string;
  color: string;
}

export type MotoList = MotoCard[];
