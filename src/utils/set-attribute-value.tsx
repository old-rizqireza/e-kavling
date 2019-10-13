export const setAttributeValue = (data: any, field: string, value: any) => {
  const newData = { ...data };
  newData[field] = value;
  return newData;
};

export default setAttributeValue;
