import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Center, Heading } from '@chakra-ui/react';
import styled from '@emotion/styled';
import { useRecoilState } from 'recoil';
import { list } from '../recoil/list';
import BoardItem from '../Components/BoardMain/BoardItem';
import Pagination from './Pagination';
import BoardListTitle from '../Components/BoardMain/BoardListTitle';

const BoardMain = () => {
  const navigate = useNavigate();
  const [boardList] = useRecoilState(list);
  const [page, setPage] = useState(1);
  const limit = 5;
  const offset = (page - 1) * limit;

  const goToDetail = () => {
    navigate('/detail');
  };
  console.log(123);
  return (
    <>
      <Center>
        <BoardMainWrap>
          <TitleWrap>
            <Heading>게시판리스트</Heading>
            <WriteButton onClick={goToDetail}>글쓰기</WriteButton>
          </TitleWrap>
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
