import styled from '@emotion/styled';
import SendHeader from './SendHeader';
import SendMain from './SendMain';
import GlobalStyle from '../../styles/GlobalStyle';

const SendContainer = () => {
  return (
    <>
      <SendWrapper>
        <SendHeader />
        <SendMain />
      </SendWrapper>
      <GlobalStyle />
    </>
  );
};
const SendWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 31vw;
  min-height: 82vh;
  box-shadow: 0 0 7px 0 rgb(0 0 0 / 8%);
  background-color: white;
  align-items: center;

  @media screen and (min-width: 1281px) {
    width: 31vw;
    min-height: 82vh;
    box-shadow: ;
  }
`;
export default SendContainer;
