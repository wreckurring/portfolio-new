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
    url: 'https://codeforces.com/profile/alternate007',
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="currentColor">
        <title>Codeforces</title>
        <path d="M4.5 7.5C5.328 7.5 6 8.172 6 9v10.5c0 .828-.672 1.5-1.5 1.5h-3C.672 21 0 20.328 0 19.5V9c0-.828.672-1.5 1.5-1.5h3zm9-4.5c.828 0 1.5.672 1.5 1.5V19.5c0 .828-.672 1.5-1.5 1.5h-3c-.828 0-1.5-.672-1.5-1.5V4.5C9 3.672 9.672 3 10.5 3h3zm9 7.5c.828 0 1.5.672 1.5 1.5v9c0 .828-.672 1.5-1.5 1.5h-3c-.828 0-1.5-.672-1.5-1.5V12c0-.828.672-1.5 1.5-1.5h3z" />
      </svg>
    ),
  },
  {
    name: 'LeetCode',
    url: 'https://leetcode.com/u/wavylength/',
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="currentColor">
        <title>LeetCode</title>
        <path d="M13.483 0a1.374 1.374 0 0 0-.961.396L2.106 10.419a5.249 5.249 0 0 0 0 7.424l4.052 3.903a5.248 5.248 0 0 0 7.424 0l3.125-3.012a1.374 1.374 0 1 0-1.906-1.98l-3.125 3.012a2.5 2.5 0 0 1-3.537 0l-4.052-3.902a2.5 2.5 0 0 1 0-3.537L14.427 2.376A1.374 1.374 0 0 0 13.483 0zm4.934 7.666a1.374 1.374 0 0 0-.962.397l-6.8 6.549a1.374 1.374 0 1 0 1.905 1.98l6.8-6.548a1.374 1.374 0 0 0-.943-2.378zM9.275 10.97a1.374 1.374 0 0 0 0 2.748h12.351a1.374 1.374 0 1 0 0-2.748z" />
      </svg>
    ),
  },
  {
    name: 'X',
    url: 'https://x.com/wreckurring',
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="currentColor">
        <title>X</title>
        <path d="M18.901 1.153h3.68l-8.04 9.19 9.458 12.504h-7.406l-5.8-7.584-6.639 7.584H.47l8.6-9.83L0 1.153h7.594l5.243 6.932zM17.605 20.638h2.039L6.486 3.246H4.298z" />
      </svg>
    ),
  },
  {
    name: 'Instagram',
    url: 'https://instagram.com/mkr.541',
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="currentColor">
        <title>Instagram</title>
        <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.8A3.95 3.95 0 0 0 3.8 7.75v8.5a3.95 3.95 0 0 0 3.95 3.95h8.5a3.95 3.95 0 0 0 3.95-3.95v-8.5a3.95 3.95 0 0 0-3.95-3.95zm8.95 1.35a1.1 1.1 0 1 1 0 2.2 1.1 1.1 0 0 1 0-2.2zM12 6.6A5.4 5.4 0 1 1 6.6 12 5.406 5.406 0 0 1 12 6.6zm0 1.8A3.6 3.6 0 1 0 15.6 12 3.604 3.604 0 0 0 12 8.4z" />
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
