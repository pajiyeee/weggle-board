import { atom } from 'recoil';
import { boardItemType } from '../types/BoardItemType';

export const listState = atom<boardItemType[]>({
  key: 'listState',
  default: [],
});
