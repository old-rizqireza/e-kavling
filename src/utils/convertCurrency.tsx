import { chunk, curry, flow, join, map, reverse, split } from 'lodash/fp';

export const THOUSANDS_PATTERN = /[0-9]{1,3}/g;

function _format(chunksize: number, separator: string, src: string) {
  return flow([
    split(''),
    reverse,
    chunk(chunksize),
    map(reverse),
    reverse,
    map(join('')),
    join(separator),
  ])(src);
}

export function _test(src: string) {
  return flow([split(''), reverse, chunk(3), map(reverse), reverse, map(join('')), join('.')])(src);
}

export const format = curry(_format);
export const formatThousands = format(3);
export const formatRupiah = format(3, '.');
export const formatDollar = format(3, ',');
