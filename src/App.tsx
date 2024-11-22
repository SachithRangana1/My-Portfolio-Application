import './App.css'
import Navbar from './Components/Navbar/Nav';
import About from './Components/About/About'
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import Hero from './Components/Hero/Hero';
import Projects from './Components/Projects/Projects';
import Skills from './Components/Skills/Skills';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

  return (
    <>
      <Navbar/>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  )
}

export default App
