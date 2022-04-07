import React from 'react';
import styled from 'styled-components';
import { BasicLayout } from '../components/BasicLayout';
import { BG_DECORATION_POSITIONS } from '../utils/constants';

const Services = () => {
  return (
    <BasicLayout bgDecPositions={BG_DECORATION_POSITIONS.default} navbar>
      Services
    </BasicLayout>
  );
};

export default Services;
