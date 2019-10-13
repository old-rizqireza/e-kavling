import titleCase from '@utils/title-case';

describe('#titleCase', () => {
  it('should return title case', () => {
    const title: string = 'this is title case mode';
    const titleExpected: string = 'This is title case mode';
    expect(titleCase(title)).toEqual(titleExpected);
  });
});
