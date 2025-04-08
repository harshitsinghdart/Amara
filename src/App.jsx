import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home/Home';
import './App.css'
import Navigation from './components/Navigation';
import NotFound from './pages/About/NotFound';
import ContactUs from './pages/Contact/Contact';
import Appointmentpp from './pages/page/Appointment';

function App() {

  return (
    <Router>
      <Header />
      <Navigation />
      <main className="p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/about" element={<About />} />
          <Route path="/doctors" element={<Doctors />} />
          <Route path="/services" element={<Services />} /> */}
          <Route path="/pages/Not-Found" element={<NotFound />} />
          <Route path="/pages/Appointment" element={<Appointmentpp />} />
          <Route path="/contact-us" element={<ContactUs />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App
