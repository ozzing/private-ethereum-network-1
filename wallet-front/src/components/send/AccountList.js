import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import styled from 'styled-components';
import COLORS from '../../constants/Colors';
import { useNavigate } from 'react-router-dom';

import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';

const AccountList = () => {
  const navigate = useNavigate();
  const [accountList, setAccountList] = useState([]);

  const handleClick = (name, key) => {
    navigate('/send/account', { state: { name: name, key: key } });
  };

  useEffect(() => {
    setAccountList([
      {
        img: '1.jpg',
        name: 'Account 1',
        key: '0x4510506D37C30f96AAdceaed159dEd8d544Df8Ff',
      },
      {
        img: '2.jpg',
        name: 'Account 3',
        key: '0x3BfE330e4A94F787E23D477164816b3174232Fe1',
      },
      {
        img: '3.jpg',
        name: 'Account 4',
        key: '0xF4CD7568795A8dc95534425A6495c495d2E78cEc',
      },
    ]);
  }, []);

  return (
    <Box sx={{ width: '100%' }}>
      <nav aria-label="receipt list items">
        <HeaderWrapper>내 계정</HeaderWrapper>
        <List>
          {accountList.map(({ img, name, key }, index) => {
            return (
              <div key={index}>
                <ListItem disablePadding>
                  <ListItemButton
                    onClick={() => {
                      handleClick(name, key);
                    }}
                  >
                    <Circle />
                    <ListItemText primary={name} secondary={key} />
                  </ListItemButton>
                </ListItem>
                <Divider />
              </div>
            );
          })}
        </List>
      </nav>
    </Box>
  );
};
const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 10px;
  padding-left: 20px;
  font-size: 13px;
  background-color: #f2f4f6;
  border-bottom: 1px solid lightgray;
`;

const Circle = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 36px;
  width: 36px;
  background: ${COLORS.primary};
  border-radius: 18px;
  border: none;
  margin-right: 15px;
`;
export default AccountList;
