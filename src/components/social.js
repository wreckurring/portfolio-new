import React from 'react';
import styled from 'styled-components';

const StyledSideElement = styled.div`
  width: 40px;
  position: fixed;
  bottom: 0;
  left: ${({ orientation }) => (orientation === 'left' ? '40px' : 'auto')};
  right: ${({ orientation }) => (orientation === 'right' ? '40px' : 'auto')};
  z-index: 10;
  color: var(--light-slate);

  @media (max-width: 1080px) {
    left: ${({ orientation }) => (orientation === 'left' ? '20px' : 'auto')};
    right: ${({ orientation }) => (orientation === 'right' ? '20px' : 'auto')};
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const StyledSocialList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
  padding: 0;
  list-style: none;

  &:after {
    content: '';
    display: block;
    width: 1px;
    height: 90px;
    margin: 0 auto;
    background-color: var(--light-slate);
  }

  li {
    &:last-of-type {
      margin-bottom: 20px;
    }

    a {
      padding: 10px;
      color: var(--light-slate);
      font-size: 20px;

      &:hover,
      &:focus {
        color: var(--green);
        transform: translateY(-3px);
      }

      svg {
        width: 18px;
        height: 18px;
      }
    }
  }
`;

const StyledEmailLink = styled.a`
  font-family: var(--font-mono);
  font-size: var(--fz-xxs);
  letter-spacing: 0.1em;
  writing-mode: vertical-rl;
  margin: 20px auto;
  padding: 10px;
  color: var(--light-slate);

  &:hover,
  &:focus {
    color: var(--green);
    transform: translateY(-3px);
  }

  &:after {
    content: '';
    display: block;
    width: 1px;
    height: 90px;
    margin: 0 auto;
    background-color: var(--light-slate);
  }
`;

const socialLinks = [
  {
    name: 'GitHub',
    url: 'https://github.com/wreckurring',
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <title>GitHub</title>
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
      </svg>
    ),
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/mohitkumar143/',
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <title>LinkedIn</title>
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    name: 'Codeforces',
    url: 'https://codeforces.com/profile/wreckurring',
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="currentColor">
        <title>Codeforces</title>
        <path d="M4.5 7.5C5.328 7.5 6 8.172 6 9v10.5c0 .828-.672 1.5-1.5 1.5h-3C.672 21 0 20.328 0 19.5V9c0-.828.672-1.5 1.5-1.5h3zm9-4.5c.828 0 1.5.672 1.5 1.5V19.5c0 .828-.672 1.5-1.5 1.5h-3c-.828 0-1.5-.672-1.5-1.5V4.5C9 3.672 9.672 3 10.5 3h3zm9 7.5c.828 0 1.5.672 1.5 1.5v9c0 .828-.672 1.5-1.5 1.5h-3c-.828 0-1.5-.672-1.5-1.5V12c0-.828.672-1.5 1.5-1.5h3z"/>
      </svg>
    ),
  },
];

const Social = () => (
  <StyledSideElement orientation="left">
    <StyledSocialList>
      {socialLinks.map(({ name, url, svg }) => (
        <li key={name}>
          <a href={url} aria-label={name} target="_blank" rel="noreferrer">
            {svg}
          </a>
        </li>
      ))}
    </StyledSocialList>
  </StyledSideElement>
);

const Email = () => (
  <StyledSideElement orientation="right">
    <StyledEmailLink href="mailto:mohitkr.541@gmail.com">
      mohitkr.541@gmail.com
    </StyledEmailLink>
  </StyledSideElement>
);

export { Social, Email };
