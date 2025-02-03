import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Team from './components/Team';
import Contact from './components/Contact';
import FAQ from './components/FAQ';
import Nav from './components/Nav';
import Footer from './components/Footer';
import { faqData } from './components/faqData';
import FAQAccordion from './components/FAQAccordion';


function App() {
  return (
    <div>
      <Nav />
      <Home />
      <About />
      <Services />
      <Team />
      <Contact />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;
