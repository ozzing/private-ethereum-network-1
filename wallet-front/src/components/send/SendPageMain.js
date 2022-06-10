import * as React from 'react';
import Box from '@mui/material/Box';
import styled from 'styled-components';
import logo from '../shared/logo.png';
import { ChangeCircleOutlined } from '@mui/icons-material';

const SendPageMain = () => {
  const [value, setValue] = React.useState();
  const onPriceChange = (event, newValue) => {};

  const balance = 100;
  const price = 0;

  return (
    <Box sx={{ width: '100%' }}>
      <BoxWrapper>
        <BoxContainer>
          <SendWrapper>
            <ButtonWrapper></ButtonWrapper>
          </SendWrapper>
          <SendPageContainer>
            자산:{' '}
            <SendBox>
              <LogoCircle src={logo} />
              <BalanceWrapper>
                <b>eth</b>
                <br></br>
                잔액: {balance} ETH
              </BalanceWrapper>
            </SendBox>
          </SendPageContainer>
          <SendPageContainer>
            금액:{' '}
            <SendBox>
              <PriceWrapper>
                <b>{price} eth</b>
                <br></br>${price}.00 USD
              </PriceWrapper>
              <ChangeCircleOutlined
                onClick={onPriceChange}
              ></ChangeCircleOutlined>
            </SendBox>
          </SendPageContainer>
          <ButtonWraper>
            <CancelButton>취소</CancelButton>
            <NextButton>다음</NextButton>
          </ButtonWraper>
        </BoxContainer>
      </BoxWrapper>
    </Box>
  );
};

const PriceWrapper = styled.div`
  width: 100%;
  height: 100%;
  margin: 15px;
`;

const BalanceWrapper = styled.div`
  width: 100%;
  height: 100%;
  margin: 15px;
`;

const BoxWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;

const BoxContainer = styled.div`
  width: 100%;
  height: 100%;
  flex-direction: col;
  justify-contents: space-around;
`;
const ButtonWraper = styled.div`
  display: flex;
  flex-direction: row;
  padding: 180px 30px 10px 30px;
`;
const CancelButton = styled.button`
  background-color: white;
  border: 1px solid royalblue;
  border-radius: 40px;
  margin: 10px;
  width: 400px;
  height: 50px;
  color: royalblue;
`;
const NextButton = styled.button`
  background-color: royalblue;
  border: 1px solid royalblue;
  border-radius: 40px;
  margin: 10px;
  width: 400px;
  height: 50px;
  color: white;
`;
const SendBox = styled.div`
  border: 1px solid gold;
  display: flex;
  flex-direction: row;
  position: relative;
  justify-items: center;
  width: 300px;
  height: 70px;
  border: 1px solid lightgray;
  border-radius: 4px;
  margin-bottom: 10px;
  margin-left: 90px;
  margin-top: 10px;
`;
const SendPageContainer = styled.div`
  height: 80px;
  display: flex;
  flex-direction: row;
  margin-left: 20px;
  margin-right: 20px;
  justify-content: center;
  align-items: center;
  flex: 1;
  background-color: white;
`;
const SendWrapper = styled.div`
  grid-column: 2 / span 1;
  place-self: center stretch;
  height: 60px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  flex: 1;
  background-color: white;
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-left: 20px;
  margin-right: 20px;
`;
const LogoCircle = styled.img`
  display: flex;
  place-self: center;
  height: 36px;
  width: 26px;
  border-radius: 18px;
  border: 1px solid lightgray;
  margin: 15px;
`;
export default SendPageMain;
