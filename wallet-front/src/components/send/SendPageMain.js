import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import styled from 'styled-components';
import logo from '../shared/logo.png';
import { ChangeCircleOutlined } from '@mui/icons-material';
import Input from '@mui/material/Input';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router';
import swal from 'sweetalert';

const SendPageMain = () => {
  const navigate = useNavigate();

  const [value, setValue] = useState('ETH', 'USD');
  const [money, setMoney] = useState('USD', 'ETH');
  const onPriceChange = (event) => {
    value === 'ETH' ? setValue('USD') : setValue('ETH');
    money === 'USD' ? setMoney('ETH') : setMoney('USD');
  };
  const [balance, setBalance] = useState(0);
  const [tokenName, setTokenName] = useState('');
  const { state } = useLocation();

  const [list, setList] = useState([]);
  const [result, setResult] = useState('');

  useEffect(() => {
    const loadData = window.localStorage.getItem('receipt');
    if (loadData !== null) {
      const receipt = JSON.parse(loadData);

      setList(receipt);
      setTokenName(receipt[0].tokenName);
      setBalance(parseInt(receipt[0].logs[0].data, 16));
    }
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

  useEffect(() => {
    if (result !== '') {
      // set token in local storage
      window.localStorage.setItem('receipt', JSON.stringify(list));

      swal(
        '전송이 완료되었습니다',
        '메인으로 이동하시겠습니까?',
        'success'
      ).then((value) => {
        if (value === true) {
          navigate('/');
        }
      });
    }
  }, [result, list, navigate]);

  const onSendClick = (event) => {
    const contract_address = state.key;
    const address = '0x52fCBe983F64dE326F2C0b5DFd26E0f3D1633c67';
    const value = price;
    const payload = {
      contract_address: contract_address,
      address: address,
      value: value,
    };

    // submit this to server
    const Submit = async () => {
      try {
        const { data } = await axios.post(
          'http://localhost:3000/send',
          payload
        );
        const { receipt } = data;
        receipt.tokenName = tokenName;
        receipt.job = 'send';
        receipt.address = contract_address;
        console.log(receipt);
        setResult(receipt);
        setList([...list, receipt]);
      } catch (err) {
        console.log('Error >>', err);
      }
    };
    Submit();
  };

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
                <b>{tokenName}</b>
                <br></br>
                잔액: {balance} {tokenName}
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
