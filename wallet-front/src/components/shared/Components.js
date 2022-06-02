import styled from 'styled-components';
import COLORS from '../../constants/Colors';

export const HorizontalLine = styled.div`
  border-top: 1px solid ${COLORS.gray1};
  height: 0.5px;
  width: 100%;
`;

export const Circle = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 36px;
  width: 36px;
  background: ${COLORS.primary};
  border-radius: 18px;
  border: none;
  margin-top: 6px;
  margin-bottom: 5px;
`;
