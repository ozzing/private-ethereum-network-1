import Box from '@mui/material/Box';
import Input from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';

const DeployForm = () => {
  const [tokenName, setTokenName] = useState('');
  const [tokenSymbol, setTokenSymbol] = useState('');
  const [tokenSupply, setTokenSupply] = useState('');

  const handleTokenName = (event) => {
    setTokenName(event.target.value);
  };
  const handleTokenSymbol = (event) => {
    setTokenSymbol(event.target.value);
  };
  const handleTokenSupply = (event) => {
    setTokenSupply(event.target.value);
  };

  const handleSubmit = () => {
    const payload = {
      tokenName: tokenName,
      tokenSymbol: tokenSymbol,
      tokenSupply: tokenSupply,
    };
    // submit this to server
    console.log(payload);
  };

  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <div>
        <h3>Token Name</h3>
        <Input placeholder="token_name" onChange={handleTokenName} />
      </div>
      <div>
        <h3>Token Symbol</h3>
        <Input placeholder="token_symbol" onChange={handleTokenSymbol} />
      </div>
      <div>
        <h3>Token Supply</h3>
        <Input placeholder="token_supply" onChange={handleTokenSupply} />
      </div>

      <Button onClick={handleSubmit}>Submit</Button>
    </Box>
  );
};
export default DeployForm;
