import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';
import COLORS from '../constants/Colors';

const GlobalStyle = createGlobalStyle`
${normalize}

html,
body {
  margin: 0;
  padding: 0;
}
a{
  text-decoration-line : none;
  color: black;
}
p{  
  font-size: 16px;
  line-height: 24px;
  margin-block-start: 0px;
  margin-block-end: 6px;
}
::placeholder {
  color: ${COLORS.gray};
  opacity: 1; /* Firefox */
}
input:focus , select:focus, option:focus, textarea:focus, button:focus{
  outline: none;
}
button:hover {
  cursor: pointer
}
img {
  -webkit-user-select:none; 
  -moz-user-select:none; 
  -ms-user-select:none; 
  user-select:none
}
`;

export default GlobalStyle;
