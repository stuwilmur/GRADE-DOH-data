import { autoType, csvParse } from 'd3-dsv';
import { readFileSync } from 'fs';

const data = readFileSync('./src/data/BASE data 2022 interpolated.csv', {
  encoding: 'utf8',
  flag: 'r',
});
const parsed = csvParse(data, autoType);
console.log(parsed[0]);
