import React from 'react';
import { ReactComponent as HeroImg } from '../assets/hero.svg';
import { grey, blue, red } from '@mui/material/colors';
import styled from 'styled-components';
import { BasicLayout } from '../components/BasicLayout';
import { Button, Divider } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Link } from 'react-router-dom';
import { ScriptText } from '../components/styles/Text.style';

const StyledHero = styled.div`
  height: 100vh;
  overflow: hidden;
`;
const HeroImgWrapper = styled.div`
  width: 55%;
  margin: 0 auto;
  margin-top: 2rem;
`;
const HeroContent = styled.div`
  /* z-index: 2; */
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  position: relative;
`;
const HeroHeader = styled.header`
  text-align: center;
`;
const HeroFooter = styled.footer`
  margin: 0 auto;
`;
const StyledBtn = styled((props) => <Button {...props} />)`
  color: ${grey[50]};
  border-radius: 10rem;
  opacity: 0.9;
`;
const StyledDivider = styled(Divider)`
  border-color: ${({ bdc }) => bdc || blue[500]};
  font-size: 0.75rem;
  text-transform: uppercase;

  &::before,
  &::after {
    border-top-color: ${({ bdc }) => bdc || red[400]};
  }
`;

const Hero = () => {
  return (
    <BasicLayout height="100vh">
      <StyledHero>
        <HeroContent>
          <HeroHeader>
            <StyledDivider bdc={blue[500]}>amazing experiences</StyledDivider>
            <ScriptText
              variant="h3"
              component="h1"
              className="text"
              marginY={2}
            >
              VD Barber Shop
            </ScriptText>
            <StyledDivider bdc={red[400]}>like for real</StyledDivider>
            <HeroImgWrapper>
              <HeroImg />
            </HeroImgWrapper>
          </HeroHeader>
          <HeroFooter>
            <StyledBtn
              variant="contained"
              size="large"
              endIcon={<ArrowForwardIcon />}
              component={Link}
              to="/intro"
            >
              get a serious haircut
            </StyledBtn>
          </HeroFooter>
        </HeroContent>
      </StyledHero>
    </BasicLayout>
  );
};

export default Hero;
