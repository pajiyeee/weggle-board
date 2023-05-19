import { useState, ChangeEvent } from 'react';
import styled from '@emotion/styled';
import { Center, Heading } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { listState } from '../recoil/listState';
import { generateId } from '../utils/generateId';

const BoardDetail = () => {
  const navigate = useNavigate();
  const [, setBoardList] = useRecoilState(listState);
  const [titleInput, setTitleInput] = useState('');
  const [textInput, setTextInput] = useState('');

  const changeTitle = (e: ChangeEvent<HTMLInputElement>) => {
    setTitleInput(e.target.value);
  };

  const changeText = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setTextInput(e.target.value);
  };

  const addItem = () => {
    setBoardList((prevBoardList) => {
      const id = generateId(prevBoardList);

      return [
        {
          id,
          titleValue: titleInput,
          textValue: textInput,
          date: new Date().toDateString(),
        },
        ...prevBoardList,
      ];
    });
    navigate('/');
  };

  return (
    <Center>
      <BoardDetailWrap>
        <Heading>글쓰기</Heading>
        <input type="input" placeholder="제목" value={titleInput} onChange={changeTitle} />
        <textarea placeholder="내용을 적어주세요." value={textInput} onChange={changeText} />
        <ButtonWrap>
          <button onClick={addItem}>확인</button>
          <button>취소</button>
        </ButtonWrap>
      </BoardDetailWrap>
    </Center>
  );
};

export default BoardDetail;

const BoardDetailWrap = styled.div`
  width: 80%;
  max-width: 1400px;
  min-width: 300px;
  padding: 40px;

  input {
    width: 100%;
    margin-top: 50px;
    margin-bottom: 20px;
    padding: 12px;
    border: 1px solid #cccccc;
  }

  textarea {
    width: 100%;
    padding: 12px;
    border: 1px solid #cccccc;
    min-height: 200px;
  }
`;

const ButtonWrap = styled.div`
  width: 100%;
  margin-top: 50px;
  text-align: center;

  button {
    min-width: 120px;
    margin: 8px;
    padding: 20px;
    background-color: #222222;
    color: #ffffff;

    &:last-child {
      border: 1px solid #aaaaaa;
      background-color: transparent;
      color: #222222;
    }
  }
`;
