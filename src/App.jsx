import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home/Home';
import './App.css'
import Navigation from './components/Navigation';
import NotFound from './pages/About/NotFound';
import ContactUs from './pages/Contact/Contact';
import Appointmentpp from './pages/Page/Appointment';
import Listing from './pages/Services/Listing/Listing';

function App() {

  return (
    <Router>
      <Header />
      <Navigation />
      <main className="p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/about" element={<About />} />
          <Route path="/doctors" element={<Doctors />} /> */}
          <Route path="/services/listing" element={<Listing />} />
          <Route path="/pages/not-Found" element={<NotFound />} />
          <Route path="/pages/appointment" element={<Appointmentpp />} />
          <Route path="/contact-us" element={<ContactUs />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App
