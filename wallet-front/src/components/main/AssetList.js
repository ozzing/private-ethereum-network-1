import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';

import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import axios from 'axios';

const AssetList = () => {
  const [tokenList, setTokenList] = useState([]);
  // commit test

  useEffect(() => {
    const loadData = window.localStorage.getItem('receipt');
    if (loadData !== null) {
      const receipt = JSON.parse(loadData);
      let tempList = [];
      receipt.forEach((element) => {
        if (element.job === 'deploy') {
          const tokenName = element.tokenName;
          const contract_address = element.contractAddress;
          // contractAddress 로 다시 balance 검색
          // submit this to server

          const balanceCheck = async () => {
            try {
              const address = '0x52fCBe983F64dE326F2C0b5DFd26E0f3D1633c67';
              const response = await axios.post(
                'http://localhost:3000/balance',
                {
                  address: address,
                  contract_address: contract_address,
                }
              );
              const { data } = response;
              console.log(data);
              tempList = [
                ...tempList,
                {
                  tokenName: tokenName,
                  contractAddress: contract_address,
                  amount: data,
                },
              ];

              setTokenList(tempList);
            } catch (err) {
              console.log('Error >>', err);
            }
          };
          balanceCheck();
        }
      });
    }
  }, []);

  return (
    <Box sx={{ width: '100%' }}>
      <nav aria-label="token list items">
        <List>
          {tokenList.map(({ tokenName, contractAddress, amount }, index) => {
            return (
              <div key={index}>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemText primary={tokenName} secondary={amount} />
                    <ArrowForwardIosIcon
                      style={{ width: '12px', height: '12px' }}
                    />
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

export default AssetList;
