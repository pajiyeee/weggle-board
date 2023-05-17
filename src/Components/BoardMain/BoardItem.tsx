import { useState } from 'react';
import styled from '@emotion/styled';
import { Edit, Trash } from 'react-feather';
import { useRecoilState } from 'recoil';
import { listState } from '../../recoil/listState';
import ModalEditForm from './ModalEditForm';

type Props = {
  item: {
    id: string;
    date: string;
    titleValue: string;
    textValue: string;
  };
};

const BoardItem = ({ item }: Props) => {
  const [, setBoardList] = useRecoilState(listState);

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const deleteItem = (id: string) => {
    setBoardList((prevList) => prevList.filter((item) => item.id !== id));
  };

  return (
    <>
      <ModalEditForm item={item} isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
      <BoardItemWrap>
        <span>{item.id}</span>
        <span>{item.titleValue}</span>
        <span>{item.date}</span>
        <ButtonWrap>
          <button onClick={handleModal}>
            <Edit />
          </button>
          <button onClick={() => deleteItem(item.id)}>
            <Trash />
          </button>
        </ButtonWrap>
      </BoardItemWrap>
    </>
  );
};

export default BoardItem;

const BoardItemWrap = styled.li`
  display: grid;
  grid-template-columns: 1fr 4fr 2fr 1fr;
  width: 100%;
  margin-top: 30px;
  margin-bottom: 30px;

  span {
    width: 100%;
    margin-right: 20px;
    font-size: 18px;
    white-space: nowrap;
  }
`;

const ButtonWrap = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

  button {
    margin-left: 20px;
    color: #222222;
  }
`;
