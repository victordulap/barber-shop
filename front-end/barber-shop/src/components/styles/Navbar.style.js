import { IconButton } from '@mui/material';
import { blue } from '@mui/material/colors';
import styled from 'styled-components';

export const StyledNavbar = styled.nav``;
export const MenuBtn = styled(IconButton)`
  position: absolute;
  top: 0;
  right: 0;
  z-index: 99;
  padding: 0.325rem;
  margin: 1.25rem 0.75rem 0 0;
  border: 1px solid ${blue[400]};
  border-radius: 4px;
`;
