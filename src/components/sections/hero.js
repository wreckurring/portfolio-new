import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const StyledHeroSection = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: flex-start;
  min-height: 100vh;
  height: 100vh;
  padding: 0;

  @media (max-height: 700px) and (min-width: 700px), (max-width: 360px) {
    height: auto;
    padding-top: var(--nav-height);
  }

  h1 {
    margin: 0 0 30px 4px;
    color: var(--green);
    font-family: var(--font-mono);
    font-size: clamp(var(--fz-sm), 5vw, var(--fz-md));
    font-weight: 400;

    @media (max-width: 480px) {
      margin: 0 0 20px 2px;
    }
  }

  h3 {
    margin-top: 5px;
    color: var(--slate);
    line-height: 0.9;
  }

  p {
    margin: 20px 0 0;
    max-width: 540px;
  }

  .email-link {
    color: var(--green);
    background-color: transparent;
    border: 1px solid var(--green);
    border-radius: var(--border-radius);
    padding: 1.25rem 1.75rem;
    font-size: var(--fz-sm);
    font-family: var(--font-mono);
    line-height: 1;
    text-decoration: none;
    cursor: pointer;
    transition: var(--transition);
    margin-top: 50px;
    display: inline-block;

    &:hover,
    &:focus,
    &:active {
      background-color: var(--green-tint);
      outline: none;
    }
  }
`;

const Hero = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), 1000);
    return () => clearTimeout(timeout);
  }, []);

  const one = <h1>Hi, my name is</h1>;
  const two = <h2 className="big-heading">Mohit Kumar.</h2>;
  const three = <h3 className="big-heading">I build things for the web.</h3>;
  const four = (
    <p>
      I'm a backend-focused software engineer and Computer Science student at{' '}
      <a href="https://www.aitpune.com/" target="_blank" rel="noreferrer">
        Army Institute of Technology, Pune
      </a>
      . I specialize in building scalable distributed systems, real-time applications,
      and high-performance backend infrastructure. Currently focused on{' '}
      <strong style={{ color: 'var(--lightest-slate)' }}>
        system design, competitive programming
      </strong>
      , and crafting software that makes a difference.
    </p>
  );
  const five = (
    <a
      className="email-link"
      href="https://github.com/wreckurring"
      target="_blank"
      rel="noreferrer">
      Check out my GitHub!
    </a>
  );

  const items = [one, two, three, four, five];

  return (
    <StyledHeroSection>
      {isMounted &&
        items.map((item, i) => (
          <div key={i} style={{ transitionDelay: `${i * 100}ms` }}>
            {item}
          </div>
        ))}
    </StyledHeroSection>
  );
};

export default Hero;
