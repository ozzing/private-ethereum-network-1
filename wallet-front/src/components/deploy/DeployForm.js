import Box from '@mui/material/Box';
import Input from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import swal from 'sweetalert';
import { useNavigate } from 'react-router-dom';

const DeployForm = () => {
  const navigate = useNavigate();
  const [tokenName, setTokenName] = useState('');
  const [tokenSymbol, setTokenSymbol] = useState('');
  const [tokenSupply, setTokenSupply] = useState('');
  const [result, setResult] = useState('');

  const handleTokenName = (event) => {
    setTokenName(event.target.value);
  };
  const handleTokenSymbol = (event) => {
    setTokenSymbol(event.target.value);
  };
  const handleTokenSupply = (event) => {
    setTokenSupply(event.target.value);
  };

  useEffect(() => {
    if (result !== '') {
      swal(
        '토큰이 발행되었습니다!',
        '메인으로 이동하시겠습니까?',
        'success'
      ).then((value) => {
        if (value === true) {
          navigate('/');
        }
      });
    }
  }, [result, navigate]);

  const handleSubmit = () => {
    const payload = {
      tokenName: tokenName,
      tokenSymbol: tokenSymbol,
      tokenSupply: tokenSupply,
    };
    // submit this to server
    const Submit = async () => {
      try {
        const { data } = await axios.post(
          'http://localhost:3000/deploy',
          payload
        );
        const { receipt } = data;
        setResult(receipt);
      } catch (err) {
        console.log('Error >>', err);
      }
    };
    Submit();
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
