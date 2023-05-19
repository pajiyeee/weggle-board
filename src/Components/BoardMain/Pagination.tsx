import { Dispatch, SetStateAction } from 'react';
import styled from '@emotion/styled';
import { Center } from '@chakra-ui/react';
import { ChevronLeft, ChevronRight } from 'react-feather';

type Props = {
  totalItemNum: number;
  limit: number;
  page: number;
  setPage: Dispatch<SetStateAction<number>>;
};

const Pagination = ({ totalItemNum, limit, page, setPage }: Props) => {
  const pageTotalNum = Math.ceil(totalItemNum / limit);
  const pageNumArray = new Array(pageTotalNum).fill(0).map((_, index) => index);

  const pageNumLimit = 5;
  const pageNumOffset = Math.floor((page - 1) / pageNumLimit) * pageNumLimit;

  const clickPage = (index: number) => {
    setPage(index + 1);
  };

  const clickPrev = () => {
    setPage(page - 1);
  };

  const clickNext = () => {
    setPage(page + 1);
  };
  console.log(page);
  return (
    <Center>
      <PaginationWrap>
        {pageNumArray.length >= 1 && (
          <ArrowButton disabled={page === 1} onClick={clickPrev}>
            <ChevronLeft />
          </ArrowButton>
        )}
        {totalItemNum > 0 &&
          pageNumArray.slice(pageNumOffset, pageNumOffset + pageNumLimit).map((num, index) => (
            <Button
              key={num}
              colorSetting={(page - 1) % pageNumLimit === index}
              onClick={() => clickPage(num)}
            >
              {num + 1}
            </Button>
          ))}
        {pageNumArray.length >= 1 && (
          <ArrowButton disabled={page === pageNumArray.length} onClick={clickNext}>
            <ChevronRight />
          </ArrowButton>
        )}
      </PaginationWrap>
    </Center>
  );
};
export default Pagination;

const PaginationWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
  margin-bottom: 80px;
`;

const ArrowButton = styled.button<{ disabled: boolean }>`
  width: 36px;
  height: 36px;
  margin: 0 8px;
  padding: 4px;
  border-radius: 18px;
  text-align: center;
  color: ${(props) => (props.disabled ? '#eeeeee' : '#222222')};
`;

const Button = styled.button<{ colorSetting: boolean }>`
  width: 36px;
  height: 36px;
  margin: 0 8px;
  padding: 4px;
  border-radius: 18px;
  background-color: ${(props) => (props.colorSetting ? '#222222' : '#e8e8e8')};
  text-align: center;
  color: ${(props) => (props.colorSetting ? '#ffffff' : '#222222')};
`;
