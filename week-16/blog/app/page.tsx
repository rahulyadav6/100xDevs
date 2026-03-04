import FeaturedSection from "@/components/FeaturedSection";
import HeroSection from "@/components/HeroSection"
import CategoriesSection from "@/components/CategoriesSection"
import QuoteSection from "@/components/QuoteSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <main>
        <HeroSection/>
        <FeaturedSection/>
        <CategoriesSection/>
        <QuoteSection/>
      </main>
    </div>
  );
}
