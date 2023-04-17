import { IData } from '../interfaces/data';

export interface IDataRec {
  docs: IData[];
  limit: number;
  offset: number;
  page: number;
  pages: number;
  total: number;
}
