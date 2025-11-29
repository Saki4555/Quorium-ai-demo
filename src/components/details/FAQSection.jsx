"use client";
import { motion } from "motion/react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQSection() {
  const fadeInUp = { 
    hidden: { opacity: 0, y: 18 }, 
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } 
  };
  
  const faqs = [
    {
      q: "How accurate is the 3D capture?",
      a: "Typical registration error under standard capture conditions is within a few millimeters. Accuracy varies based on lighting, pose, and device quality.",
    },
    {
      q: "Can I keep processing on-device?",
      a: "Yes — we offer on-device inference and hybrid cloud options for flexible privacy and performance tradeoffs.",
    },
    {
      q: "What outputs are supported?",
      a: "We export industry formats like GLTF, OBJ, PLY, and structured keypoint JSON suitable for ML and CAD workflows.",
    },
    {
      q: "How do you handle data protection?",
      a: "End-to-end TLS, API tokens, encrypted storage, and optional on-device-only pipelines reduce risk for sensitive workflows.",
    },
  ];

  return (
    <motion.section 
      id="faq" 
      className="py-24 bg-card/40" 
      initial="hidden" 
      whileInView="visible" 
      viewport={{ once: true, amount: 0.25 }} 
      variants={fadeInUp}
    >
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold">Frequently Asked Questions</h2>
          <p className="mt-3 text-muted-foreground">
            Common questions about Quorium-ai, integrations, and security.
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((f, idx) => (
            <AccordionItem key={idx} value={`item-${idx}`}>
              <AccordionTrigger className="text-left t text-base font-semibold">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </motion.section>
  );
}

export { FAQSection };