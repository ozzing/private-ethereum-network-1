import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import { deepOrange, deepPurple } from '@mui/material/colors';

const LetterAvatars = () => {
  return (
    <div>
      <Avatar sx={{ bgcolor: deepOrange[500], width: 30, height: 30 }}>
        N
      </Avatar>
    </div>
  );
};
export default LetterAvatars;
