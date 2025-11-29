"use client";
import DetailsHero from "./DetailsHero";
import ProblemSection from "./ProblemSection";
import SolutionSection from "./SolutionSection";
import TechnologySection from "./TechnologySection";
import UseCasesSection from "./UseCasesSection";
import HowItWorksSection from "./HowItWorksSection";
import PricingSection from "./PricingSection";
import FAQSection from "./FAQSection";
import PricingSectionModern from "../mvpblocks/pricing-5";


export default function DetailsPage() {
  return (
    <main className="overflow-hidden">
      <DetailsHero />
      <ProblemSection />
      <SolutionSection />
      <TechnologySection />
      <UseCasesSection />
      <HowItWorksSection />
      <PricingSection />
      <PricingSectionModern />
      <FAQSection />
      
    </main>
  );
}

export { DetailsPage };
