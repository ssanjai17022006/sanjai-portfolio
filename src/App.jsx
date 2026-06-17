import { useEffect, useState } from 'react';
import Loader from './components/Loader.jsx';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import CoreExpertise from './components/CoreExpertise.jsx';
import Education from './components/Education.jsx';
import Skills from './components/Skills.jsx';
import Experience from './components/Experience.jsx';
import Projects from './components/Projects.jsx';
import Achievements from './components/Achievements.jsx';
import ResearchInterests from './components/ResearchInterests.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import ScrollToTop from './components/ScrollToTop.jsx';
import SectionDivider from './components/SectionDivider.jsx';

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1900);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (loading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [loading]);

  return (
    <>
      <Loader visible={loading} />
      <Navbar />
      <main>
        <Hero />
        <SectionDivider />
        <About />
        <CoreExpertise />
        <Education />
        <Skills />
        <SectionDivider />
        <Experience />
        <Projects />
        <Achievements />
        <ResearchInterests />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}
