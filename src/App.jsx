import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import NotFound from './pages/About/NotFound';
import ContactUs from './pages/Contact/Contact';
import Appointmentpp from './pages/Page/Appointment';
import Listing from './pages/Services/Listing/Listing';
import Detail from './pages/Services/Detail/Detail';

function App() {
  return (
    <Router>
      <Header />
      <Navigation />
      <main className="p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/our-services/listing" element={<Listing />} />
          <Route path="/our-services/detail" element={<Detail />} />
          <Route path="/pages/appointment" element={<Appointmentpp />} />
          <Route path="/contact-us" element={<ContactUs />} />
          {/* Catch-all route for 404 Not Found */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
