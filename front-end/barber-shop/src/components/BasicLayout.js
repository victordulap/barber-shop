import { Container } from '@mui/material';
import React from 'react';
import { useTheme } from '@mui/material/styles';
import styled from 'styled-components';
import { grey } from '@mui/material/colors';
import { BG_DECORATION_POSITIONS } from '../utils/constants';

const Wrapper = styled.div`
  background: ${({ bgColor }) => bgColor};
  color: ${({ textColor }) => textColor};
  position: relative;
  ${({ height }) =>
    height ? `height: ${height}; overflow: hidden;` : 'min-height: 100vh;'}
  overflow-x: hidden;
`;
const BgDecorationWrapper = styled.div`
  height: 100%;
  width: 100%;
  position: fixed;
  z-index: 0;
`;
const BgDecoration = styled.div`
  width: 200%;
  padding-top: 200%;
  background-color: ${grey[900]};
  position: absolute;
  ${({ right }) => right && `right: ${right};`}
  ${({ bottom }) => bottom && `bottom: ${bottom};`}
  ${({ left }) => left && `left: ${left};`}
  ${({ top }) => top && `top: ${top};`}
  border-radius: 50%;
  overflow: hidden;
  z-index: -1;
  opacity: 0.65;
`;
const StyledContainer = styled(Container)`
  z-index: 2;
  position: relative;
`;

export const BasicLayout = ({
  children,
  height,
  bgDecPositions = BG_DECORATION_POSITIONS.default,
}) => {
  const theme = useTheme();
  return (
    <Wrapper
      bgColor={theme.palette.background.default}
      textColor={theme.palette.text.primary}
      height={height}
    >
      <BgDecorationWrapper>
        <BgDecoration
          left={bgDecPositions[0].left}
          top={bgDecPositions[0].top}
        />
        <BgDecoration
          right={bgDecPositions[1].right}
          bottom={bgDecPositions[1].bottom}
        />
      </BgDecorationWrapper>
      <StyledContainer>{children}</StyledContainer>
    </Wrapper>
  );
};

const withBasicLayout =
  (WrappedComponent) =>
  ({ ...props }) =>
    (
      <BasicLayout>
        <WrappedComponent {...props} />
      </BasicLayout>
    );

export default withBasicLayout;
