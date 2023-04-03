import {autoType, csvParse} from 'd3';
import {readFileSync} from 'fs';

const dataString = readFileSync('./data/BASE data 2022 interpolated.csv', {
  encoding: 'utf8',
  flag: 'r',
});
export const data = csvParse(dataString, autoType);
