import setAttributeValue from '@utils/set-attribute-value';

describe('.setAttributeValue', () => {
  it('should return new data with new attribute value', () => {
    const data = { a: 1, b: 2 };
    const field: string = 'a';
    const value = 10;
    const newData = { a: 10, b: 2 };
    expect(setAttributeValue(data, field, value)).toEqual(newData);
  });
});
