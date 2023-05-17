import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Center, Heading } from '@chakra-ui/react';
import styled from '@emotion/styled';
import { useRecoilState } from 'recoil';
import { listState } from '../recoil/listState';
import BoardItem from '../Components/BoardMain/BoardItem';
import Pagination from '../Components/BoardMain/Pagination';
import BoardListTitle from '../Components/BoardMain/BoardListTitle';
import SelectLimit from '../Components/BoardMain/SelectLimit';

const BoardMain = () => {
  const navigate = useNavigate();
  const [boardList] = useRecoilState(listState);
  const totalItem = boardList.length;
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(totalItem);
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
          <SelectLimit totalItem={totalItem} setLimit={setLimit} />
          <BoardListTitle />
          {totalItem >= 1 && limit === totalItem
            ? boardList.map((item) => <BoardItem key={item.id} item={item} />)
            : boardList
                .slice(offset, offset + limit)
                .map((item) => <BoardItem key={item.id} item={item} />)}
          {totalItem >= 1 && (
            <Pagination totalItem={totalItem} limit={limit} page={page} setPage={setPage} />
          )}
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

/*

SelectLimit.tsx
state 로 관리 


const changeSelect = () => {
  setSelect(e.target.value)
}

<select onChange={changeSelect}/>
 <option value="all" />
 <option value={5} />

---------------------------------------------------
 Main.tsx
const [select, setSelect] = useRecoilState(select)

const select === 'all' 
slice 없이 map
근데 'all' 을 어떻게 boardList.length라는 것을 명시해줄지....
{all : boardList.length,five:5}
*/
