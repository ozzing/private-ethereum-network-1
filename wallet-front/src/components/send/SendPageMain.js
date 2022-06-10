import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import styled from 'styled-components';
import logo from '../shared/logo.png';
import { ChangeCircleOutlined } from '@mui/icons-material';
import Input from '@mui/material/Input';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const SendPageMain = () => {
  const navigate = useNavigate();
  const [value, setValue] = useState('eth', 'USD');
  const [money, setMoney] = useState('USD', 'eth');
  const onPriceChange = (event) => {
    value === 'eth' ? setValue('USD') : setValue('eth');
    money === 'USD' ? setMoney('eth') : setMoney('USD');
  };

  const [balance, setBalance] = useState();

  useEffect(() => {
    setBalance(4000);
    const InitCall = async () => {
      try {
        const response = await axios.get('http://localhost:3000/');
        const { data } = response;
        console.log(data);
      } catch (err) {
        console.log('Error >>', err);
      }
    };
    InitCall();
  }, []);

  const [price, setPrice] = useState(0);
  const [visible, setVisible] = useState(false);

  const handleOnchange = (event) => {
    setPrice(event.target.value);
    if (event.target.value > balance) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  const onCancelClick = (event) => {
    navigate('/send');
  };

  const onMaxClick = (event) => {
    price === balance ? setPrice(0) : setPrice(balance);
  };

  const onSendClick = (event) => {};

  return (
    <Box sx={{ width: '100%' }}>
      <BoxWrapper>
        <BoxContainer>
          <ButtonWrapper></ButtonWrapper>
          {visible && <WarnArea>가스 자금 부족</WarnArea>}
          <SendPageContainer>
            <TitleWrapper>자산: </TitleWrapper>
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
            <TitleWrapper>
              금액:
              <MaxButton onClick={onMaxClick}>최대</MaxButton>
            </TitleWrapper>
            <SendBox>
              <PriceWrapper>
                <Input
                  type="number"
                  min="0"
                  max={balance}
                  value={price}
                  onChange={handleOnchange}
                />
                {value}
                <br></br>
                {money === 'USD' ? price * 1778.49 : price * 0.00055993} {money}
              </PriceWrapper>
              <ChangeWraper>
                <ChangeCircleOutlined
                  onClick={onPriceChange}
                ></ChangeCircleOutlined>
              </ChangeWraper>
            </SendBox>
          </SendPageContainer>
          <ButtonWraper>
            <CancelButton onClick={onCancelClick}>취소</CancelButton>
            <SendButton onClick={onSendClick}>전송</SendButton>
          </ButtonWraper>
        </BoxContainer>
      </BoxWrapper>
    </Box>
  );
};

const WarnArea = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  align-items: center;
  justify-items: filled;
  height: 20px;
  border: 1px solid red;
  border-radius: 8px;
  margin: 10px;
  padding: 20px;
  background-color: rgb(255 0 0 / 8%);
`;

const TitleWrapper = styled.div`
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 150px;
`;

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

const ChangeWraper = styled.div`
  display: flex;
  flex-direction: row;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
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
  padding: 230px 30px 10px 30px;
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

const SendButton = styled.button`
  background-color: royalblue;
  border: 1px solid royalblue;
  border-radius: 40px;
  margin: 10px;
  width: 400px;
  height: 50px;
  color: white;
`;

const MaxButton = styled.button`
  margin-left: 20px;
  background-color: white;
  border: 1px solid royalblue;
  border-radius: 40px;
  width: 40px;
  height: 20px;
  font-size: 5px;
  color: royalblue;
`;

const SendBox = styled.div`
  border: 1px solid gold;
  display: flex;
  flex-direction: row;
  position: relative;
  justify-items: center;
  width: 100%;
  height: 70px;
  border: 1px solid lightgray;
  border-radius: 4px;
  margin-bottom: 10px;
  margin-top: 10px;
`;
const SendPageContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 80px;
  margin: 20px;
  justify-content: center;
  align-items: center;
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
