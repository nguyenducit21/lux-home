import React from 'react';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import ProjectIntro from './components/ProjectIntro';
import Products from './components/Products';
import Team from './components/Team';
import Benefits from './components/Benefits';
import SocialProof from './components/SocialProof';
import CTA from './components/CTA';
import Footer from './components/Footer';
import MessengerIcon from './components/MessengerIcon';

const App = () => (
  <div className="content">
    <Navbar />
    <MessengerIcon />
    <Banner />
    <section id="intro">
      <ProjectIntro />
    </section>
    <section id="products">
      <Products />
    </section>
    <section id="team">
      <Team />
    </section>
    <section id="benefits">
      <Benefits />
    </section>
    <section id="social-proof">
      <SocialProof />
    </section>
    <section id="cta">
      <CTA />
    </section>
    <Footer />
  </div>
);

export default App;