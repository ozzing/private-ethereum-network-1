import { useState, useEffect } from 'react';
import styled from 'styled-components';
import DownloadIcon from '@mui/icons-material/Download';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import SwapHorizIcon from '@mui/icons-material/SwapHoriz';
import { Circle } from '../shared/Components';
import COLORS from '../../constants/Colors';
import { Link } from 'react-router-dom';
import axios from 'axios';

const AccountMain = () => {
  const [balace, setBalance] = useState();

  useEffect(() => {
    setBalance(4000);
  }, []);

  axios
    .get('http://localhost:3000/')
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    })
    //성공이던 실패던 항상 실행
    .then(() => {
      console.log('axios runing');
    });

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
      <ButtonGroup>
        <ButtonWrapper>
          <Link to="/deploy">
            <Circle>
              <DownloadIcon sx={{ color: '#ffffff', fontSize: 20 }} />
            </Circle>
            <ButtonSpan>토큰 발행</ButtonSpan>
          </Link>
        </ButtonWrapper>
        <ButtonWrapper>
          <Link to="/send">
            <Circle>
              <ArrowForwardIcon sx={{ color: '#ffffff', fontSize: 20 }} />
            </Circle>
            <ButtonSpan>보내기</ButtonSpan>
          </Link>
        </ButtonWrapper>
        <ButtonWrapper>
          <Circle>
            <SwapHorizIcon sx={{ color: '#ffffff', fontSize: 20 }} />
          </Circle>
          <ButtonSpan>스왑</ButtonSpan>
        </ButtonWrapper>
      </ButtonGroup>
    </MainWrapper>
  );
};

const MainWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 209px;
  min-width: 0;
  padding-top: 10px;
  flex-direction: column;
  width: 100%;
`;

const WalletOverView = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const ButtonGroup = styled.div`
  display: flex;
  flex-direction: row;
  height: 68px;
  margin-bottom: 24px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-left: 12px;
  margin-right: 12px;
`;

const ButtonSpan = styled.span`
  font-size: 10px;
  color: ${COLORS.primary};
`;

export default AccountMain;
