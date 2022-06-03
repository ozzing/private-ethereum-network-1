import styled from 'styled-components';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import SelectButton from './SelectButton';
import LetterAvatars from './Avatar';
import { Link } from 'react-router-dom';

const MainHeader = () => {
  return (
    <HeaderWrapper>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <Link to="/">
          <CurrencyExchangeIcon
            style={{ marginRight: '10px', marginTop: '-2px' }}
          />
          <span>소공대학교</span>
        </Link>
      </div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <SelectButton />
        <LetterAvatars />
      </div>
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.div`
  display: flex;
  height: 72px;
  width: 80vw;
  justify-content: space-between;
  align-items: center;
`;

export default MainHeader;
