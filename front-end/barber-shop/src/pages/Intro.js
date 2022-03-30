import { Button, Divider, Typography } from '@mui/material';
import React from 'react';
import styled from 'styled-components';
import { BasicLayout } from '../components/BasicLayout';
import Img1 from '../assets/barberArchitecture/2.jpg';
import { ResponsiveImage } from '../components/ResponsiveImage';
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
`;
const MainButtonsContainer = styled.div`
  position: relative;
  height: 100%;
  border-radius: 4px;
  overflow: hidden;

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

      &:last-of-type {
        background-color: ${`${red[200]}25`};
        border-radius: 0 0 4px 4px;

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

  & ${ResponsiveImage} {
    position: relative;
    top: 0;
    left: 0;
    filter: grayscale(1);
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
            <span style={{ color: blue[200] }}>Quality</span> over{' '}
            <span style={{ color: red[200] }}>Quantity</span>
          </Typography>
        </Header>
        <Divider sx={{ my: 4 }} />
        <Content>
          {/* use image as a backround container, here we will have 2 buttons on top of it in a column arangment, services and more about us */}
          <MainButtonsContainer>
            <div className="buttons">
              <Button
                variant="text"
                size="large"
                className="btn"
                sx={{ color: blue[400] }}
              >
                services
              </Button>
              <Button
                variant="text"
                size="large"
                className="btn"
                sx={{ color: red[400] }}
              >
                more about us
              </Button>
            </div>
            <ResponsiveImage src={Img1} alt="VD Barber Shop Inside" />
          </MainButtonsContainer>
        </Content>
      </Wrapper>
    </BasicLayout>
  );
};

export default Intro;
