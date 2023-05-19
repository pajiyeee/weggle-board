import { ChangeEvent, Dispatch, SetStateAction } from 'react';
import styled from '@emotion/styled';

type Props = {
  totalItemNum: number;
  setLimit: Dispatch<SetStateAction<number>>;
};

const SelectLimit = ({ totalItemNum, setLimit }: Props) => {
  const changeLimit = (e: ChangeEvent<HTMLSelectElement>) => {
    if (e.target.value === 'all') {
      setLimit(totalItemNum);
    } else {
      setLimit(parseInt(e.target.value));
    }
  };

  return (
    <SelectLimitWrap>
      <select onChange={changeLimit}>
        <option value="all">전체 보기</option>
        <option value={15}>20개씩 보기</option>
        <option value={10}>10개씩 보기</option>
        <option value={5}>5개씩 보기</option>
        <option value={1}>1개씩 보기</option>
      </select>
    </SelectLimitWrap>
  );
};
export default SelectLimit;

const SelectLimitWrap = styled.div``;
