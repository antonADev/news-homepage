import styled, { keyframes } from 'styled-components';

import { neutralColors } from '../../constants/styles';

import { deviceMin } from '../../constants/device';

const overlayIn = keyframes`
0% {
    scale: 0 0.005;
  }
  33% {
    scale: 1 0.005;
  }
  66%,
  100% {
    scale: 1 1;
  }
`;

export const OverlayWrapper = styled.div`
  display: ${(props) => (props.isOpen ? 'block' : 'none')};
  position: absolute;
  top: 0;
  right: ${(props) => (props.isOpen ? '0' : '-100%')};
  height: 100vh;
  width: 100vw;
  background-color: ${neutralColors.veryDarkBlue};
  opacity: 0.4;
  animation: ${overlayIn} 2s;

  @media ${deviceMin.laptop} {
    display: none;
  }
`;
