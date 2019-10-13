export const numberFormat = (nStr: string) => {
  return nStr.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
};

export const rupiah = (numberValue: number) => {
  const nStr = numberValue.toString();
  const numberString = nStr.replace(/\D/g, '');
  const ribuan = numberFormat(numberString);
  return numberString.length > 0 ? `Rp ${ribuan}` : '';
};

export default rupiah;
