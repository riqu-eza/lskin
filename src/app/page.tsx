import HeroSection from '@/components/HeroSection';
import ValuesSection from '@/components/ValuesSection';
import ProductsSection from '@/components/ProductsSection';
import InnovationSection from '@/components/InnovationSection';
import CTASection from '@/components/CTASection';
import AchievementScoreboard from '@/components/Scoreboard';

export default function Home() {
  return (
    <div className="overflow-hidden">
      <HeroSection />
      <AchievementScoreboard/>
      <ValuesSection />
      <ProductsSection />
      <InnovationSection />
      <CTASection />
    </div>
  );
}