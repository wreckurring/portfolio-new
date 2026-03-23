import React from 'react';
import styled from 'styled-components';
import Layout from '../components/layout';
import Seo from '../components/seo';

const Wrap = styled.main`
  display: grid;
  gap: 22px;
`;

const HeaderBlock = styled.section`
  display: grid;
  gap: 16px;
  border-top: 0;
  padding-top: 0;

  h1 {
    font-size: clamp(2.6rem, 6vw, 4.8rem);
  }
`;

const Grid = styled.section`
  display: grid;
  grid-template-columns: minmax(0, 1.1fr) minmax(280px, 0.9fr);
  gap: 18px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const Panel = styled.article`
  padding: 22px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  background: var(--surface);

  h2 {
    margin-bottom: 16px;
    font-size: 1.25rem;
  }
`;

const Entry = styled.div`
  padding: 16px 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.07);

  &:first-child {
    padding-top: 0;
  }

  &:last-child {
    border-bottom: 0;
    padding-bottom: 0;
  }

  h3 {
    margin-bottom: 6px;
    font-size: 1rem;
  }

  small {
    display: block;
    margin-bottom: 8px;
    color: var(--accent);
    font-family: var(--font-mono);
    font-size: 0.74rem;
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }
`;

const LinkRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

const InlineLink = styled.a`
  padding: 8px 10px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: var(--text-muted);
  font-family: var(--font-mono);
  font-size: 0.8rem;

  &:hover {
    border-color: var(--accent);
    color: var(--accent);
  }
`;

const ResumePage = () => (
  <Layout>
    <Wrap>
      <HeaderBlock>
        <div className="eyebrow">Execution Log / Resume</div>
        <h1>Mohit Kumar</h1>
        <p>
          Software engineer focused on scalable backends, real-time systems, and resilient
          full-stack applications. Strong fit for teams hiring around distributed systems,
          infrastructure-aware backend work, and performance-oriented product delivery.
        </p>
        <LinkRow>
          <InlineLink href="https://github.com/wreckurring" target="_blank" rel="noreferrer">
            github.com/wreckurring
          </InlineLink>
          <InlineLink href="https://linkedin.com/in/mohitkumar143" target="_blank" rel="noreferrer">
            linkedin.com/in/mohitkumar143
          </InlineLink>
          <InlineLink href="mailto:mohitkr.541@gmail.com">mohitkr.541@gmail.com</InlineLink>
        </LinkRow>
      </HeaderBlock>

      <Grid>
        <Panel>
          <h2>Selected Architectures</h2>

          <Entry>
            <small>Distributed URL Shortener</small>
            <h3>Java, Spring Boot, Redis, PostgreSQL, Kafka</h3>
            <p>
              Designed a Base62 short-code generator with token-range allocation supporting
              10,000+ creations per second, then removed read bottlenecks with Redis caching,
              Bloom filters, and asynchronous analytics pipelines.
            </p>
          </Entry>

          <Entry>
            <small>ChatFlow</small>
            <h3>Spring Boot, WebSockets, Redis, PostgreSQL</h3>
            <p>
              Built a horizontally scalable realtime messaging backend using Redis Pub/Sub to
              synchronize message broadcasting across instances, reducing chat history latency
              by roughly 60% and validating 10,000 concurrent connections.
            </p>
          </Entry>

          <Entry>
            <small>Cyclotrack</small>
            <h3>Node.js, React, WebSockets, Redis</h3>
            <p>
              Tuned a realtime group cycling tracker to keep a smooth 60 FPS client map while
              reducing server RAM consumption from 512MB to a stable 100MB.
            </p>
          </Entry>
        </Panel>

        <Panel>
          <h2>Signals</h2>

          <Entry>
            <small>Competitive Programming</small>
            <h3>Specialist on Codeforces</h3>
            <p>Solved 500+ problems across platforms with strong fundamentals in algorithms and data structures.</p>
          </Entry>

          <Entry>
            <small>Hackathons</small>
            <h3>2x Winner</h3>
            <p>Won hackathons selected from more than 500 participating teams through execution speed and engineering depth.</p>
          </Entry>

          <Entry>
            <small>Leadership</small>
            <h3>AIT Pune</h3>
            <p>
              Joint Secretary of the Competitive Programming Club and PR Cell, helping organize
              coding competitions with 3000+ footfall.
            </p>
          </Entry>
        </Panel>
      </Grid>
    </Wrap>
  </Layout>
);

export default ResumePage;

export const Head = () => <Seo title="Resume" pathname="/resume" />;
