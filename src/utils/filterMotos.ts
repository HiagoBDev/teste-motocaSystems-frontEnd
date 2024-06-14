import { MotoCard } from '../Global/components/MotoWrapper/useMotoWrapper';

export const filterMotos = (motos: MotoCard[], search: string): MotoCard[] => {
  // Caso houvesse a necessidade, era só melhorar o filtro aqui, colocar mais opçoes de filtragem por exemplo
  return motos.filter(moto =>
    moto.code.toLowerCase().includes(search.toLowerCase()) ||
    moto.name.toLowerCase().includes(search.toLowerCase()) ||
    moto.color.toLowerCase().includes(search.toLowerCase())
  );
};
