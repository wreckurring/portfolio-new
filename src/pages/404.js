import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import Seo from '../components/seo';

const Wrap = styled.main`
  display: grid;
  place-items: center;
  min-height: calc(100vh - var(--nav-height) - 120px);
  text-align: center;
`;

const Panel = styled.section`
  max-width: 560px;
  padding: 32px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  background: var(--surface);

  h1 {
    margin-bottom: 12px;
    font-size: clamp(2.6rem, 8vw, 5rem);
  }

  p {
    margin-bottom: 20px;
  }
`;

const HomeLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 48px;
  padding: 0 16px;
  border: 1px solid var(--accent);
  background: var(--accent-soft);
  color: var(--accent);
  font-family: var(--font-mono);
`;

const NotFoundPage = () => (
  <Layout>
    <Wrap>
      <Panel>
        <div className="eyebrow">404 / Route Failure</div>
        <h1>Packet Lost.</h1>
        <p>The page you requested is not available on this node.</p>
        <HomeLink to="/">Return to home</HomeLink>
      </Panel>
    </Wrap>
  </Layout>
);

export default NotFoundPage;

export const Head = () => <Seo title="404" pathname="/404" />;
