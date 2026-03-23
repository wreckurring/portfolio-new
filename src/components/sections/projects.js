import React from 'react';
import styled from 'styled-components';

const StyledProjectsSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    font-size: clamp(24px, 5vw, var(--fz-heading));
  }

  .archive-link {
    font-family: var(--font-mono);
    font-size: var(--fz-sm);
    &:after {
      bottom: 0.1em;
    }
  }

  .projects-grid {
    list-style: none;
    padding: 0;
    margin: 0;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    grid-gap: 15px;
    position: relative;
    margin-top: 50px;

    @media (max-width: 1080px) {
      grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    }
  }

  .more-button {
    color: var(--green);
    background-color: transparent;
    border: 1px solid var(--green);
    border-radius: var(--border-radius);
    font-size: var(--fz-xs);
    font-family: var(--font-mono);
    line-height: 1;
    text-decoration: none;
    cursor: pointer;
    transition: var(--transition);
    padding: 1.25rem 1.75rem;
    margin: 80px auto 0;
    display: inline-block;

    &:hover,
    &:focus,
    &:active {
      background-color: var(--green-tint);
      outline: none;
    }
  }
`;

const StyledProject = styled.li`
  position: relative;
  cursor: default;
  transition: var(--transition);

  @media (prefers-reduced-motion: no-preference) {
    &:hover,
    &:focus-within {
      .project-inner {
        transform: translateY(-7px);
      }
    }
  }

  a {
    position: relative;
    z-index: 1;
  }

  .project-inner {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-direction: column;
    position: relative;
    height: 100%;
    padding: 2rem 1.75rem;
    border-radius: var(--border-radius);
    background-color: var(--light-navy);
    transition: var(--transition);
    overflow: auto;
  }

  .project-top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 35px;
  }

  .folder {
    color: var(--green);

    svg {
      width: 40px;
      height: 40px;
    }
  }

  .project-links {
    display: flex;
    align-items: center;
    margin-right: -10px;
    color: var(--light-slate);

    a {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 5px 7px;

      &.external {
        svg {
          width: 22px;
          height: 22px;
          margin-top: -4px;
        }
      }

      svg {
        width: 20px;
        height: 20px;
      }
    }
  }

  .project-title {
    margin: 0 0 10px;
    color: var(--lightest-slate);
    font-size: var(--fz-xxl);

    a {
      position: static;

      &:before {
        content: '';
        display: block;
        position: absolute;
        z-index: 0;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
      }
    }
  }

  .project-description {
    color: var(--light-slate);
    font-size: 17px;

    a {
      color: var(--green);
    }
  }

  .project-tech-list {
    display: flex;
    align-items: flex-end;
    flex-grow: 1;
    flex-wrap: wrap;
    padding: 0;
    margin: 20px 0 0 0;
    list-style: none;

    li {
      font-family: var(--font-mono);
      font-size: var(--fz-xxs);
      line-height: 1.75;

      &:not(:last-of-type) {
        margin-right: 15px;
      }
    }
  }
`;

const projects = [
  {
    title: 'Distributed URL Shortener',
    description:
      'A scalable URL shortener focused on high-throughput creation and low-latency reads. Built with Redis caching, Bloom filters, PostgreSQL, and Kafka-backed analytics to reduce bottlenecks and support 10,000+ URL creations per second.',
    tech: ['Java', 'Spring Boot', 'Redis', 'PostgreSQL', 'Kafka'],
    github: 'https://github.com/wreckurring/url-shortener',
    external: 'https://url-shortener-demo.vercel.app',
  },
  {
    title: 'Realtime Chat System',
    description:
      'A backend-heavy real-time chat platform built around WebSockets, JWT auth, Redis Pub/Sub, and PostgreSQL. Designed to support horizontally scaled messaging with faster history fetches, circuit breakers, and rate limiting under load.',
    tech: ['Spring Boot', 'WebSockets', 'Redis', 'PostgreSQL'],
    github: 'https://github.com/wreckurring/realtime-chat-system',
    external: 'https://realtime-chat-system-demo.vercel.app',
  },
  {
    title: 'WreckOn',
    description:
      'A music streaming platform project that rounds out the portfolio with a more product-focused build. It showcases frontend experience, media-centric UI work, and the ability to ship a polished end-user experience beyond purely backend systems.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/wreckurring/WreckOn',
    external: 'https://wreckon-demo.vercel.app',
  },
];

const FolderIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
    <title>Folder</title>
    <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
  </svg>
);

const GitHubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <title>GitHub</title>
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);

const ExternalIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <title>External</title>
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
);

const Projects = () => (
  <StyledProjectsSection id="projects">
    <h2 className="numbered-heading">Some Things I've Built</h2>

    <ul className="projects-grid">
      {projects.map(({ title, description, tech, github, external }) => (
        <StyledProject key={title}>
          <div className="project-inner">
            <header>
              <div className="project-top">
                <div className="folder">
                  <FolderIcon />
                </div>
                <div className="project-links">
                  {external && (
                    <a
                      href={external}
                      className="external"
                      aria-label="External Link"
                      target="_blank"
                      rel="noreferrer">
                      <ExternalIcon />
                    </a>
                  )}
                  {github && (
                    <a href={github} aria-label="GitHub Link" target="_blank" rel="noreferrer">
                      <GitHubIcon />
                    </a>
                  )}
                </div>
              </div>
              <h3 className="project-title">
                <a href={github} target="_blank" rel="noreferrer">
                  {title}
                </a>
              </h3>
              <div className="project-description">
                <p>{description}</p>
              </div>
            </header>
            <footer>
              <ul className="project-tech-list">
                {tech.map(t => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            </footer>
          </div>
        </StyledProject>
      ))}
    </ul>

    <a
      className="more-button"
      href="https://github.com/wreckurring"
      target="_blank"
      rel="noreferrer">
      Show More on GitHub
    </a>
  </StyledProjectsSection>
);

export default Projects;
