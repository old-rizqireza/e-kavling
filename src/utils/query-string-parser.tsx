export const getQueryStringParse = (value: string, query: any) => {
  value = value.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
  const regex = new RegExp('[\\?&]' + value + '=([^&#]*)');
  const results = regex.exec(query);
  return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
};

export default getQueryStringParse;
