import styled from '@emotion/styled';

const MainContainer = () => {
  return (
    <MainWrapper>
      <div>hi</div>
    </MainWrapper>
  );
};
const MainWrapper = styled.div`
  display: flex;
  width: 80vw;
  min-height: 82vh;
  box-shadow: 0 0 7px 0 rgb(0 0 0 / 8%);
  background-color: #ffffff;
  justify-content: space-between;
  align-items: center;
`;
export default MainContainer;
