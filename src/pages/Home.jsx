import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Timeline from "../components/Timeline";
import Skills from "../components/Skills";
import Education from "../components/Education";
import Passion from "../components/Passion";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import ScrollTop from "../components/ScrollTop";
import SEO from "../components/SEO";

const Home = () => {
  return (
    <>
      <SEO />
      <Navbar />

      <Hero />

      <About />

      <Timeline />

      <Skills />

      <Education />

      <Passion />

      <Contact />

      <Footer />

      <ScrollTop />
    </>
  );
};

export default Home;
