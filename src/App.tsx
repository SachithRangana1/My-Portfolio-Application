import './App.css'
import Navbar from './Components/Navbar/Nav';
import About from './Components/About/About'
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import Hero from './Components/Hero/Hero';
import Projects from './Components/Projects/Projects';
import Skill from './Components/Skill/Skill';
import Services from './Components/Services/Services';
import Testimonials from './Components/Testimonials/Testimonials';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

  return (
    <>
      <Navbar/>
      <Hero />
      <About />
      <Skill />
      <Contact />
      <Footer />
      <Projects />
      <Services />
      <Testimonials />
    </>
  )
}

export default App
