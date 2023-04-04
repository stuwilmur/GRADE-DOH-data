import {autoType, csvParse} from 'd3';
import {csv} from './data/data';
export const data = csvParse(csv, autoType);
