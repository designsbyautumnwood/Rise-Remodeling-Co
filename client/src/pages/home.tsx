import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrustBadges from "@/components/TrustBadges";
import QuickStats from "@/components/QuickStats";
import EmergencyBanner from "@/components/EmergencyBanner";
import Services from "@/components/Services";
import About from "@/components/About";
import Process from "@/components/Process";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import SEOHead from "@/components/SEOHead";
import PerformanceOptimizations from "@/components/PerformanceOptimizations";
import CookieConsent from "@/components/CookieConsent";

export default function Home() {
  return (
    <div className="min-h-screen">
      <SEOHead />
      <Header />
      <EmergencyBanner />
      <main>
        <Hero />
        <TrustBadges />
        <QuickStats />
        <Services />
        <About />
        <Process />
        <WhyChooseUs />
        <Portfolio />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
      <PerformanceOptimizations />
      <CookieConsent />
    </div>
  );
}
