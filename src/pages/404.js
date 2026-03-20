import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import Head from '../components/head';

const StyledMainContainer = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .title {
    color: var(--green);
    font-family: var(--font-mono);
    font-size: clamp(100px, 25vw, 200px);
    line-height: 1;
  }

  .subtitle {
    font-size: clamp(30px, 5vw, 50px);
    font-weight: 600;
  }

  p {
    color: var(--light-slate);
    text-align: center;
    margin-bottom: 50px;
  }

  .home-link {
    color: var(--green);
    background-color: transparent;
    border: 1px solid var(--green);
    border-radius: var(--border-radius);
    padding: 1.25rem 1.75rem;
    font-size: var(--fz-sm);
    font-family: var(--font-mono);
    line-height: 1;
    text-decoration: none;
    transition: var(--transition);

    &:hover,
    &:focus,
    &:active {
      background-color: var(--green-tint);
      outline: none;
    }
  }
`;

const NotFoundPage = ({ location }) => (
  <Layout location={location}>
    <Head title="Page Not Found" />
    <StyledMainContainer className="fillHeight">
      <div className="title">404</div>
      <div className="subtitle">Page Not Found</div>
      <p>The page you are looking for does not exist. Maybe you&apos;ve mistyped the URL?</p>
      <Link className="home-link" to="/">
        Go Home
      </Link>
    </StyledMainContainer>
  </Layout>
);

export default NotFoundPage;
