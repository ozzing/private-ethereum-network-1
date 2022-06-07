import { useState } from 'react';
import styled from 'styled-components';
import SearchIcon from '@mui/icons-material/Search';
import QrCodeIcon from '@mui/icons-material/QrCode';

function SendSearch() {
  const [keyword, setKeyword] = useState('');
  return (
    <SearchContainer>
      {' '}
      <SearchArea>
        <SearchIcon sx={{ color: 'lightgray', fontSize: 25, margin: 1.5 }} />
        <SearchInput
          type="text"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          placeholder="검색, 공개 주소(0x) 또는 ENS"
        />
        <QrCodeIcon sx={{ color: 'blue', fontSize: 25, margin: 1.5 }} />
      </SearchArea>
    </SearchContainer>
  );
}

const SearchContainer = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  align-items: flex-start;
  justify-items: filled;
  width: 100%;
  background-color: #f2f4f6;
`;

const SearchArea = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  align-items: center;
  justify-items: filled;
  width: 100%;
  height: 50px;
  border: 1px solid lightgray;
  border-radius: 8px;
  margin-bottom: 8px;
  margin-left: 10px;
  margin-right: 10px;
  background-color: white;
`;

const SearchInput = styled.input`
  position: relative;
  width: 100%;
  margin-left: 2px;
  margin-right: 2px;
  font-size: 1rem;
  height: 95%;
  border: none;
  background: none;
  &:focus {
    outline: none;
  }
`;

export default SendSearch;
