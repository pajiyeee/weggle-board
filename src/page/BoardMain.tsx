import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Center, Heading } from '@chakra-ui/react';
import styled from '@emotion/styled';
import { useRecoilState } from 'recoil';
import { listState } from '../recoil/listState';
// import { limitState } from '../recoil/limitState';
import BoardItem from '../Components/BoardMain/BoardItem';
import Pagination from '../Components/BoardMain/Pagination';
import BoardListTitle from '../Components/BoardMain/BoardListTitle';
import SelectLimit from '../Components/BoardMain/SelectLimit';

const BoardMain = () => {
  const navigate = useNavigate();
  const [boardList] = useRecoilState(listState);
  const [page, setPage] = useState(1);
  // const [limit, setLimit] = useRecoilState(limitState);
  const [limit, setLimit] = useState(boardList.length);
  const offset = (page - 1) * limit;

  const goToDetail = () => {
    navigate('/detail');
  };
  return (
    <>
      <Center>
        <BoardMainWrap>
          <TitleWrap>
            <Heading>게시판리스트</Heading>
            <WriteButton onClick={goToDetail}>글쓰기</WriteButton>
          </TitleWrap>
          <SelectLimit totalItem={boardList.length} setLimit={setLimit} />
          <BoardListTitle />
          {boardList.slice(offset, offset + limit).map((item) => (
            <BoardItem key={item.id} item={item} />
          ))}
          <Pagination totalItem={boardList.length} limit={limit} page={page} setPage={setPage} />
        </BoardMainWrap>
      </Center>
    </>
  );
};

export default BoardMain;

const BoardMainWrap = styled.div`
  width: 80%;
  max-width: 1400px;
  min-width: 300px;
  margin: 40px 0;
  padding: 40px;
`;

const TitleWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`;

const WriteButton = styled.button`
  min-width: 120px;
  margin-top: 40px;
  padding: 12px;
  background-color: #222222;
  color: #ffffff;
`;
