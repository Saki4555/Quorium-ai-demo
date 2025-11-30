"use client";
import { motion } from "motion/react";
import { Check, Layers } from "lucide-react";
import { Button } from "../ui/button";

export default function SolutionSection() {
  const fadeInUp = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };
  return (
    <motion.section id="solution" className="py-20 bg-card/40" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeInUp}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold">Our Solution</h2>
            <p className="mt-3 text-muted-foreground max-w-xl">Quoran-ai combines efficient neural reconstruction with a privacy-first deployment model. Gather scans with a phone, process on-device or in the cloud, and export industry-standard outputs for immediate use.</p>

            <ul className="mt-6 grid gap-3">
              <li className="flex items-start gap-3">
                <span className="inline-flex h-7 w-7 items-center justify-center rounded-md bg-primary/10 text-primary">
                  <Check className="h-4 w-4" />
                </span>
                <div>
                  <div className="text-sm font-semibold">Real-time pipeline</div>
                  <div className="text-xs text-muted-foreground">Capture → preprocess → infer with fast, consistent latency.</div>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <span className="inline-flex h-7 w-7 items-center justify-center rounded-md bg-primary/10 text-primary">
                  <Layers className="h-4 w-4" />
                </span>
                <div>
                  <div className="text-sm font-semibold">Interoperable outputs</div>
                  <div className="text-xs text-muted-foreground">Export GLTF, OBJ, PLY, and parsed keypoints for ML or CAD systems.</div>
                </div>
              </li>
            </ul>

            <div className="mt-6">
              <Button asChild className="px-5 py-3 font-medium">
                <a href="#use-cases">Explore Use Cases</a>
              </Button>
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden shadow-md bg-card">
            <img
              loading="lazy"
              src="/assets/eight.jpg"
              alt="Solution pipeline diagram"
              className="w-full h-full object-cover min-h-80"
            />
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export { SolutionSection };
