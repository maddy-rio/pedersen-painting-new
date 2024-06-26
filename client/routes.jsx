import { Routes, Route } from 'react-router-dom'
import App from './components/App'
import AboutUs from './components/pages/AboutUs'
import Services from './components/pages/Services'
import OurWork from './components/pages/OurWork'
import Contact from './components/pages/Contact'
import Carousel from './components/pages/Carousels.jsx/Carousel'


export const routes = (
  <Routes>
    <Route path="/" element={<App />} />
    <Route path="/about" element={<AboutUs />} />
    <Route path="/services" element={<Services />} />
    <Route path="/work" element={<OurWork />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/carousel" element={<Carousel />} />
  </Routes>
)
