import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollProgress from './components/ScrollProgress';
import Hero from './sections/Hero';
import About from './sections/About';
// import Experience from './sections/Experience';
import Projects from './sections/Projects';
import Contact from './sections/Contact';

function App() {
  return (
    <div className="relative min-h-screen">
      <ScrollProgress />
      <Navbar />
      
      <main>
        <Hero />
        <About />
        {/* <Experience /> */}
        <Projects />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
