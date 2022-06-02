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
    setReceiptList([
      {
        to: '0x52fCBe983F64dE326F2C0b5DFd26E0f3D1633c67',
        amount: '150',
        job: 'send',
      },
      {
        to: '0x52fCBe983F64dE326F2C0b5DFd26E0f3D1633c67',
        amount: '100',
        job: 'receive',
      },
      {
        to: '0x52fCBe983F64dE326F2C0b5DFd26E0f3D1633c67',
        amount: '10',
        job: 'send',
      },
    ]);
  }, []);

  return (
    <Box sx={{ width: '100%' }}>
      <nav aria-label="receipt list items">
        <List>
          {receiptList.map(({ to, amount, job }, index) => {
            return (
              <div key={index}>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemText primary={job} secondary={to} />
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
