import { atom } from 'recoil';
import { boardItemType } from '../Components/types/BoardItemType';

export const list = atom<boardItemType[]>({
  key: 'list',
  default: [],
});
