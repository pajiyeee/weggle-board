import { useState, Dispatch, SetStateAction, ChangeEvent } from 'react';
import { Heading } from '@chakra-ui/react';
import styled from '@emotion/styled';
import { useRecoilState } from 'recoil';
import { listState } from '../../recoil/listState';

type Props = {
  item: {
    id: string;
    date: string;
    titleValue: string;
    textValue: string;
  };
  isModalOpen: boolean;
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
};

const ModalEditForm = ({ item, isModalOpen, setIsModalOpen }: Props) => {
  const [, setBoardList] = useRecoilState(listState);
  const [editTitleInput, setEditTitleInput] = useState<string>(item.titleValue);
  const [editTextInput, setEditTextInput] = useState<string>(item.textValue);

  const changeTitle = (e: ChangeEvent<HTMLInputElement>) => {
    setEditTitleInput(e.target.value);
  };

  const changeText = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setEditTextInput(e.target.value);
  };

  const updateItem = (id: string) => {
    setBoardList((prevList) =>
      prevList.map((item) =>
        item.id === id
          ? {
              ...item,
              titleValue: editTitleInput,
              textValue: editTextInput,
            }
          : item
      )
    );
    setIsModalOpen(false);
  };

  const cancelUpdate = () => {
    setEditTitleInput(item.titleValue);
    setEditTextInput(item.textValue);
    setIsModalOpen(false);
  };

  return (
    <>
      {isModalOpen === true && (
        <ModalEditFormWrap>
          <Dim />
          <EditForm>
            <Heading>수정하기</Heading>
            <input type="input" placeholder="제목" value={editTitleInput} onChange={changeTitle} />
            <textarea
              placeholder="내용을 적어주세요."
              value={editTextInput}
              onChange={changeText}
            />
            <ButtonWrap>
              <button onClick={() => updateItem(item.id)}>확인</button>
              <button onClick={cancelUpdate}>취소</button>
            </ButtonWrap>
          </EditForm>
        </ModalEditFormWrap>
      )}
    </>
  );
};

export default ModalEditForm;

const ModalEditFormWrap = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 1;
`;

const Dim = styled.div`
  width: 100%;
  height: 100%;
  background-color: #000000;
  opacity: 60%;
`;

const EditForm = styled.div`
  position: absolute;
  width: 100%;
  max-width: 720px;
  min-width: 300px;
  border-radius: 12px;
  padding: 30px;
  background-color: #ffffff;
  overflow-y: scroll;

  input {
    width: 100%;
    margin-top: 50px;
    margin-bottom: 20px;
    padding: 12px;
    border: 1px solid #cccccc;
  }
  textarea {
    width: 100%;
    min-height: 200px;
    padding: 12px;
    border: 1px solid #cccccc;
  }
`;

const ButtonWrap = styled.div`
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
