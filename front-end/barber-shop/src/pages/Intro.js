import { Button, Divider, Typography } from '@mui/material';
import React from 'react';
import styled from 'styled-components';
import { BasicLayout } from '../components/BasicLayout';
import Img1 from '../assets/barberArchitecture/4.jpg';
import {
  AspectRatioContainer,
  ResponsiveImage,
} from '../components/ResponsiveImage';
import { BG_DECORATION_POSITIONS } from '../utils/constants';
import { blue, red } from '@mui/material/colors';

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const Header = styled.header``;
const Content = styled.main`
  margin-bottom: 3rem;
  border-radius: 4px;
  overflow: hidden;

  ${ResponsiveImage} {
    filter: grayscale(1);
  }
`;
const MainButtonsContainer = styled.div`
  position: absolute;
  top: 0;
  height: 100%;
  width: 100%;

  z-index: 2;

  & .buttons {
    z-index: 2;
    position: absolute;
    width: 100%;
    height: 100%;
    text-align: center;
    display: flex;
    flex-direction: column;

    & .btn {
      width: 100%;
      display: block;
      flex: 1 0 50%;
      height: 50%;
      padding-block: 0;
      font-size: 1.45rem;
      background-color: ${`${blue[200]}25`};
      border-radius: 4px 4px 0 0;
      position: relative;
      font-weight: 600;
      color: ${blue[500]};
      &:last-of-type {
        background-color: ${`${red[200]}25`};
        border-radius: 0 0 4px 4px;
        color: ${red[500]};

        &::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          border-bottom: 1px solid ${red[400]};
        }
      }
    }
  }
`;

const Intro = () => {
  return (
    <BasicLayout
      height="100vh"
      bgDecPositions={BG_DECORATION_POSITIONS.random1}
      navbar
    >
      <Wrapper>
        <Header>
          <Typography variant="h4">
            Here at VD Barber Shop we choose{' '}
            <span style={{ color: blue[200], fontWeight: 500 }}>Quality</span>{' '}
            over{' '}
            <span style={{ color: red[200], fontWeight: 500 }}>Quantity</span>
          </Typography>
        </Header>
        <Divider sx={{ my: 5 }} />
        <Content>
          <AspectRatioContainer ratio={3 / 4}>
            <MainButtonsContainer>
              <div className="buttons">
                <Button variant="text" size="large" className="btn" sx={{}}>
                  services
                </Button>
                <Button variant="text" size="large" className="btn" sx={{}}>
                  more about us
                </Button>
              </div>
            </MainButtonsContainer>
            <ResponsiveImage src={Img1} alt="VD Barber Shop Inside" vertical />
          </AspectRatioContainer>
        </Content>
      </Wrapper>
    </BasicLayout>
  );
};

export default Intro;
