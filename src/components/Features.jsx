
"use client"
import React from "react";
import { Cpu, Users, Activity, Shield } from "lucide-react";
import { Button } from "./ui/button";
import { motion } from "motion/react";

// Motion variants
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

function SmallFeature({ Icon, title, description }) {
  return (
    <motion.article
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="group overflow-hidden bg-card/60 border border-border rounded-2xl p-5 hover:shadow-lg transition-shadow duration-200 ease-out"
      aria-labelledby={title.replace(/\s+/g, "-").toLowerCase()}
      whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
    >
      <div className="flex items-start gap-4">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-muted/10">
          <Icon className="h-6 w-6" aria-hidden />
        </div>

        <div>
          <h3
            id={title.replace(/\s+/g, "-").toLowerCase()}
            className="text-sm font-semibold"
          >
            {title}
          </h3>
          <p className="mt-2 text-sm leading-relaxed opacity-90">
            {description}
          </p>
        </div>
      </div>
    </motion.article>
  );
}

export default function Features() {
  return (
    <section
      id="features"
      aria-labelledby="features-heading"
      className="max-w-7xl overflow-hidden mx-auto px-6 py-20"
    >
      <motion.div
        className="mx-auto max-w-6xl"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
      >
        {/* Section header */}
        <motion.div
          className="mb-10 text-center"
          variants={fadeInUp}
        >
          <h2
            id="features-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight"
          >
            What Quoran-ai enables
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-sm sm:text-base leading-relaxed opacity-95">
            Democratized, high-fidelity 3D human body data — captured with
            consumer devices. Fast capture, reliable measurements, and
            privacy-aware processing for apparel, healthcare, and fitness.
          </p>
        </motion.div>

        {/* Bento grid */}
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 lg:grid-rows-2">
          {/* BIG HERO TILE */}
          <motion.div
            className="relative col-span-1 sm:col-span-2 lg:col-span-2 lg:row-span-2 rounded-2xl overflow-hidden border border-border bg-card/70"
            role="region"
            aria-label="Core capability"
            variants={fadeInUp}
          >
            <div className="p-8 lg:p-12 flex flex-col h-full">
              <div className="flex-1">
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight max-w-2xl">
                  High-fidelity 3D capture from everyday devices
                </h3>
                <p className="mt-4 text-sm sm:text-base leading-relaxed max-w-2xl opacity-95">
                  Use a phone camera to capture precise 3D body data in seconds.
                  Optimized for accuracy, privacy, and low friction — enabling
                  measurement workflows that were previously expensive and slow
                  to execute.
                </p>

                <ul className="mt-6 grid gap-3">
                  <li className="flex items-start gap-3">
                    <span
                      className="mt-1 inline-flex h-3 w-3 rounded-full bg-primary/70"
                      aria-hidden
                    />
                    <span className="text-sm leading-relaxed">
                      Sub-millimeter registration for garment fit
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span
                      className="mt-1 inline-flex h-3 w-3 rounded-full bg-primary/70"
                      aria-hidden
                    />
                    <span className="text-sm leading-relaxed">
                      On-device inference option for privacy
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span
                      className="mt-1 inline-flex h-3 w-3 rounded-full bg-primary/70"
                      aria-hidden
                    />
                    <span className="text-sm leading-relaxed">
                      Export formats for CAD & ML workflows
                    </span>
                  </li>
                </ul>
              </div>

              <div className="mt-8 sm:mt-10 flex items-center gap-6">
                {/* CTA Button */}
                <Button
                  asChild
                  className="
      text-sm px-6 py-3
      sm:text-base sm:px-7 sm:py-3.5
      lg:text-lg lg:px-9 lg:py-4 font-medium
    "
                >
                  <a href="#subscribe">Request a Demo</a>
                </Button>

                {/* Small preview image */}
                <div className="hidden md:block rounded-xl overflow-hidden w-40 h-24 shadow-md">
                  <img
                    src="/assets/two.jpeg"
                    alt="Person using phone"
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
            </div>

            <div className="pointer-events-none hidden lg:block absolute right-0 top-0 bottom-0 w-1/3">
              <div className="h-full w-full bg-gradient-to-b from-transparent to-muted/8" />
            </div>
          </motion.div>

          {/* Small feature cards */}
          <SmallFeature
            Icon={Cpu}
            title="Accurate measurements"
            description="Robust body measurements automatically extracted for pattern generation and sizing."
          />
          <SmallFeature
            Icon={Users}
            title="Scale for production"
            description="Capture thousands of bodies quickly — perfect for retailers and enterprise pipelines."
          />
          <SmallFeature
            Icon={Shield}
            title="Privacy-first"
            description="Optional on-device processing and minimal retention — built for compliance and trust."
          />
          <SmallFeature
            Icon={Activity}
            title="Actionable insights"
            description="Shape analysis, motion-aware metrics and custom analytics for performance & health teams."
          />
        </div>
      </motion.div>
    </section>
  );
}
