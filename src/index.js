import {autoType, csvParse} from 'd3';
import {sData} from './data/data';
export const data = csvParse(sData, autoType);
