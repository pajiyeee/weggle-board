import { ChangeEvent, Dispatch, SetStateAction } from 'react';
import styled from '@emotion/styled';

type Props = {
  totalItem: number;
  setLimit: Dispatch<SetStateAction<number>>;
};

const SelectLimit = ({ totalItem, setLimit }: Props) => {
  const changeLimit = (e: ChangeEvent<HTMLSelectElement>) => {
    setLimit(parseInt(e.target.value));
  };

  return (
    <SelectLimitWrap>
      <select onChange={changeLimit}>
        <option value={totalItem}>전체 보기</option>
        <option value={5}>5개씩 보기</option>
      </select>
    </SelectLimitWrap>
  );
};
export default SelectLimit;

const SelectLimitWrap = styled.div``;
