export const formatNumberSeparator = (
  value: any,
  inputSeparator: string,
  outputSeparator: string,
  separator: string,
  prefix: string = '',
) => {
  value += '';
  const dpos: number = value.indexOf(inputSeparator);
  let nStrEnd: string = '';
  if (dpos !== -1) {
    nStrEnd = outputSeparator + value.substring(dpos + 1, value.length);
    value = value.substring(0, dpos);
  }
  const regex: any = /(\d+)(\d{3})/;
  while (regex.test(value)) {
    value = value.replace(regex, '$1' + separator + '$2');
  }
  return `${prefix ? `${prefix} ` : ''}` + value + nStrEnd;
};
