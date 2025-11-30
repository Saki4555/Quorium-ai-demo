"use client";
import DetailsHero from "./DetailsHero";
import ProblemSection from "./ProblemSection";
import SolutionSection from "./SolutionSection";
import TechnologySection from "./TechnologySection";
import UseCasesSection from "./UseCasesSection";
import HowItWorksSection from "./HowItWorksSection";

import FAQSection from "./FAQSection";



export default function DetailsPage() {
  return (
    <main className="overflow-hidden">
      <DetailsHero />
      <ProblemSection />
      <SolutionSection />
      <TechnologySection />
      <UseCasesSection />
      <HowItWorksSection />
     

      <FAQSection />
      
    </main>
  );
}

export { DetailsPage };
