import * as React from 'react';
import Box from '@mui/material/Box';
import styled from 'styled-components';
import COLORS from '../../constants/Colors';
import { HorizontalLine } from '../shared/Components';
import AccountList from './AccountList';

const SendMain = () => {
  const [value, setValue] = React.useState(
    '내 계정 간 전송',
    '❮  전체 목록으로 돌아가기'
  );
  const handleChange = (event, newValue) => {
    value === '내 계정 간 전송'
      ? setValue('❮  전체 목록으로 돌아가기')
      : setValue('내 계정 간 전송');
  };

  const [visible, setVisible] = React.useState(false);
  const handleVisible = (event) => {
    setVisible(!visible);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <SendWrapper>
        <ButtonWrapper>
          <ButtonSpan
            onClick={() => {
              handleChange();
              handleVisible();
            }}
          >
            {value}
          </ButtonSpan>
        </ButtonWrapper>
      </SendWrapper>
      <HorizontalLine />
      <SendList></SendList>
      {visible && <AccountList></AccountList>}
    </Box>
  );
};

const SendList = styled.div``;
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

const ButtonSpan = styled.button`
  font-size: 18px;
  color: ${COLORS.primary};
  background: none;
  border: none;
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-left: 20px;
  margin-right: 20px;
`;
export default SendMain;
