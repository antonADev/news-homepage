import styled from 'styled-components';
import { ReactComponent as BrandLogo } from '../../assets/images/logo.svg';

export const MainLogo = styled(BrandLogo)`
  height: clamp(50px, -0.875rem + 8.333vw, 55px);
  width: clamp(50px, -0.875rem + 8.333vw, 70px);
`;
