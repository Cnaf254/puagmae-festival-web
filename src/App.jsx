import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from "./components/About";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Services from './components/Services';
import Schedule from './components/Schedule';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhyUs from './components/WhyUs';
import VendorsAndPartners from './components/VendorsAndPartners';
import VideosFromPreviousEvents from './components/VideosFromPreviousEvents.jsx';

export default function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Home />
        <About />
        <Services />
        <Schedule />
        <Gallery />
        <VideosFromPreviousEvents />
        <VendorsAndPartners />
        <Testimonials />
        <WhyUs />
        <Contact />
        <Footer />
      </div>
    </Router>
  )
}
