import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';

import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';

const ReceiptList = () => {
  const [receiptList, setReceiptList] = useState([]);

  useEffect(() => {
    // 토큰 가져오기
    const loadData = window.localStorage.getItem('receipt');
    if (loadData !== null) {
      const receipt = JSON.parse(loadData);
      let tempList = [];
      receipt.forEach((element) => {
        // console.log(element);
        const job = 'deploy';
        const contractAddress = element.contractAddress;
        const amount = parseInt(element.logs[0].data, 16);
        tempList = [
          ...tempList,
          { job: job, contractAddress: contractAddress, amount: amount },
        ];
      });
      setReceiptList(tempList);
    }
  }, []);

  return (
    <Box sx={{ width: '100%' }}>
      <nav aria-label="receipt list items">
        <List>
          {receiptList.map(({ contractAddress, amount, job }, index) => {
            return (
              <div key={index}>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemText primary={job} secondary={contractAddress} />
                    <span>{amount}</span>
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

export default ReceiptList;
