import { ICity } from './ICity';

export interface ICities {
  message: string;
  cod: string;
  count: number;
  list: Array<ICity>;
}
