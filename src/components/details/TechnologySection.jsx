"use client";
import { motion } from "motion/react";
import { Cpu, Database, Repeat } from "lucide-react";

function SpecCard({ title, value, description, Icon }) {
  return (
    <article className="bg-card/60 border border-border rounded-2xl p-6 hover:shadow-md transition-shadow">
      <div className="flex items-start gap-4">
        <div className="rounded-lg p-2 bg-muted/10">
          {Icon && <Icon className="h-6 w-6 text-primary" />}
        </div>
        <div>
          <div className="text-sm font-semibold">{title}</div>
          <div className="mt-1 text-base font-bold">{value}</div>
          <p className="mt-2 text-xs text-muted-foreground">{description}</p>
        </div>
      </div>
    </article>
  );
}

export default function TechnologySection() {
  const fadeInUp = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };
  return (
    <motion.section id="tech-details" className="py-24" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeInUp}>
      <div className="max-w-7xl mx-auto px-6">
        <header className="mb-10 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold">Technology & Specs</h2>
          <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">Deep technical details, performance metrics, and deployment options for engineering teams and technical buyers.</p>
        </header>

        <div className="grid gap-6 grid-cols-1 md:grid-cols-3 mb-10">
          <SpecCard
            Icon={Cpu}
            title="On-device latency"
            value="~80–400ms"
            description="Efficient neural pipeline for sub-second inference on modern mobile devices (varies by CPU/GPU).
            "
          />

          <SpecCard
            Icon={Database}
            title="Accuracy"
            value="Median error ≤ 5mm"
            description="Typical median registration error under standard capture conditions (lighting, pose).
            "
          />

          <SpecCard
            Icon={Repeat}
            title="Throughput"
            value="1000s / day"
            description="Scales horizontally in the cloud for high-throughput capture scenarios with minimal latency.
            "
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Deployment & Integrations</h3>
            <p className="text-sm text-muted-foreground">Integrate via SDKs (iOS, Android, JS) or our REST API. Choose cloud-hosted processing or on-device inference for privacy-sensitive workflows. Export to GLB/GLTF, OBJ, PLY, and point-based JSON for easy interoperability.</p>

            <ul className="grid gap-2 mt-4">
              <li className="text-sm"><strong>Supported outputs:</strong> Mesh (GLTF/OBJ), point clouds (PLY), keypoints, and parametric summary.</li>
              <li className="text-sm"><strong>Security:</strong> End-to-end TLS, encrypted storage options, API keys, and optional on-device-only models.</li>
              <li className="text-sm"><strong>Compliance:</strong> Privacy-first design for GDPR/CCPA-friendly workflows, with minimal retention and user consent flows.</li>
            </ul>
          </div>

          <div className="rounded-2xl overflow-hidden shadow-md bg-card">
            <img
              loading="lazy"
              src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1600&auto=format&fit=crop&ixlib=rb-4.0.3&s=placeholder"
              alt="Technical overview"
              className="w-full h-full object-cover min-h-80"
            />
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export { TechnologySection };
