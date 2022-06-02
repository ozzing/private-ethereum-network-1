import styled from 'styled-components';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import SelectButton from './SelectButton';
import LetterAvatars from './Avatar';

const MainHeader = () => {
  return (
    <div
      style={{
        display: 'flex',
        height: '72px',
        width: '80vw',
        justifyContent: 'space-between',
        alignItems: 'center',
        // background: 'red',
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <CurrencyExchangeIcon
          style={{ marginRight: '10px', marginTop: '-2px' }}
        />
        <span>소공대학교</span>
      </div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <SelectButton />
        <LetterAvatars />
      </div>
    </div>
  );
};

export default MainHeader;
