export const titleCase = (value: string) => {
  return value.charAt(0).toUpperCase() + value.substr(1).toLowerCase();
};

export default titleCase;
