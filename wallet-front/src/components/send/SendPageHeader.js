import styled from 'styled-components';
import { Checkbox } from '@mui/material';
import { HorizontalLine } from '../shared/Components';

const handleClick = (event, newValue) => {
  window.location.href = '/send';
};

const AccountHeader = () => {
  const name = 'Account 1';
  const key = '0x52fCBe983F64dE326F2C0b5DFd26E0f3D1633c67';
  return (
    <>
      <HeaderWrapper>
        {/* <span></span> */}
        <SendWrapper>
          <h3>보내기</h3>
        </SendWrapper>
        <AccountArea>
          <Checkbox checked={true} defaultChecked color="success" />
          <AccountInfo>
            <AccountName>{name}</AccountName>
            <AccountKey>{key}</AccountKey>
          </AccountInfo>
          <Button onClick={handleClick}>✖</Button>
        </AccountArea>
      </HeaderWrapper>
      <HorizontalLine></HorizontalLine>
    </>
  );
};
const AccountName = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  color: royalblue;
  margin: 5px;
`;
const AccountKey = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  margin: 5px;
  font-size: small;
`;
const AccountInfo = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;
const SendWrapper = styled.div`
  grid-column: 2 / span 1;
  place-self: center stretch;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
  background-color: #f2f4f6;
`;
const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  grid-template-columns: 30% minmax(30%, 1fr) 30%;
  -webkit-column-gap: 5px;
  -moz-column-gap: 5px;
  column-gap: 5px;
  padding: 0 8px;
  border-bottom: 1px solid var(--color-border-muted);
  width: 97%;
  height: 140px;
  background-color: #f2f4f6;
  box-shadow: 0 0 7px 0 rgb(0 0 0 / 8%);
`;
const Button = styled.button`
  background-color: transparent;
  border-color: transparent;
  border-radius: 5px;
  color: black;
`;
const AccountArea = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  align-items: center;
  justify-items: filled;
  width: 95%;
  height: 70px;
  border: 1px solid royalblue;
  border-radius: 8px;
  margin-bottom: 8px;
  margin-left: 10px;
  margin-right: 10px;
  background-color: white;
`;

export default AccountHeader;
