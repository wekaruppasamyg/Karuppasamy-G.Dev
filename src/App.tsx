import HeroSection from './components/HeroSection';
import MarqueeSection from './components/MarqueeSection';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import ProjectsSection from './components/ProjectsSection';
import CertificatesSection from './components/CertificatesSection';
import FooterSection from './components/FooterSection';

export default function App() {
  return (
    <div className="bg-[#0C0C0C] min-h-screen w-full relative" style={{ overflowX: 'clip' }}>
      <HeroSection />
      <MarqueeSection />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
      <CertificatesSection />
      <FooterSection />
    </div>
  );
}
