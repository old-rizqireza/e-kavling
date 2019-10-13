export const buildByteArray = (str: any, stringLength: any) => {
  const buffer = new ArrayBuffer(stringLength);
  const array = new Uint8Array(buffer);
  for (let i = 0; i < stringLength; i += 1) {
    array[i] = str.charCodeAt(i);
  }
  return array;
};

export const base64ToBlob = (base64String: any, type: string) => {
  let appType: string = '';

  if (type.toLowerCase() === 'xls') {
    appType = 'application/vnd.ms-excel';
  } else if (type.toLowerCase() === 'pdf') {
    appType = 'application/pdf';
  }

  const decodedString = atob(base64String);
  const decodedStringLength = decodedString.length;
  const byteArray = buildByteArray(decodedString, decodedStringLength);

  return base64String ? new Blob([byteArray], { type: appType }) : '';
};

export default base64ToBlob;
