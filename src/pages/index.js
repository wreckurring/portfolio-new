import React from 'react';
import styled from 'styled-components';
import Layout from '../components/layout';
import Head from '../components/head';
import Hero from '../components/sections/hero';
import About from '../components/sections/about';
import Experience from '../components/sections/experience';
import Projects from '../components/sections/projects';
import Achievements from '../components/sections/achievements';
import Contact from '../components/sections/contact';

const StyledMainContainer = styled.main`
  counter-reset: section;
`;

const IndexPage = ({ location }) => (
  <Layout location={location}>
    <Head />
    <StyledMainContainer className="fillHeight">
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Achievements />
      <Contact />
    </StyledMainContainer>
  </Layout>
);

export default IndexPage;
