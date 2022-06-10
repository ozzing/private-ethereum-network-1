import { MainWrapper } from '../shared/Components';
import AccountHeader from '../main/AccountHeader';
import AccountMain from '../main/AccountMain';
import TabContainer from '../main/TabContainer';

const DeployMain = () => {
  return (
    <MainWrapper>
      <AccountHeader>
        <AccountMain>
          <TabContainer />
        </AccountMain>
      </AccountHeader>
    </MainWrapper>
  );
};

export default DeployMain;
