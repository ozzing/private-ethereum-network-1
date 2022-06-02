import { useState } from 'react';
import styled from 'styled-components';

const AccountMain = () => {
  const balace = useState(4000);

  return (
    <MainWrapper>
      <WalletOverView>
        <img
          src="./img/eth_logo.svg"
          alt="eth logo"
          height="32px"
          width="32px"
          border-radius="16px"
        />
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <h2>{balace} ETH</h2>
        </div>
      </WalletOverView>
    </MainWrapper>
  );
};

const MainWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex: 1;
  min-height: 209px;
  min-width: 0;
  padding-top: 10px;
  flex-direction: column;
  width: 100%;
`;

const WalletOverView = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export default AccountMain;
