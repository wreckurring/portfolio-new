import React, { useState } from 'react';
import styled from 'styled-components';

const StyledJobsSection = styled.section`
  max-width: 700px;

  .inner {
    display: flex;

    @media (max-width: 600px) {
      display: block;
    }

    @media (min-width: 700px) {
      min-height: 340px;
    }
  }
`;

const StyledTabList = styled.div`
  position: relative;
  z-index: 3;
  width: max-content;
  padding: 0;
  margin: 0;
  list-style: none;

  @media (max-width: 600px) {
    display: flex;
    overflow-x: auto;
    width: calc(100% + 100px);
    padding-left: 50px;
    margin-left: -50px;
    margin-bottom: 30px;
  }

  @media (max-width: 480px) {
    width: calc(100% + 50px);
    padding-left: 25px;
    margin-left: -25px;
  }
`;

const StyledTabButton = styled.button`
  display: inline-block;
  text-decoration: none;
  text-decoration-skip-ink: auto;
  color: ${({ isActive }) => (isActive ? 'var(--green)' : 'var(--slate)')};
  position: relative;
  transition: var(--transition);
  cursor: pointer;
  font-family: var(--font-mono);
  font-size: var(--fz-xs);
  text-align: left;
  white-space: nowrap;
  background-color: transparent;
  width: 120px;
  height: 42px;
  padding: 0 20px 2px;
  border-left: 2px solid ${({ isActive }) => (isActive ? 'var(--green)' : 'var(--lightest-navy)')};
  border-radius: 0;

  @media (max-width: 600px) {
    padding: 0 15px 2px;
    border-left: 0;
    border-bottom: 2px solid ${({ isActive }) => (isActive ? 'var(--green)' : 'var(--lightest-navy)')};
    min-width: 120px;
    height: 40px;
  }

  &:hover {
    color: var(--green);
    background-color: var(--light-navy);
  }
`;

const StyledHighlight = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
  width: 2px;
  height: 42px;
  border-radius: var(--border-radius);
  background: var(--green);
  transform: translateY(${({ activeTabId }) => activeTabId * 42}px);
  transition: transform 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
  transition-delay: 0.1s;

  @media (max-width: 600px) {
    top: auto;
    bottom: 0;
    width: 100%;
    max-width: 120px;
    height: 2px;
    transform: translateX(${({ activeTabId }) => activeTabId * 120}px);
  }
`;

const StyledTabContent = styled.div`
  width: 100%;
  height: auto;
  padding-top: 10px;
  padding-left: 30px;

  @media (max-width: 768px) {
    padding-left: 20px;
  }

  @media (max-width: 600px) {
    padding-left: 0;
  }

  ul {
    padding: 0;
    margin: 0;
    list-style: none;
    font-size: var(--fz-lg);

    li {
      position: relative;
      padding-left: 30px;
      margin-bottom: 10px;

      &:before {
        content: '▹';
        position: absolute;
        left: 0;
        color: var(--green);
      }
    }
  }

  h3 {
    margin-bottom: 2px;
    font-size: var(--fz-xxl);
    font-weight: 500;
    line-height: 1.3;

    .company {
      color: var(--green);
    }
  }

  .range {
    margin-bottom: 25px;
    color: var(--light-slate);
    font-family: var(--font-mono);
    font-size: var(--fz-xs);
  }
`;

const jobs = [
  {
    title: 'Joint Secretary',
    company: 'CP Club, AIT Pune',
    url: 'https://www.aitpune.com/',
    range: 'Aug 2024 – Present',
    html: `<ul>
      <li>Organized 2 large-scale coding competitions (Codeft) with 3000+ participants footfall.</li>
      <li>Lead competitive programming sessions, mentoring peers on DSA and problem-solving strategies.</li>
      <li>Managed community outreach via the PR Cell to drive inter-college awareness and participation.</li>
      <li>Coordinated logistics, judging, and prize distribution for hackathons and coding contests.</li>
    </ul>`,
  },
  {
    title: 'Joint Secretary',
    company: 'PR Cell, AIT Pune',
    url: 'https://www.aitpune.com/',
    range: 'Aug 2024 – Present',
    html: `<ul>
      <li>Handled public relations and communication for technical events and club activities.</li>
      <li>Produced content and outreach material to increase event visibility and registration.</li>
      <li>Collaborated with multiple college clubs to co-host inter-disciplinary events.</li>
    </ul>`,
  },
  {
    title: 'Competitive Programmer',
    company: 'Codeforces / LeetCode',
    url: 'https://codeforces.com/profile/wreckurring',
    range: '2022 – Present',
    html: `<ul>
      <li>Achieved Specialist rank on Codeforces with max rating of 1513.</li>
      <li>Solved 500+ problems across Codeforces and LeetCode platforms.</li>
      <li>Competed in rated contests regularly, sharpening skills in algorithms and data structures.</li>
      <li>Winner of 2 hackathons, selected from 500+ participating teams.</li>
    </ul>`,
  },
];

const Experience = () => {
  const [activeTabId, setActiveTabId] = useState(0);

  return (
    <StyledJobsSection id="experience">
      <h2 className="numbered-heading">Where I've Worked</h2>

      <div className="inner">
        <StyledTabList role="tablist" aria-label="Job tabs">
          {jobs.map(({ company }, i) => (
            <StyledTabButton
              key={company}
              isActive={activeTabId === i}
              onClick={() => setActiveTabId(i)}
              role="tab"
              tabIndex={activeTabId === i ? '0' : '-1'}
              aria-selected={activeTabId === i ? true : false}>
              {company}
            </StyledTabButton>
          ))}
          <StyledHighlight activeTabId={activeTabId} />
        </StyledTabList>

        <StyledTabContent>
          {jobs.map(({ title, company, url, range, html }, i) => (
            <div
              key={i}
              role="tabpanel"
              hidden={activeTabId !== i}
              id={`panel-${i}`}
              tabIndex="0">
              <h3>
                <span>{title}</span>
                <span className="company">
                  &nbsp;@&nbsp;
                  <a href={url} target="_blank" rel="noreferrer">
                    {company}
                  </a>
                </span>
              </h3>
              <p className="range">{range}</p>
              <div dangerouslySetInnerHTML={{ __html: html }} />
            </div>
          ))}
        </StyledTabContent>
      </div>
    </StyledJobsSection>
  );
};

export default Experience;
