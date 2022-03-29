import { Button, ButtonGroup, Divider, Typography } from '@mui/material';
import React from 'react';
import styled from 'styled-components';
import { BasicLayout } from '../components/BasicLayout';
import { ScriptText } from '../components/styles/Text.style';
import Img1 from '../assets/barberArchitecture/2.jpg';
import { ResponsiveImage } from '../components/ResponsiveImage';
import { BG_DECORATION_POSITIONS } from '../utils/constants';
import { blue, red } from '@mui/material/colors';

const Wrapper = styled.div``;
const Header = styled.header`
  margin-top: 5rem;
  /* text-align: center; */
`;
const Content = styled.main``;
const MainButtonsContainer = styled.div`
  position: relative;

  & .buttons {
    z-index: 2;
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    display: flex;
    flex-direction: column;

    & .btn {
      width: 100%;
      display: block;
      flex: 1 0 100%;
      height: 100%;
      padding-block: 0;
    }
  }

  & ${ResponsiveImage} {
    position: absolute;
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
    >
      <Wrapper>
        <Header>
          <Typography variant="h4">
            Here we choose <span style={{ color: blue[200] }}>Quality</span>{' '}
            over <span style={{ color: red[200] }}>Quantity</span>
          </Typography>
        </Header>
        <Divider sx={{ my: 3 }} />
        <Content>
          {/* use image as a backround container, here we will have 2 buttons on top of it in a column arangment, services and more about us */}
          <MainButtonsContainer>
            <div className="buttons">
              <Button
                variant="text"
                size="large"
                className="btn"
                sx={{ color: blue[100] }}
              >
                services
              </Button>
              <Button
                variant="text"
                size="large"
                className="btn"
                sx={{ color: red[100] }}
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
