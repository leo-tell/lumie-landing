import Header from './components/Header';
import Footer from './components/Footer';
import HeroSection from './sections/HeroSection';
import MissionVisionValues from './sections/MissionVisionValues';
import SolutionsSection from './sections/SolutionsSection';
import OperationalModelSection from './sections/OperationalModelSection';
import HowItWorksSection from './sections/HowItWorksSection';
import TestimonialsSection from './sections/TestimonialsSection';
import FAQSection from './sections/FAQSection';
import CTASection from './sections/CTASection';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <MissionVisionValues />
      <SolutionsSection />
      <OperationalModelSection />
      <HowItWorksSection />
      <TestimonialsSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </main>
  );
}
