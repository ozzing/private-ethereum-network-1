import MoreVertIcon from '@mui/icons-material/MoreVert';
import styled from 'styled-components';
import { HorizontalLine } from '../shared/Components';

const AccountHeader = () => {
  return (
    <>
      <HeaderWrapper>
        <AccountWrapper>
          <span>Account2</span>
        </AccountWrapper>
        <IconWrapper>
          <MoreVertIcon />
        </IconWrapper>
      </HeaderWrapper>
      <HorizontalLine />
    </>
  );
};
const IconWrapper = styled.div`
  align-self: center;
  justify-self: end;
`;
const AccountWrapper = styled.div`
  grid-column: 2 / span 1;
  place-self: center stretch;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
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
`;

export default AccountHeader;
