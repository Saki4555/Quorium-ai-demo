"use client";
import { motion } from "motion/react";
import { AlertTriangle } from "lucide-react";

export default function ProblemSection() {
  const fadeInUp = { hidden: { opacity: 0, y: 18 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };
  return (
    <motion.section id="problems" className="py-24" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.25 }} variants={fadeInUp}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold">Problems We Help Solve</h2>
          <p className="mt-3 text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto">
            Many teams still rely on expensive hardware, manual measurements, or
            legacy tools that don't scale. Quorium-ai solves the key adoption
            challenges that slow teams down.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <article className="bg-card/60 border border-border rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-start gap-3">
              <div className="rounded-lg p-2 bg-muted/10">
                <AlertTriangle className="h-5 w-5 text-destructive" />
              </div>
              <div>
                <h3 className="text-sm font-semibold">High Data Costs</h3>
                <p className="text-xs text-muted-foreground mt-2">Collecting accurate 3D data typically needs expensive captures and engineering time.</p>
              </div>
            </div>
          </article>

          <article className="bg-card/60 border border-border rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-start gap-3">
              <div className="rounded-lg p-2 bg-muted/10">
                <AlertTriangle className="h-5 w-5 text-destructive" />
              </div>
              <div>
                <h3 className="text-sm font-semibold">Privacy-Heavy Regulations</h3>
                <p className="text-xs text-muted-foreground mt-2">Many industries require on-device or minimal-retention processing to meet regulations.</p>
              </div>
            </div>
          </article>

          <article className="bg-card/60 border border-border rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-start gap-3">
              <div className="rounded-lg p-2 bg-muted/10">
                <AlertTriangle className="h-5 w-5 text-destructive" />
              </div>
              <div>
                <h3 className="text-sm font-semibold">Integration Overhead</h3>
                <p className="text-xs text-muted-foreground mt-2">Many vendors require custom integrations and long time-to-value for internal teams.</p>
              </div>
            </div>
          </article>
        </div>
      </div>
    </motion.section>
  );
}

export { ProblemSection };
