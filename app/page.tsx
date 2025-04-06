import HeroSection from "@/components/common/Home/hero-section";
import BgGradient from "@/components/common/bg-gradient";
import DemoSection from "@/components/common/Home/demo-section";
import HowItWorksSection from "@/components/common/Home/how-it-works";
import PricingSection from "@/components/common/Home/pricing-section";
import CTASection from "@/components/common/Home/cta-section";

export default function Home() {
  return (
    <div className="relative w-full">
      <BgGradient />
      <div className="flex flex-col">
        <HeroSection />
        <DemoSection />
        <HowItWorksSection />
        <PricingSection />
        <CTASection />
      </div>
    </div>
  );
}
