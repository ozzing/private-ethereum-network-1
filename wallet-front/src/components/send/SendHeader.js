import styled from 'styled-components';
import { HorizontalLine } from '../shared/Components';
import SendSearch from './SendSearch';

const AccountHeader = () => {
  return (
    <>
      <HeaderWrapper>
        {/* <span></span> */}
        <SendWrapper>
          <h3>보낼 대상:</h3>
        </SendWrapper>
        <ButtonWraper>
          <Button>취소</Button>
        </ButtonWraper>
      </HeaderWrapper>
      <SendSearch></SendSearch>
      <HorizontalLine />
    </>
  );
};
const ButtonWraper = styled.div`
  align-self: center;
  justify-self: end;
  padding-right: 30px;
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
  display: grid;
  grid-template-columns: 30% minmax(30%, 1fr) 30%;
  -webkit-column-gap: 5px;
  -moz-column-gap: 5px;
  column-gap: 5px;
  padding: 0 8px;
  border-bottom: 1px solid var(--color-border-muted);
  width: 100%;
  height: 64px;
  background-color: #f2f4f6;
`;
const Button = styled.button`
  background-color: transparent;
  border-color: transparent;
  border-radius: 5px;
  color: blue;
`;
export default AccountHeader;
