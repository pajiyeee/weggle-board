import styled from '@emotion/styled';

const BoardListTitle = () => {
  return (
    <BoardListTitleWrap>
      <span>no.</span>
      <span>title</span>
      <span>date</span>
      <span></span>
      <span></span>
    </BoardListTitleWrap>
  );
};

export default BoardListTitle;

const BoardListTitleWrap = styled.div`
  display: grid;
  grid-template-columns: 1fr 4fr 2fr 1fr;
  margin-top: 60px;
  padding-top: 12px;
  border-bottom: 1px solid #222222;
  padding-bottom: 12px;

  span {
    margin-right: 20px;
  }
`;
