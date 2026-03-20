import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const StyledLoader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background-color: var(--dark-navy);
  z-index: 99;
`;

const StyledLogo = styled.div`
  width: max-content;
  max-width: 100px;
  transition: var(--transition);
  opacity: ${({ isMounted }) => (isMounted ? 1 : 0)};
  animation: ${fadeIn} 0.3s ease forwards;

  svg {
    display: block;
    width: 100%;
    height: 100%;
    margin: 0 auto;
    fill: none;
    user-select: none;
  }
`;

const Loader = ({ finishLoading }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), 10);
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      finishLoading();
    }, 2000);
    return () => clearTimeout(timeout);
  }, [finishLoading]);

  return (
    <StyledLoader>
      <StyledLogo isMounted={isMounted}>
        <svg id="logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
          <title>Loader Logo</title>
          <g>
            <g id="M" transform="translate(11.000000, 5.000000)">
              <text
                x="50%"
                y="60"
                dominantBaseline="middle"
                textAnchor="middle"
                fill="#64ffda"
                fontFamily="monospace"
                fontSize="60"
                fontWeight="bold">
                MK
              </text>
            </g>
          </g>
          <rect
            x="5"
            y="5"
            width="90"
            height="90"
            rx="5"
            fill="none"
            stroke="#64ffda"
            strokeWidth="3"
          />
        </svg>
      </StyledLogo>
    </StyledLoader>
  );
};

export default Loader;
