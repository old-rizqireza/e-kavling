import getQueryStringParse from '@utils/query-string-parser';

describe('#getQueryStringParse', () => {
  it('should return value from query string', () => {
    const value: string = 'client';
    const locationSearch: string = '?client=safari&rls=en&q=js+request+post+data&ie=UTF-8&oe=UTF-8';
    const result: string = 'safari';
    expect(getQueryStringParse(value, locationSearch)).toEqual(result);
  });
});
