import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useStyles } from './styles.js';
import styled, { keyframes } from 'styled-components';

const DotWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  margin-top: 400px;
`;

const BounceAnimation = keyframes`
  0% { margin-bottom: 0; }
  50% { margin-bottom: 15px }
  100% { margin-bottom: 0 }
`;

const Dot = styled.div`
  background-color: #9e9e9e;
  border-radius: 50%;
  width: 10px;
  height: 10px;
  margin: 0 5px;
  /* Animation */
  animation: ${BounceAnimation} 0.5s linear infinite;
  animation-delay: ${props => props.delay};
`;

const LoadingDots = () => {
  return (
    <DotWrapper>
      <Dot delay="0s" />
      <Dot delay=".1s" />
      <Dot delay=".2s" />
    </DotWrapper>
  );
};

export default LoadingDots;
