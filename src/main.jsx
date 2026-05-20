import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./style/global.css";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import BenefitsSection from "./components/BenefitsSection";
import AboutSection from "./components/AboutSection";
import ServicesSection from "./components/ServicesSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Header />
    <HeroSection />
    <BenefitsSection />
    <AboutSection />
    <ServicesSection />
    <ContactSection />
    <Footer />
  </StrictMode>,
);
