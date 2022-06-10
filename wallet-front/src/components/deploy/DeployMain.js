import { MainWrapper } from '../shared/Components';
import AccountHeader from '../main/AccountHeader';
import DeployForm from './DeployForm';
const DeployMain = () => {
  return (
    <MainWrapper>
      <AccountHeader />
      <DeployForm />
    </MainWrapper>
  );
};

export default DeployMain;
