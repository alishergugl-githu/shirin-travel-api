import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Destinations from "./components/Destinations";
import BookingSection from "./components/BookingSection";
import About from "./components/About";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import ContactSection from "./components/ContactSection";
import BlogSection from "./components/BlogSection";
import Footer from "./components/Footer";
import TourDetail from "./pages/TourDetail";
import Booking from "./pages/Booking";
import Admin from "./pages/Admin";
import Payment from "./pages/Payment";

function Home({ language }) {
  return (
    <>
      <Hero language={language} />
      <Features language={language} />
      <Destinations language={language} />
      <BookingSection language={language} />
      <About language={language} />
      <Testimonials language={language} />
      <FAQ language={language} />
      <ContactSection language={language} />
      <BlogSection language={language} />
    </>
  );
}

function App() {
  const [language, setLanguage] = useState("uz");

  return (
    <BrowserRouter>
      <Navbar language={language} setLanguage={setLanguage} />

      <Routes>
        <Route path="/" element={<Home language={language} />} />
        <Route path="/tours/:slug" element={<TourDetail language={language} />} />
        <Route path="/booking" element={<Booking language={language} />} />
        <Route path="/payment" element={<Payment language={language} />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/payment" element={<Payment />} />
      </Routes>

      <Footer language={language} />
    </BrowserRouter>
  );
}

export default App;