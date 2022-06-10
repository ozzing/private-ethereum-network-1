import styled from '@emotion/styled';
import SendPageHeader from './SendPageHeader';
import SendPageMain from './SendPageMain';
import GlobalStyle from '../../styles/GlobalStyle';

const SendPage = () => {
  return (
    <>
      <SendBase>
        <SendWrapper>
          <SendPageHeader />
          <SendPageMain />
          <GlobalStyle />
        </SendWrapper>
      </SendBase>
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
const SendBase = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: '1rem 0';
`;

export default SendPage;
