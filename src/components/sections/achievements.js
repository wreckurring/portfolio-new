import React from 'react';
import styled from 'styled-components';

const StyledAchievementsSection = styled.section`
  max-width: 900px;

  .achievements-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
    gap: 20px;
    margin-top: 20px;
    list-style: none;
    padding: 0;
  }
`;

const StyledCard = styled.li`
  background-color: var(--light-navy);
  border-radius: var(--border-radius);
  padding: 2rem 1.75rem;
  border-top: 3px solid var(--green);
  transition: var(--transition);

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 30px -15px var(--navy-shadow);
  }

  .number {
    font-size: clamp(36px, 6vw, 60px);
    font-weight: 700;
    color: var(--green);
    font-family: var(--font-mono);
    line-height: 1;
    margin-bottom: 10px;
  }

  .label {
    color: var(--lightest-slate);
    font-size: var(--fz-lg);
    font-weight: 600;
    margin-bottom: 8px;
  }

  .sub {
    color: var(--slate);
    font-size: var(--fz-sm);
    font-family: var(--font-mono);
  }
`;

const achievements = [
  {
    number: '1513',
    label: 'Codeforces Max Rating',
    sub: 'Specialist rank',
  },
  {
    number: '500+',
    label: 'Problems Solved',
    sub: 'LeetCode & Codeforces',
  },
  {
    number: '2x',
    label: 'Hackathon Winner',
    sub: '500+ competing teams',
  },
  {
    number: '3000+',
    label: 'Event Footfall',
    sub: 'Codeft competitions organized',
  },
  {
    number: '8.57',
    label: 'CGPA',
    sub: 'Army Institute of Technology',
  },
  {
    number: '10k+',
    label: 'Concurrent Connections',
    sub: 'Validated via JMeter',
  },
];

const Achievements = () => (
  <StyledAchievementsSection id="achievements">
    <h2 className="numbered-heading">Achievements</h2>
    <ul className="achievements-grid">
      {achievements.map(({ number, label, sub }) => (
        <StyledCard key={label}>
          <div className="number">{number}</div>
          <div className="label">{label}</div>
          <div className="sub">{sub}</div>
        </StyledCard>
      ))}
    </ul>
  </StyledAchievementsSection>
);

export default Achievements;
