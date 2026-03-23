import React, { useMemo, useState } from 'react';
import styled from 'styled-components';
import Layout from '../components/layout';
import NetworkCanvas from '../components/network-canvas';
import Seo from '../components/seo';

const Hero = styled.section`
  display: grid;
  grid-template-columns: minmax(0, 1.35fr) minmax(320px, 0.9fr);
  gap: 28px;
  min-height: calc(100vh - var(--nav-height) - 32px);
  align-items: stretch;
  border-top: 0;
  padding-top: 0;

  @media (max-width: 980px) {
    grid-template-columns: 1fr;
    min-height: auto;
  }
`;

const HeroPanel = styled.div`
  position: relative;
  display: grid;
  align-content: space-between;
  gap: 28px;
  padding: 30px;
  background:
    linear-gradient(180deg, rgba(255, 255, 255, 0.03), transparent 22%),
    linear-gradient(135deg, rgba(57, 231, 255, 0.08), transparent 36%),
    var(--bg-alt);
  border: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow: 0 30px 90px -60px var(--shadow);
  overflow: hidden;

  @media (max-width: 640px) {
    padding: 22px;
  }
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 1;
  display: grid;
  gap: 22px;
  max-width: 720px;

  h1 {
    font-size: clamp(3.5rem, 8vw, 6.5rem);
    line-height: 0.96;
  }

  p {
    font-size: clamp(1rem, 2.5vw, 1.16rem);
    max-width: 620px;
  }
`;

const CommandRow = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
`;

const PrimaryAction = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 54px;
  padding: 0 20px;
  border: 1px solid var(--accent);
  background: var(--accent-soft);
  color: var(--accent);
  font-family: var(--font-mono);
  font-size: 0.95rem;
  letter-spacing: 0.04em;

  &:hover {
    background: var(--accent-strong);
    transform: translateY(-2px);
  }
`;

const GhostAction = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 54px;
  padding: 0 20px;
  border: 1px solid var(--line-bright);
  color: var(--text);
  font-family: var(--font-mono);
  font-size: 0.95rem;

  &:hover {
    border-color: var(--accent);
    color: var(--accent);
  }
`;

const HeroMeta = styled.div`
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 10px;

  @media (max-width: 780px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 460px) {
    grid-template-columns: 1fr;
  }
`;

const MetricCell = styled.div`
  padding: 14px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  background: rgba(7, 11, 16, 0.5);

  strong {
    display: block;
    margin-bottom: 5px;
    color: var(--accent);
    font-family: var(--font-mono);
    font-size: 1.2rem;
  }

  span {
    color: var(--text-dim);
    font-family: var(--font-mono);
    font-size: 0.74rem;
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }
`;

const RuntimePanel = styled.aside`
  display: grid;
  gap: 14px;
  align-content: start;
`;

const RuntimeBox = styled.div`
  padding: 18px;
  background: var(--surface);
  border: 1px solid rgba(255, 255, 255, 0.08);
`;

const RuntimeHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  margin-bottom: 16px;
  color: var(--text-dim);
  font-family: var(--font-mono);
  font-size: 0.75rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
`;

const RuntimeList = styled.div`
  display: grid;
  gap: 10px;
`;

const RuntimeRow = styled.div`
  display: grid;
  grid-template-columns: auto 1fr auto;
  gap: 12px;
  align-items: center;
  font-family: var(--font-mono);
  font-size: 0.83rem;
  color: var(--text-muted);

  span:first-child {
    color: var(--accent);
  }

  i {
    height: 1px;
    background: linear-gradient(90deg, var(--accent), transparent);
  }
`;

const StackLayout = styled.div`
  display: grid;
  grid-template-columns: minmax(280px, 0.92fr) minmax(0, 1.08fr);
  gap: 22px;

  @media (max-width: 980px) {
    grid-template-columns: 1fr;
  }
`;

const RadarShell = styled.div`
  position: relative;
  min-height: 420px;
  padding: 28px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  background: var(--surface);
  overflow: hidden;
`;

const RadarGrid = styled.div`
  position: absolute;
  inset: 28px;
  border: 1px solid rgba(57, 231, 255, 0.18);

  &::before,
  &::after {
    content: '';
    position: absolute;
    inset: 12%;
    border: 1px solid rgba(57, 231, 255, 0.12);
  }

  &::after {
    inset: 24%;
  }
`;

const RadarAxis = styled.div`
  position: absolute;
  inset: 28px;

  &::before,
  &::after {
    content: '';
    position: absolute;
    background: rgba(57, 231, 255, 0.12);
  }

  &::before {
    top: 50%;
    left: 0;
    right: 0;
    height: 1px;
  }

  &::after {
    left: 50%;
    top: 0;
    bottom: 0;
    width: 1px;
  }
`;

const RadarTag = styled.div`
  position: absolute;
  left: ${({ $x }) => $x}%;
  top: ${({ $y }) => $y}%;
  transform: translate(-50%, -50%);
  padding: 8px 10px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  background: rgba(11, 16, 22, 0.92);
  color: ${({ $highlight }) => ($highlight ? 'var(--accent)' : 'var(--text-muted)')};
  font-family: var(--font-mono);
  font-size: 0.76rem;
  white-space: nowrap;
`;

const LayerList = styled.div`
  display: grid;
  gap: 14px;
`;

const LayerPanel = styled.article`
  padding: 20px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.025), transparent 40%), var(--surface);

  h3 {
    margin-bottom: 12px;
    font-size: 1.15rem;
  }
`;

const LayerTagList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

const LayerTag = styled.span`
  display: inline-flex;
  align-items: center;
  min-height: 34px;
  padding: 0 12px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: rgba(255, 255, 255, 0.03);
  color: ${({ $accent }) => ($accent ? 'var(--accent)' : 'var(--text-muted)')};
  font-family: var(--font-mono);
  font-size: 0.83rem;
`;

const Reports = styled.div`
  display: grid;
  gap: 18px;
`;

const Report = styled.article`
  padding: 22px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  background:
    linear-gradient(180deg, rgba(255, 255, 255, 0.02), transparent 26%),
    var(--surface);
`;

const ReportTop = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1.2fr) auto;
  gap: 18px;
  align-items: start;
  margin-bottom: 18px;

  @media (max-width: 720px) {
    grid-template-columns: 1fr;
  }

  h3 {
    font-size: clamp(1.4rem, 3vw, 2.1rem);
    margin-bottom: 10px;
  }
`;

const StackLine = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

const StackChip = styled.span`
  padding: 6px 10px;
  border: 1px solid rgba(57, 231, 255, 0.18);
  background: rgba(57, 231, 255, 0.07);
  color: var(--accent);
  font-family: var(--font-mono);
  font-size: 0.76rem;
`;

const HeadlineMetric = styled.div`
  min-width: 230px;
  padding: 16px;
  border: 1px solid var(--accent);
  background: var(--accent-soft);

  strong {
    display: block;
    margin-bottom: 7px;
    color: var(--accent);
    font-family: var(--font-mono);
    font-size: 1.7rem;
  }

  span {
    display: block;
    color: var(--text);
    font-size: 0.95rem;
    line-height: 1.45;
  }
`;

const ReportBody = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 14px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const BodyPanel = styled.div`
  padding: 16px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  background: rgba(255, 255, 255, 0.02);

  h4 {
    margin-bottom: 10px;
    color: var(--text);
    font-family: var(--font-mono);
    font-size: 0.82rem;
    letter-spacing: 0.1em;
    text-transform: uppercase;
  }

  p {
    font-size: 0.98rem;
  }
`;

const FlowLine = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;

  span {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 7px 10px;
    border: 1px solid rgba(255, 255, 255, 0.1);
    background: rgba(11, 16, 22, 0.8);
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: 0.75rem;
  }

  span:not(:last-child)::after {
    content: '>>';
    color: var(--accent);
    margin-left: 4px;
  }
`;

const TelemetryGrid = styled.div`
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 20px;

  @media (max-width: 980px) {
    grid-template-columns: 1fr;
  }
`;

const TelemetryMain = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 16px;

  @media (max-width: 680px) {
    grid-template-columns: 1fr;
  }
`;

const TelemetryCard = styled.article`
  padding: 22px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  background: var(--surface);

  strong {
    display: block;
    margin-bottom: 8px;
    color: var(--accent);
    font-family: var(--font-mono);
    font-size: clamp(2.3rem, 6vw, 4.2rem);
    line-height: 0.95;
  }

  h3 {
    margin-bottom: 8px;
    font-size: 1.15rem;
  }
`;

const TelemetryRail = styled.aside`
  padding: 22px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  background:
    linear-gradient(180deg, rgba(57, 231, 255, 0.07), transparent 24%),
    var(--surface);
`;

const RailItem = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 14px;
  padding: 16px 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.07);

  &:last-child {
    border-bottom: 0;
    padding-bottom: 0;
  }

  em {
    color: var(--accent);
    font-family: var(--font-mono);
    font-style: normal;
    font-size: 0.8rem;
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }
`;

const ContactShell = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1.15fr) minmax(280px, 0.85fr);
  gap: 18px;

  @media (max-width: 980px) {
    grid-template-columns: 1fr;
  }
`;

const Console = styled.div`
  border: 1px solid rgba(255, 255, 255, 0.08);
  background: var(--surface);
  overflow: hidden;
`;

const ConsoleTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 14px;
  padding: 14px 16px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  background: rgba(255, 255, 255, 0.03);
  color: var(--text-dim);
  font-family: var(--font-mono);
  font-size: 0.78rem;
`;

const ConsoleBody = styled.div`
  padding: 18px;
`;

const ModeRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 14px;
`;

const ModeButton = styled.button`
  min-height: 36px;
  padding: 0 12px;
  border: 1px solid ${({ $active }) => ($active ? 'var(--accent)' : 'rgba(255, 255, 255, 0.12)')};
  background: ${({ $active }) => ($active ? 'var(--accent-soft)' : 'transparent')};
  color: ${({ $active }) => ($active ? 'var(--accent)' : 'var(--text-muted)')};
  font-family: var(--font-mono);
  font-size: 0.78rem;
`;

const Prompt = styled.div`
  display: flex;
  gap: 10px;
  align-items: flex-start;
  margin-bottom: 10px;
  color: var(--accent);
  font-family: var(--font-mono);
  font-size: 0.82rem;
`;

const MessageInput = styled.textarea`
  width: 100%;
  min-height: 260px;
  resize: vertical;
  padding: 14px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: #0a0f14;
  color: var(--text);
  font-family: var(--font-mono);
  font-size: 0.9rem;
  line-height: 1.7;
`;

const ExecuteRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 14px;
`;

const ExecuteButton = styled.button`
  min-height: 48px;
  padding: 0 16px;
  border: 1px solid ${({ $ghost }) => ($ghost ? 'var(--line-bright)' : 'var(--accent)')};
  background: ${({ $ghost }) => ($ghost ? 'transparent' : 'var(--accent-soft)')};
  color: ${({ $ghost }) => ($ghost ? 'var(--text)' : 'var(--accent)')};
  font-family: var(--font-mono);
  font-size: 0.84rem;

  &:hover {
    border-color: var(--accent);
    color: var(--accent);
  }
`;

const ContactPanel = styled.aside`
  display: grid;
  gap: 14px;
`;

const ContactCard = styled.div`
  padding: 18px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  background: var(--surface);

  h3 {
    margin-bottom: 12px;
    font-size: 1.1rem;
  }
`;

const LinkList = styled.div`
  display: grid;
  gap: 10px;
`;

const MonoLink = styled.a`
  display: inline-flex;
  width: fit-content;
  align-items: center;
  gap: 10px;
  color: var(--text-muted);
  font-family: var(--font-mono);
  font-size: 0.82rem;

  &:hover {
    color: var(--accent);
  }
`;

const StatusPill = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 6px 10px;
  border: 1px solid rgba(57, 231, 255, 0.2);
  background: rgba(57, 231, 255, 0.08);
  color: var(--accent);
  font-family: var(--font-mono);
  font-size: 0.74rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
`;

const heroMetrics = [
  { value: '10k+', label: 'Concurrent sockets validated' },
  { value: '~70%', label: 'Read throughput improved' },
  { value: '~60%', label: 'Latency cut for chat history' },
  { value: '100MB', label: 'Stable RAM after optimization' },
];

const runtimeRows = [
  ['Focus', 'Backend, distributed systems, full-stack delivery'],
  ['Signals', 'Caching, streaming, observability, runtime tuning'],
  ['Audience', 'Senior engineering managers and technical recruiters'],
  ['Location', 'AIT Pune -> production-minded engineering'],
];

const radarTags = [
  { name: 'Java', x: 50, y: 18, highlight: true },
  { name: 'TypeScript', x: 72, y: 28, highlight: true },
  { name: 'Python', x: 82, y: 50, highlight: false },
  { name: 'C++', x: 32, y: 25, highlight: false },
  { name: 'SQL', x: 22, y: 48, highlight: true },
  { name: 'Spring Boot', x: 59, y: 40, highlight: true },
  { name: 'Node.js', x: 69, y: 62, highlight: false },
  { name: 'FastAPI', x: 38, y: 68, highlight: false },
  { name: 'React', x: 50, y: 82, highlight: false },
  { name: 'Kafka', x: 16, y: 72, highlight: true },
  { name: 'Redis', x: 84, y: 72, highlight: true },
  { name: 'Kubernetes', x: 50, y: 52, highlight: false },
];

const stackLayers = [
  {
    title: 'Languages Layer',
    tags: ['Java', 'TypeScript', 'Python', 'C++', 'SQL'],
  },
  {
    title: 'Frameworks Layer',
    tags: ['Spring Boot', 'Node.js', 'FastAPI', 'React', 'Next.js'],
  },
  {
    title: 'Infrastructure & Data Layer',
    tags: [
      'REST APIs',
      'WebSockets',
      'Caching',
      'Redis',
      'Kafka',
      'FAISS',
      'Linux',
      'Git',
      'Docker',
      'Kubernetes',
      'AWS',
      'CI/CD',
      'Prometheus',
    ],
  },
];

const reports = [
  {
    title: 'Distributed URL Shortener',
    stack: ['Java', 'Spring Boot', 'Redis', 'PostgreSQL', 'Kafka'],
    bottleneck:
      'Primary-key contention and synchronous analytics writes made URL creation throughput collapse under bursty traffic.',
    solution:
      'Introduced a Base62 short-code generator backed by token-range allocation, Redis read-through caching, and Bloom filters to bypass unnecessary database lookups.',
    flow: ['Ingress API', 'Token allocator', 'Redis cache', 'PostgreSQL', 'Kafka analytics'],
    metric: '10,000+ creations/sec',
    metricNote:
      'Improved read throughput by ~70% by decoupling click analytics into asynchronous message queues.',
  },
  {
    title: 'ChatFlow',
    stack: ['Spring Boot', 'WebSockets', 'Redis', 'PostgreSQL'],
    bottleneck:
      'Broadcast consistency broke down once multiple chat nodes were introduced, and history queries became the visible latency hotspot.',
    solution:
      'Built a Redis Pub/Sub fanout layer to synchronize message delivery across horizontally scaled instances and tightened data-access patterns for faster history fetches.',
    flow: ['WebSocket gateway', 'Session shard', 'Redis Pub/Sub', 'Persistence', 'Fanout ACK'],
    metric: '10,000 concurrent connections',
    metricNote:
      'Reduced chat history retrieval latency by ~60% and validated concurrency under distributed load testing.',
  },
  {
    title: 'Cyclotrack',
    stack: ['Node.js', 'React', 'WebSockets', 'Redis'],
    bottleneck:
      'Live location updates were overwhelming client rendering and inflating server memory under active group ride sessions.',
    solution:
      'Refactored state ownership, trimmed payload churn, and used memoized rendering boundaries to preserve a smooth 60 FPS map without server bloat.',
    flow: ['Tracker ingest', 'Realtime relay', 'Redis state', 'Client map loop', 'Group sync'],
    metric: '512MB -> 100MB RAM',
    metricNote:
      'Reduced server RAM consumption from 512MB to a stable 100MB while preserving a fluid client-side visualization loop.',
  },
];

const telemetry = [
  {
    value: '500+',
    title: 'Algorithmic problems solved',
    description: 'Specialist on Codeforces with sustained practice across Codeforces, LeetCode, and contest environments.',
  },
  {
    value: '2x',
    title: 'Hackathon wins',
    description: 'Selected from more than 500 participating teams through fast execution, product thinking, and delivery under pressure.',
  },
  {
    value: '3000+',
    title: 'Competition footfall',
    description: 'Organized large-scale coding events at Army Institute of Technology, Pune through club leadership and cross-team coordination.',
  },
  {
    value: '2',
    title: 'Leadership channels',
    description: 'Joint Secretary of the Competitive Programming Club and PR Cell, balancing engineering, mentorship, and communication.',
  },
];

const leadershipRail = [
  {
    label: 'Codeforces',
    text: 'Specialist rank with disciplined algorithmic problem-solving and contest stamina.',
  },
  {
    label: 'AIT Pune',
    text: 'Joint Secretary roles spanning community building, technical programming, and campus-wide event execution.',
  },
  {
    label: 'Execution',
    text: 'Most effective in systems that reward observability, performance tuning, and thoughtful architecture under load.',
  },
];

const jsonTemplate = `{
  "name": "Hiring Team",
  "company": "Acme Systems",
  "role": "Backend Engineer",
  "message": "Let's talk about scalable services, distributed systems, and product execution."
}`;

const textTemplate =
  'Interested in discussing backend-heavy roles, distributed systems, or full-stack engineering work.';

const IndexPage = () => {
  const [mode, setMode] = useState('json');
  const [message, setMessage] = useState(jsonTemplate);

  const encodedMailto = useMemo(() => {
    const subject = encodeURIComponent('Portfolio Inquiry');
    const body = encodeURIComponent(message);
    return `mailto:mohitkr.541@gmail.com?subject=${subject}&body=${body}`;
  }, [message]);

  const handleModeChange = nextMode => {
    setMode(nextMode);
    setMessage(nextMode === 'json' ? jsonTemplate : textTemplate);
  };

  const handleCopy = async () => {
    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      await navigator.clipboard.writeText(message);
    }
  };

  return (
    <Layout>
      <main id="content">
        <Hero>
          <HeroPanel>
            <NetworkCanvas />

            <HeroContent>
              <div>
                <div className="eyebrow">Live System Overview</div>
                <h1>Architecting High-Throughput Systems.</h1>
              </div>

              <p>
                Building scalable backends, real-time data flow, and resilient full-stack
                applications for teams that care about throughput, clarity, and operational
                confidence.
              </p>

              <CommandRow>
                <PrimaryAction href="#architectures">{'> ./view_architecture.sh'}</PrimaryAction>
                <GhostAction href="/resume">Read Logs (Resume)</GhostAction>
              </CommandRow>
            </HeroContent>

            <HeroMeta>
              {heroMetrics.map(item => (
                <MetricCell key={item.label}>
                  <strong>{item.value}</strong>
                  <span>{item.label}</span>
                </MetricCell>
              ))}
            </HeroMeta>
          </HeroPanel>

          <RuntimePanel>
            <RuntimeBox>
              <RuntimeHeader>
                <span>Runtime Status</span>
                <StatusPill>Monitoring</StatusPill>
              </RuntimeHeader>

              <RuntimeList>
                {runtimeRows.map(([label, value]) => (
                  <RuntimeRow key={label}>
                    <span>{label}</span>
                    <i />
                    <span>{value}</span>
                  </RuntimeRow>
                ))}
              </RuntimeList>
            </RuntimeBox>

            <RuntimeBox>
              <RuntimeHeader>
                <span>Recruiter Snapshot</span>
                <span>v1.0</span>
              </RuntimeHeader>
              <p>
                Backend-first engineering with a strong systems lens: caching strategy,
                async pipelines, WebSocket fanout, latency reduction, and pragmatic full-stack
                delivery when the product demands it.
              </p>
            </RuntimeBox>
          </RuntimePanel>
        </Hero>

        <section id="stack">
          <div className="section-heading">
            <div className="eyebrow">Section 02 / Technical Matrix</div>
            <h2>The Core Stack</h2>
            <p>
              Organized like a live system map rather than a resume checklist: languages,
              delivery frameworks, and the infrastructure layer that keeps services observable
              and reliable under load.
            </p>
          </div>

          <StackLayout>
            <RadarShell>
              <RadarGrid />
              <RadarAxis />
              {radarTags.map(tag => (
                <RadarTag key={tag.name} $x={tag.x} $y={tag.y} $highlight={tag.highlight}>
                  {tag.name}
                </RadarTag>
              ))}
            </RadarShell>

            <LayerList>
              {stackLayers.map(layer => (
                <LayerPanel key={layer.title}>
                  <h3>{layer.title}</h3>
                  <LayerTagList>
                    {layer.tags.map(tag => (
                      <LayerTag
                        key={tag}
                        $accent={['Java', 'TypeScript', 'Spring Boot', 'Redis', 'Kafka', 'Prometheus'].includes(tag)}>
                        {tag}
                      </LayerTag>
                    ))}
                  </LayerTagList>
                </LayerPanel>
              ))}
            </LayerList>
          </StackLayout>
        </section>

        <section id="architectures">
          <div className="section-heading">
            <div className="eyebrow">Section 03 / System Reports</div>
            <h2>System Architectures</h2>
            <p>
              Each build is presented as an engineering report: what was slow or brittle, how
              the architecture changed, and which metric moved enough to matter in production.
            </p>
          </div>

          <Reports>
            {reports.map(report => (
              <Report key={report.title}>
                <ReportTop>
                  <div>
                    <h3>{report.title}</h3>
                    <StackLine>
                      {report.stack.map(item => (
                        <StackChip key={item}>{item}</StackChip>
                      ))}
                    </StackLine>
                  </div>

                  <HeadlineMetric>
                    <strong>{report.metric}</strong>
                    <span>{report.metricNote}</span>
                  </HeadlineMetric>
                </ReportTop>

                <ReportBody>
                  <BodyPanel>
                    <h4>Bottleneck</h4>
                    <p>{report.bottleneck}</p>
                  </BodyPanel>
                  <BodyPanel>
                    <h4>Engineered Solution</h4>
                    <p>{report.solution}</p>
                  </BodyPanel>
                  <BodyPanel>
                    <h4>Data Flow</h4>
                    <FlowLine>
                      {report.flow.map(step => (
                        <span key={step}>{step}</span>
                      ))}
                    </FlowLine>
                  </BodyPanel>
                </ReportBody>
              </Report>
            ))}
          </Reports>
        </section>

        <section id="telemetry">
          <div className="section-heading">
            <div className="eyebrow">Section 04 / Telemetry</div>
            <h2>Telemetry &amp; Execution</h2>
            <p>
              The numbers that help recruiters calibrate quickly: algorithmic range, winning
              under constraints, and leadership in high-volume technical communities.
            </p>
          </div>

          <TelemetryGrid>
            <TelemetryMain>
              {telemetry.map(item => (
                <TelemetryCard key={item.title}>
                  <strong>{item.value}</strong>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </TelemetryCard>
              ))}
            </TelemetryMain>

            <TelemetryRail>
              {leadershipRail.map(item => (
                <RailItem key={item.label}>
                  <em>{item.label}</em>
                  <p>{item.text}</p>
                </RailItem>
              ))}
            </TelemetryRail>
          </TelemetryGrid>
        </section>

        <section id="contact">
          <div className="section-heading">
            <div className="eyebrow">Section 05 / Connection Protocol</div>
            <h2>POST /contact</h2>
            <p>
              Reach out like you would to an internal service: send a JSON payload, drop a raw
              string, or route through the linked profiles below.
            </p>
          </div>

          <ContactShell>
            <Console>
              <ConsoleTop>
                <span>secure-shell://contact-gateway</span>
                <span>POST READY</span>
              </ConsoleTop>

              <ConsoleBody>
                <ModeRow>
                  <ModeButton $active={mode === 'json'} onClick={() => handleModeChange('json')}>
                    payload=json
                  </ModeButton>
                  <ModeButton $active={mode === 'text'} onClick={() => handleModeChange('text')}>
                    payload=text
                  </ModeButton>
                </ModeRow>

                <Prompt>
                  <span>$</span>
                  <span>curl -X POST /contact -d @message</span>
                </Prompt>

                <MessageInput
                  aria-label="Contact message"
                  value={message}
                  onChange={event => setMessage(event.target.value)}
                  spellCheck="false"
                />

                <ExecuteRow>
                  <ExecuteButton as="a" href={encodedMailto}>
                    execute POST request
                  </ExecuteButton>
                  <ExecuteButton $ghost type="button" onClick={handleCopy}>
                    copy payload
                  </ExecuteButton>
                </ExecuteRow>
              </ConsoleBody>
            </Console>

            <ContactPanel>
              <ContactCard>
                <h3>Direct Channels</h3>
                <LinkList>
                  <MonoLink href="https://github.com/wreckurring" target="_blank" rel="noreferrer">
                    github.com/wreckurring
                  </MonoLink>
                  <MonoLink href="https://linkedin.com/in/mohitkumar143" target="_blank" rel="noreferrer">
                    linkedin.com/in/mohitkumar143
                  </MonoLink>
                  <MonoLink href="mailto:mohitkr.541@gmail.com">mohitkr.541@gmail.com</MonoLink>
                </LinkList>
              </ContactCard>

              <ContactCard>
                <h3>Preferred Work</h3>
                <p>
                  Backend-heavy roles, distributed systems, real-time infrastructure, and
                  full-stack products where performance and architecture both matter.
                </p>
              </ContactCard>
            </ContactPanel>
          </ContactShell>
        </section>
      </main>
    </Layout>
  );
};

export default IndexPage;

export const Head = () => <Seo />;
