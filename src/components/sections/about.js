import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

const StyledAboutSection = styled.section`
  max-width: 900px;

  .inner {
    display: grid;
    grid-template-columns: 3fr 2fr;
    grid-gap: 50px;

    @media (max-width: 768px) {
      display: block;
    }
  }
`;

const StyledText = styled.div`
  ul.skills-list {
    display: grid;
    grid-template-columns: repeat(2, minmax(140px, 200px));
    grid-gap: 0 10px;
    padding: 0;
    margin: 20px 0 0 0;
    overflow: hidden;
    list-style: none;

    li {
      position: relative;
      margin-bottom: 10px;
      padding-left: 20px;
      font-family: var(--font-mono);
      font-size: var(--fz-xs);

      &:before {
        content: '▹';
        position: absolute;
        left: 0;
        color: var(--green);
        font-size: var(--fz-sm);
        line-height: 12px;
      }
    }
  }
`;

const StyledPic = styled.div`
  position: relative;
  max-width: 300px;

  @media (max-width: 768px) {
    margin: 50px auto 0;
    width: 70%;
  }

  .wrapper {
    display: block;
    position: relative;
    width: 100%;
    border-radius: var(--border-radius);
    background-color: var(--green);

    &:hover,
    &:focus {
      outline: 0;

      &:after {
        top: 15px;
        left: 15px;
      }

      .img {
        filter: none;
        mix-blend-mode: normal;
      }
    }

    .img {
      position: relative;
      border-radius: var(--border-radius);
      mix-blend-mode: multiply;
      filter: grayscale(100%) contrast(1);
      transition: var(--transition);
    }

    &:before,
    &:after {
      content: '';
      display: block;
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: var(--border-radius);
      transition: var(--transition);
    }

    &:before {
      top: 0;
      left: 0;
      background-color: var(--navy);
      mix-blend-mode: screen;
    }

    &:after {
      border: 2px solid var(--green);
      top: 20px;
      left: 20px;
      z-index: -1;
    }
  }

  .avatar-placeholder {
    width: 100%;
    height: 300px;
    background: linear-gradient(135deg, var(--light-navy), var(--lightest-navy));
    border-radius: var(--border-radius);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 80px;
    color: var(--green);
    font-family: var(--font-mono);
    font-weight: bold;
  }
`;

const skills = [
  'Java / Spring Boot',
  'TypeScript / Node.js',
  'Python / FastAPI',
  'React / Next.js',
  'Redis / Kafka',
  'Docker / Kubernetes',
  'AWS / CI/CD',
  'PostgreSQL / SQL',
];

const About = () => {
  return (
    <StyledAboutSection id="about">
      <h2 className="numbered-heading">About Me</h2>

      <div className="inner">
        <StyledText>
          <div>
            <p>
              Hello! I'm Mohit, a software engineer based in Pune, India with a passion for
              building scalable backend systems and distributed infrastructure. I'm currently
              pursuing my B.E. in Computer Science at{' '}
              <a href="https://www.aitpune.com/" target="_blank" rel="noreferrer">
                Army Institute of Technology
              </a>{' '}
              (CGPA: 8.57).
            </p>

            <p>
              I enjoy creating things that live on the internet — whether that's real-time
              chat applications, distributed URL shorteners, or group tracking systems. My
              focus is on engineering systems that are performant, resilient, and
              production-ready.
            </p>

            <p>
              Beyond coding, I'm a{' '}
              <a
                href="https://codeforces.com/profile/wreckurring"
                target="_blank"
                rel="noreferrer">
                Specialist on Codeforces
              </a>{' '}
              (max rating 1513), have solved 500+ problems, won 2 hackathons, and
              serve as Joint Secretary of the Competitive Programming Club at AIT Pune.
            </p>

            <p>Here are a few technologies I've been working with recently:</p>
          </div>

          <ul className="skills-list">
            {skills.map(skill => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </StyledText>

        <StyledPic>
          <div className="wrapper">
            <div className="avatar-placeholder">MK</div>
          </div>
        </StyledPic>
      </div>
    </StyledAboutSection>
  );
};

export default About;
