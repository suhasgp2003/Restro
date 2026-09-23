
import Navbar from './components/Navbar'
import HeroSection from './sections/HeroSection'
import About from "./sections/about";
import Stats from './sections/Stats'
import Dishes from './sections/dishes'
import Features from './sections/Features'
import BookingProcess from './sections/BookingProcess';
import Timing from './sections/Timing';
import TestimonialSection from './sections/TestimonialSection';
import FAQ from './sections/FAQ';
import CTA from './sections/CTA';

const App = () => {
  return (
    <>
    <Navbar/>
    <HeroSection/>
    <About/>
    <Stats/>
    <Dishes/>
    <Features/>
    <BookingProcess/>
    <Timing/>
    <TestimonialSection/>
    <FAQ/>
    <CTA/>
    </>
  )
}

export default App