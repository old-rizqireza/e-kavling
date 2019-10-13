export const formatingNumber = (value: any) => `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
