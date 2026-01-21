import HeroSection from '@/components/HeroSection';
import ValuesSection from '@/components/ValuesSection';
import ProductsSection from '@/components/ProductsSection';
import InnovationSection from '@/components/InnovationSection';
import CTASection from '@/components/CTASection';

export default function Home() {
  return (
    <div className="overflow-hidden">
      <HeroSection />
      <ValuesSection />
      <ProductsSection />
      <InnovationSection />
      <CTASection />
    </div>
  );
}