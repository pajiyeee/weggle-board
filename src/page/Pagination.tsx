import { Dispatch, SetStateAction } from 'react';
import styled from '@emotion/styled';
import { Center } from '@chakra-ui/react';
import { ChevronLeft, ChevronRight } from 'react-feather';

type Props = {
  totalItem: number;
  limit: number;
  page: number;
  setPage: Dispatch<SetStateAction<number>>;
};

const Pagination = ({ totalItem, limit, page, setPage }: Props) => {
  const pageTotalNum = Math.ceil(totalItem / limit);
  const pageNum = new Array(pageTotalNum).fill(0);
  const pageLimit = 5;
  const pageOffset = Math.floor((page - 1) / pageLimit) * pageLimit;

  const clickPage = (index: number) => {
    setPage(index + 1);
  };

  const clickPrev = () => {
    setPage(page - 1);
  };

  const clickNext = () => {
    setPage(page + 1);
  };

  return (
    <Center>
      <PaginationWrap>
        {pageNum.length >= 1 && (
          <ArrowButton disabled={page === 1} onClick={clickPrev}>
            <ChevronLeft />
          </ArrowButton>
        )}
        {totalItem > 0 &&
          pageNum
            .map((_, index) => (
              <Button
                key={index}
                colorSetting={index + 1 === page}
                onClick={() => clickPage(index)}
              >
                {index + 1}
              </Button>
            ))
            .slice(pageOffset, pageOffset + pageLimit)}
        {pageNum.length >= 1 && (
          <ArrowButton disabled={page === pageNum.length} onClick={clickNext}>
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
