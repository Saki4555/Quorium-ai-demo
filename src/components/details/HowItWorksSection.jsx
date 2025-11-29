"use client";
import { motion } from "motion/react";
import { CheckCircle, Camera } from "lucide-react";

const Step = ({ number, title, description }) => (
  <div className="flex items-start gap-4">
    <div className="flex items-center justify-center rounded-full w-10 h-10 bg-primary/10 text-primary font-semibold">{number}</div>
    <div>
      <h4 className="text-sm font-semibold">{title}</h4>
      <p className="text-xs text-muted-foreground mt-1">{description}</p>
    </div>
  </div>
);

export default function HowItWorksSection() {
  const fadeInUp = { hidden: { opacity: 0, y: 18 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };
  return (
    <motion.section id="how-it-works" className="py-24" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.25 }} variants={fadeInUp}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold">How It Works</h2>
          <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">A simple, fast flow — capture with a phone, obtain production-ready outputs, and integrate via SDK or export formats.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-card/60 border border-border rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3 mb-3">
              <Camera className="h-5 w-5 text-primary" />
              <h3 className="text-sm font-semibold">Capture</h3>
            </div>
            <p className="text-xs text-muted-foreground">Quick guided phone captures or camera APIs; optional calibration and capture aids for maximal accuracy.</p>
          </div>

          <div className="bg-card/60 border border-border rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3 mb-3">
              <CheckCircle className="h-5 w-5 text-primary" />
              <h3 className="text-sm font-semibold">Process</h3>
            </div>
            <p className="text-xs text-muted-foreground">On-device or cloud processing with noise reduction, registration, and reconstruction stages. Outputs optimized for export and analytics.</p>
          </div>

          <div className="bg-card/60 border border-border rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3 mb-3">
              <CheckCircle className="h-5 w-5 text-primary" />
              <h3 className="text-sm font-semibold">Integrate</h3>
            </div>
            <p className="text-xs text-muted-foreground">Use SDKs or REST endpoints to download models and measurement reports; integrate results to PLM or analytics workflows.
            </p>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export { HowItWorksSection };
