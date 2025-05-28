// src/App.jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Academics from './pages/Academics.jsx';
import Donate from './pages/Donate.jsx';
import Programmes from './pages/Programmes.jsx';
import Impact from './pages/Impact.jsx';
import Gallery from './pages/Gallery.jsx';
import Contact from './pages/Contact.jsx';
import Services from './pages/Services.jsx';
import Layout from './components/Layout.jsx'; // fixed typo

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Header />
        <main className="min-h-screen">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/academics" element={<Academics />} />
            <Route path="/donate" element={<Donate />} />
            <Route path="/programmes" element={<Programmes />} />
            <Route path="/services" element={<Services />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </Layout>
    </BrowserRouter>
  );
}
