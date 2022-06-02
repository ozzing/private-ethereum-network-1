import styled from 'styled-components';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';

const MainHeader = () => {
  return (
    <div
      style={{
        display: 'flex',
        height: '72px',
        justifyContent: 'center',
        alignItems: 'center',
        // background: 'red',
      }}
    >
      <MainLogo>
        <AccountBalanceWalletIcon />
        <span>소공대학교</span>
      </MainLogo>
    </div>
  );
};
const MainLogo = styled.div`
  display: 'flex'
  align-Items:'center'
  justify-content:'center'
`;
export default MainHeader;
