import * as React from 'react';
import Box from '@mui/material/Box';
import styled from 'styled-components';
import COLORS from '../../constants/Colors';
import { HorizontalLine } from '../shared/Components';

const SendMain = () => {
  return (
    <Box sx={{ width: '100%' }}>
      <SendWrapper>
        <ButtonWrapper>
          <ButtonSpan>내 계정 간 전송</ButtonSpan>
        </ButtonWrapper>
      </SendWrapper>
      <HorizontalLine />
      <SendList></SendList>
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
const ButtonSpan = styled.span`
  font-size: 18px;
  color: ${COLORS.primary};
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
