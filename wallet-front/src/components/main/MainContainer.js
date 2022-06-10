import AccountHeader from './AccountHeader';
import AccountMain from './AccountMain';
import TabContainer from './TabContainer';
import { MainWrapper } from '../shared/Components';

const MainContainer = () => {
  return (
    <MainWrapper>
      <AccountHeader />
      <AccountMain />
      <TabContainer />
    </MainWrapper>
  );
};
export default MainContainer;
