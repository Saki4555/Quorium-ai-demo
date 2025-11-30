"use client";

import React from "react";
import { motion } from "framer-motion";
import { Cpu, Box, Heart, Zap, Layers, Users } from "lucide-react";
import { Button } from "./ui/button";

/**
 * Services.jsx
 *
 * - Modern responsive grid (2 cols on tablet, 3 cols on desktop)
 * - Large lead card + grid of service cards (clean composition)
 * - Uses <img> for images (small, unsplash placeholders)
 * - All text editable directly in JSX
 * - No hardcoded colors (uses theme tokens like bg-card, border-border, text-foreground, bg-primary)
 */

const fadeUp = {
  hidden: { opacity: 0, y: 8 },
  show: { opacity: 1, y: 0 },
};

function ServiceCard({ Icon, title, description, img, reverse }) {
  return (
    <article
      className={`group rounded-2xl border border-border bg-card/60 overflow-hidden transition-shadow hover:shadow-lg`}
      aria-labelledby={title.replace(/\s+/g, "-").toLowerCase()}
    >
      <div className="p-6 flex flex-col h-full">
        <div className="flex items-start gap-4">
          <div className="h-12 w-12 rounded-lg grid place-items-center bg-muted/10 shrink-0">
            <Icon className="h-6 w-6" aria-hidden />
          </div>

          <div className="flex-1">
            <h4
              id={title.replace(/\s+/g, "-").toLowerCase()}
              className="text-base font-semibold"
            >
              {title}
            </h4>
            <p className="mt-2 text-sm leading-relaxed opacity-95">
              {description}
            </p>
          </div>
        </div>

        {/* optional thumbnail */}
        {img && (
          <div className="mt-4 rounded-md overflow-hidden w-full h-32">
            <img src={img} alt={title} className="object-cover w-full h-full" />
          </div>
        )}
      </div>
    </article>
  );
}

export default function Services() {
  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="max-w-7xl overflow-hidden mx-auto px-6 py-20"
    >
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <motion.header
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          variants={fadeUp}
          className="text-center mb-10"
        >
          <h2
            id="services-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight"
          >
            Services we provide
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-sm sm:text-base leading-relaxed opacity-95">
            From enterprise integrations to consumer-ready mobile capture,
            Quoran-ai delivers end-to-end services that make 3D body data
            practical and production-ready.
          </p>
        </motion.header>

        {/* Layout: left lead card (big) + right grid of smaller service cards */}
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {/* Lead card (spans two rows on desktop for emphasis) */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
            variants={fadeUp}
            transition={{ delay: 0.05 }}
            className="lg:col-span-1 lg:row-span-2 rounded-2xl border border-border bg-card/70 p-8 flex flex-col justify-between"
          >
            <div>
              <h3 className="text-2xl font-bold leading-tight">
                End-to-end capture & integration
              </h3>

              <p className="mt-4 text-sm leading-relaxed opacity-95">
                We help teams adopt 3D body capture at scale — from pilot
                studies to full production pipelines. Strategy, SDK integration,
                data pipelines, and optimization for device performance.
              </p>

              <ul className="mt-6 space-y-3">
                <li className="flex items-start gap-3">
                  <span
                    className="mt-1 inline-flex h-3 w-3 rounded-full bg-primary/70"
                    aria-hidden
                  />
                  <span className="text-sm leading-relaxed">
                    Custom SDK & API integration
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span
                    className="mt-1 inline-flex h-3 w-3 rounded-full bg-primary/70"
                    aria-hidden
                  />
                  <span className="text-sm leading-relaxed">
                    Pilot-to-production consulting
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span
                    className="mt-1 inline-flex h-3 w-3 rounded-full bg-primary/70"
                    aria-hidden
                  />
                  <span className="text-sm leading-relaxed">
                    Data export & CAD/ML formats
                  </span>
                </li>
              </ul>
            </div>

            <div className="mt-6 flex gap-3">
              {/* Primary CTA */}
              <Button
                asChild
                className="
      text-xs px-4 py-2
      sm:text-base sm:px-6 sm:py-3
      font-medium
    "
              >
                <a href="#subscribe">Request a demo</a>
              </Button>

             
            </div>

            {/* small decorative image (desktop) */}
            <div className="hidden md:block mt-6 rounded-lg overflow-hidden w-full h-32">
              <img
                src="/assets/seven.jpg"
                alt="Capture workflow"
                className="object-cover w-full h-full"
              />
            </div>
          </motion.div>

          {/* Service cards (grid) */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
            variants={fadeUp}
            transition={{ delay: 0.08 }}
            className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 lg:col-span-2"
          >
            <ServiceCard
              Icon={Cpu}
              title="Apparel & Fit"
              description="Accurate body measurements and fit recommendations, integrated into PLM and pattern workflows."
              img="/assets/one.jpeg"
            />

            <ServiceCard
              Icon={Heart}
              title="Healthcare Assessments"
              description="Anthropometric analytics, posture and body composition metrics for clinical & remote care."
              img="/assets/two.jpeg"
            />

            <ServiceCard
              Icon={Zap}
              title="Personalized Fitness"
              description="Motion-aware metrics and personalized programs powered by accurate 3D body models."
              img="/assets/three.jpeg"
            />

            <ServiceCard
              Icon={Layers}
              title="Enterprise Integrations"
              description="Scalable pipelines, secure storage, and export formats for downstream systems and ML models."
              img="/assets/four.jpeg"
            />

            <ServiceCard
              Icon={Users}
              title="Data Privacy & Compliance"
              description="Privacy-first options, on-device processing, minimal retention, and compliance support."
              img="/assets/five.jpeg"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
