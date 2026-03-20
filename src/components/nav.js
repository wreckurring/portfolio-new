import React, { useState, useEffect } from 'react';
import { Link } from 'gatsby';
import styled, { css } from 'styled-components';

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  z-index: 11;
  padding: 0px 50px;
  width: 100%;
  height: var(--nav-height);
  background-color: rgba(10, 25, 47, 0.85);
  backdrop-filter: blur(10px);
  transition: var(--transition);
  filter: none !important;
  pointer-events: auto !important;
  user-select: auto !important;

  ${({ scrolledToTop }) =>
    !scrolledToTop &&
    css`
      height: var(--nav-scroll-height);
      box-shadow: 0 10px 30px -10px var(--navy-shadow);
    `}

  @media (max-width: 1080px) {
    padding: 0 40px;
  }
  @media (max-width: 768px) {
    padding: 0 25px;
  }
`;

const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  width: 100%;
  color: var(--lightest-slate);
  font-family: var(--font-mono);
  z-index: 12;
`;

const StyledLogo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  a {
    color: var(--green);
    width: 42px;
    height: 42px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 2px solid var(--green);
    border-radius: 4px;
    font-family: var(--font-mono);
    font-size: var(--fz-xl);
    font-weight: 700;
    letter-spacing: -1px;

    &:hover {
      background-color: var(--green-tint);
    }
  }
`;

const StyledLinks = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
  }

  ol {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0;
    margin: 0;
    list-style: none;

    li {
      margin: 0 5px;
      position: relative;
      font-size: var(--fz-xs);

      a {
        padding: 10px;
        color: var(--lightest-slate);

        &:hover {
          color: var(--green);
        }

        &:before {
          counter-increment: item 1;
          content: '0' counter(item) '.';
          margin-right: 5px;
          color: var(--green);
          font-size: var(--fz-xxs);
          text-align: right;
        }
      }
    }
  }

  .resume-button {
    margin-left: 15px;
    font-size: var(--fz-xs);
    font-family: var(--font-mono);
    color: var(--green);
    background-color: transparent;
    border: 1px solid var(--green);
    border-radius: var(--border-radius);
    padding: 0.75rem 1rem;
    line-height: 1;
    text-decoration: none;
    cursor: pointer;
    transition: var(--transition);

    &:hover,
    &:focus,
    &:active {
      background-color: var(--green-tint);
      outline: none;
    }
  }
`;

const navLinks = [
  { name: 'About', url: '/#about' },
  { name: 'Experience', url: '/#experience' },
  { name: 'Work', url: '/#projects' },
  { name: 'Contact', url: '/#contact' },
];

const Nav = () => {
  const [scrolledToTop, setScrolledToTop] = useState(true);

  const handleScroll = () => {
    setScrolledToTop(window.pageYOffset < 50);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <StyledHeader scrolledToTop={scrolledToTop}>
      <StyledNav>
        <StyledLogo>
          <a href="/" aria-label="home">
            MK
          </a>
        </StyledLogo>

        <StyledLinks>
          <ol style={{ counterReset: 'item 0' }}>
            {navLinks.map(({ url, name }) => (
              <li key={name}>
                <a href={url}>{name}</a>
              </li>
            ))}
          </ol>

          <a
            className="resume-button"
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer">
            Resume
          </a>
        </StyledLinks>
      </StyledNav>
    </StyledHeader>
  );
};

export default Nav;
