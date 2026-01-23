import HeroSection from '@/components/HeroSection';
import ValuesSection from '@/components/ValuesSection';
import InnovationSection from '@/components/InnovationSection';
import AchievementScoreboard from '@/components/Scoreboard';
import SolutionsSection from '@/components/SolutionsSection';
import ProductShowcase from '@/components/ProductsSection';

export default function Home() {
  return (
    <div className="overflow-hidden">
      <HeroSection />
      <AchievementScoreboard/>
      <ValuesSection />
      <InnovationSection />
      <SolutionsSection />
      <ProductShowcase />
    </div>
  );
}