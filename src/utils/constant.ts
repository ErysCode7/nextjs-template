import millify from 'millify';
import moment from 'moment';

export const ROUTES = {
  HOME: '/',
  ABOUT: '/todos',
  PRODUCTS: '/products',
} as const;

// USAGE: numberFormatter(200000) -> 200,000
export const numberFormatter = (value: string | number = '') =>
  value && value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

// https://momentjs.com/
export const dateFormatter = (value: string | Date, dateFormat: string) =>
  value !== undefined && moment(value).format(dateFormat);

// https://www.npmjs.com/package/millify
// USAGE: millifyFormatter(200000) -> 200k
export const millifyFormatter = (value: number) => millify(value);
