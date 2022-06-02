import MoreVertIcon from '@mui/icons-material/MoreVert';
import styled from 'styled-components';
import { HorizontalLine } from '../shared/Components';

const AccountHeader = () => {
  return (
    <>
      <HeaderWrapper>
        <span></span>
        <span>Account2</span>
        <MoreVertIcon
          style={{
            placeSelf: 'center end',
          }}
        />
      </HeaderWrapper>
      <HorizontalLine />
    </>
  );
};

const HeaderWrapper = styled.div`
  width: 100%;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export default AccountHeader;
