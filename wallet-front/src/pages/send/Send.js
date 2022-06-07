import SendContainer from '../../components/send/SendContainer';
import SendMain from '../../components/send/SendMain';
import styled from '@emotion/styled';

const Send = () => {
  return (
    <SendBase>
      <SendContainer>
        <h2>Send</h2>y
        <SendMain />
      </SendContainer>
    </SendBase>
  );
};

const SendBase = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: '1rem 0';
`;
export default Send;
