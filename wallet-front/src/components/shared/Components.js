import styled from 'styled-components';
import COLORS from '../../constants/Colors';

export const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 80vw;
  min-height: 82vh;
  box-shadow: 0 0 7px 0 rgb(0 0 0 / 8%);
  background-color: #ffffff;
  align-items: center;

  @media screen and (min-width: 1281px) {
    width: 62vw;
    min-height: 82vh;
    box-shadow: ;
  }
`;

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

export const Lens = (
  <svg
    width="22"
    height="25"
    viewBox="0 0 22 25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M4.98811 9.10345C4.98811 13.2793 8.43697 16.7069 12.7441 16.7069C17.0511 16.7069 20.5 13.2793 20.5 9.10345C20.5 4.92758 17.0511 1.5 12.7441 1.5C8.43697 1.5 4.98811 4.92758 4.98811 9.10345Z"
      stroke="white"
      stroke-width="3"
    />
    <path d="M8.42382 14.8965L2.11295 24" stroke="white" stroke-width="3" />
  </svg>
);
