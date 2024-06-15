const numberToBRL = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
}).format;

export const formatCurrency = (value?: number) => {
  if (value !== 0 && !value) return;

  return numberToBRL(value);
};