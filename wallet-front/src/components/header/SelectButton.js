import { useState } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const SelectButton = () => {
  const [server, setServer] = useState(2);

  const handleChange = (event) => {
    setServer(event.target.value);
  };

  return (
    <div
      style={{
        borderRadius: '100px',
        border: '1px solid var(--color-border-default',
      }}
    >
      <FormControl sx={{ m: 1, minWidth: 180 }} size="small">
        <InputLabel id="demo-simple-select-autowidth-label">Network</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={server}
          onChange={handleChange}
          autoWidth
          label="Network"
          style={{ borderRadius: '100px' }}
        >
          <MenuItem value={1}>이더리움 메인넷</MenuItem>
          <MenuItem value={2}>test_net</MenuItem>
          <MenuItem value={3}>Ropsten 테스트 네트워크</MenuItem>
          <MenuItem value={4}>Kovan 테스트 네트워크</MenuItem>
          <MenuItem value={5}>Rinkeby 테스트 네트워크</MenuItem>
          <MenuItem value={6}>Goerli 테스트 네트워크</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};
export default SelectButton;
