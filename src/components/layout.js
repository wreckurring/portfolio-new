import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { Link } from 'gatsby';
import GlobalStyle from '../styles/GlobalStyle';
import theme from '../styles/theme';

const Shell = styled.div`
  min-height: 100vh;
`;

const Header = styled.header`
  position: sticky;
  top: 0;
  z-index: 20;
  border-bottom: 1px solid rgba(255, 255, 255, 0.07);
  background: rgba(13, 17, 21, 0.88);
  backdrop-filter: blur(16px);
`;

const HeaderInner = styled.div`
  width: min(100%, var(--content-width));
  min-height: var(--nav-height);
  margin: 0 auto;
  padding: 0 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
`;

const Brand = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 12px;
  min-width: 0;
  font-family: var(--font-mono);
  letter-spacing: 0.08em;
  text-transform: uppercase;

  strong {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 42px;
    height: 42px;
    border: 1px solid var(--line-bright);
    background: linear-gradient(135deg, rgba(57, 231, 255, 0.12), rgba(57, 231, 255, 0.02));
    color: var(--accent);
    font-size: 0.85rem;
  }

  span {
    font-size: 0.8rem;
    color: var(--text-muted);
  }

  &:hover span {
    color: var(--text);
  }
`;

const Nav = styled.nav`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-end;
  gap: 8px;
`;

const NavItem = styled.a`
  padding: 10px 14px;
  border: 1px solid transparent;
  color: var(--text-muted);
  font-family: var(--font-mono);
  font-size: 0.78rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;

  &:hover {
    border-color: var(--line);
    background: rgba(255, 255, 255, 0.03);
    color: var(--text);
  }
`;

const ActionLink = styled(Link)`
  padding: 10px 14px;
  border: 1px solid var(--accent);
  background: var(--accent-soft);
  color: var(--accent);
  font-family: var(--font-mono);
  font-size: 0.78rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;

  &:hover {
    background: var(--accent-strong);
  }
`;

const Footer = styled.footer`
  width: min(100%, var(--content-width));
  margin: 0 auto;
  padding: 0 24px 36px;
  color: var(--text-dim);
  font-family: var(--font-mono);
  font-size: 0.8rem;

  p {
    padding-top: 18px;
    border-top: 1px solid rgba(255, 255, 255, 0.06);
    color: inherit;
  }
`;

const Layout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <Shell>
      <GlobalStyle />
      <Header>
        <HeaderInner>
          <Brand to="/">
            <strong>MK</strong>
            <span>Data Flow Architect</span>
          </Brand>

          <Nav aria-label="Primary">
            <NavItem href="/#stack">Stack</NavItem>
            <NavItem href="/#architectures">Architectures</NavItem>
            <NavItem href="/#telemetry">Telemetry</NavItem>
            <NavItem href="/#contact">Connect</NavItem>
            <ActionLink to="/resume">Resume</ActionLink>
          </Nav>
        </HeaderInner>
      </Header>

      {children}

      <Footer>
        <p>
          Built for engineering managers hiring for backend-heavy, distributed systems, and
          full-stack execution.
        </p>
      </Footer>
    </Shell>
  </ThemeProvider>
);

export default Layout;

