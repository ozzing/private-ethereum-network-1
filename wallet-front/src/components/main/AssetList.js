import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';

import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const AssetList = () => {
  const [tokenList, setTokenList] = useState([]);

  useEffect(() => {
    const loadData = window.localStorage.getItem('receipt');
    if (loadData !== null) {
      const receipt = JSON.parse(loadData);
      let tempList = [];
      receipt.forEach((element) => {
        const tokenName = element.tokenName;
        const contractAddress = element.contractAddress;
        const amount = parseInt(element.logs[0].data, 16);
        tempList = [
          ...tempList,
          {
            tokenName: tokenName,
            contractAddress: contractAddress,
            amount: amount,
          },
        ];
      });
      setTokenList(tempList);
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
