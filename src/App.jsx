import React from "react";
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/HeroSection/Hero";
import Services from "./Components/ServicesSection/Services";
import FAQSection from "./Components/FAQSection/FAQSection";
import BlogsExplore from "./Components/BlogsExplore/BlogsExplore";
import Footer from "./Components/Footer/Footer";
import Features from "./Components/Features/Features";

import Clients from "./Components/Client/Clients";
import ClientFooter from "./Components/Client/ClientFooter";
import ContactUs from "./Components/contact/ContactUs";
import Search from "./Components/search/Search";
import Logo from "./Components/search/Logo";
import Introduction from "./Components/introduction/Introduction";
import AboutUs from "./Components/About/AboutUs";

import TestimonialSlider from "./Components/TestimonialSlider/TestimonialSlider";

const App = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <Hero />
      <Services />
      <AboutUs />
      <BlogsExplore />
      <Features />
      <Introduction />
      <Clients />
      <ClientFooter />
      <TestimonialSlider />
      <FAQSection />
      <ContactUs />
      <Search />
      <Logo />
      <Footer />
    </div>
  );
};

export default App;
