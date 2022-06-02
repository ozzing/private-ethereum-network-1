import styled from '@emotion/styled';
import AccountHeader from './AccountHeader';
import AccountMain from './AccountMain';
import TabContainer from './TabContainer';

const MainContainer = () => {
  return (
    <MainWrapper>
      <AccountHeader />
      <AccountMain />
      <TabContainer />
    </MainWrapper>
  );
};
const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 80vw;
  min-height: 82vh;
  box-shadow: 0 0 7px 0 rgb(0 0 0 / 8%);
  background-color: #ffffff;
  align-items: center;
`;
export default MainContainer;
