"use client";

import React from "react";
import { motion } from "motion/react";
import { Button } from "./ui/button";


/**
 * AboutUs.jsx
 *
 * - Modern two-column layout (text + team/stats)
 * - Editable text directly inside JSX (search for EDIT:)
 * - Uses standard <img> tags for avatars and lightweight unsplash placeholders
 * - Subtle entrance animations (framer-motion)
 * - No hardcoded colors — uses theme tokens like bg-card, border-border, text-foreground
 */

const fadeUp = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0 },
};

export default function AboutUs() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="max-w-7xl overflow-hidden mx-auto px-6 py-20"
    >
      <div className="mx-auto max-w-6xl">
        {/* header */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          variants={fadeUp}
        >
          <h2
            id="about-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight"
          >
            {/* EDIT: Main heading */}
            About Quorium-ai
          </h2>
          <p className="mt-4 max-w-3xl text-sm sm:text-base leading-relaxed opacity-95">
            {/* EDIT: Intro paragraph */}
            We’re democratizing precise 3D human body data — making fast, accurate
            scans available on everyday devices. From apparel and custom fit to
            healthcare and fitness, our mission is to remove barriers and enable
            meaningful, data-driven experiences.
          </p>
        </motion.div>

        {/* layout: left text (2/3) + right team/stats (1/3) */}
        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {/* Left column: story, mission, values */}
          <motion.div
            className="lg:col-span-2"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
            variants={fadeUp}
            transition={{ delay: 0.05 }}
          >
            {/* Our story */}
            <div className="rounded-2xl border border-border bg-card/60 p-8">
              <h3 className="text-xl font-semibold">Our story</h3>
              <p className="mt-3 text-sm leading-relaxed">
                {/* EDIT: Story */}
                Founded by engineers and product designers frustrated with slow,
                costly 3D capture, Quorium-ai built tools that work on consumer
                devices without sacrificing accuracy. We combine pragmatic ML,
                careful UX, and privacy-first engineering to deliver results teams
                can trust.
              </p>

              {/* Mission & Vision */}
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="rounded-lg p-4 border border-border bg-background/40">
                  <h4 className="text-sm font-semibold">Mission</h4>
                  <p className="mt-2 text-sm leading-relaxed opacity-95">
                    {/* EDIT: Mission */}
                    Make high-fidelity 3D body data accessible and practical for
                    businesses and consumers.
                  </p>
                </div>

                <div className="rounded-lg p-4 border border-border bg-background/40">
                  <h4 className="text-sm font-semibold">Vision</h4>
                  <p className="mt-2 text-sm leading-relaxed opacity-95">
                    {/* EDIT: Vision */}
                    A world where perfect fit, personalized care, and tailored
                    performance are available to everyone.
                  </p>
                </div>
              </div>

              {/* Core values */}
              <div className="mt-6">
                <h4 className="text-sm font-semibold">Core values</h4>
                <ul className="mt-3 grid gap-2 sm:grid-cols-3">
                  <li className="text-sm leading-relaxed">Privacy-first engineering</li>
                  <li className="text-sm leading-relaxed">Practical accuracy</li>
                  <li className="text-sm leading-relaxed">Human-centered design</li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Right column: stats + team preview */}
          <motion.aside
            className="lg:col-span-1 flex flex-col gap-6"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
            variants={fadeUp}
            transition={{ delay: 0.1 }}
          >
            {/* Top stats (compact) */}
            <div className="rounded-2xl border border-border bg-card/60 p-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="text-sm font-semibold">Avg capture</div>
                  <div className="mt-1 text-lg font-bold">~12s</div>
                  <div className="mt-1 text-xs opacity-90">Quick, consumer-ready</div>
                </div>

                <div>
                  <div className="text-sm font-semibold">Accuracy</div>
                  <div className="mt-1 text-lg font-bold">±2mm</div>
                  <div className="mt-1 text-xs opacity-90">Repeatable measurements</div>
                </div>

                <div>
                  <div className="text-sm font-semibold">Customers</div>
                  <div className="mt-1 text-lg font-bold">Early adopters</div>
                  <div className="mt-1 text-xs opacity-90">Retail & fitness pilots</div>
                </div>

                <div>
                  <div className="text-sm font-semibold">Integrations</div>
                  <div className="mt-1 text-lg font-bold">CAD · ML</div>
                  <div className="mt-1 text-xs opacity-90">Export-ready formats</div>
                </div>
              </div>
            </div>

            {/* Team preview */}
            <div className="rounded-2xl border border-border bg-card/60 p-6">
              <h4 className="text-sm font-semibold">Leadership</h4>

              <ul className="mt-4 space-y-4">
                {/* Person 1 */}
                <li className="flex items-start gap-3">
                  <img
                    src="/assets/team-one.webp"
                    alt="Founder"
                    className="h-12 w-12 rounded-full object-cover flex-shrink-0"
                    width="48"
                    height="48"
                    loading="lazy"
                  />
                  <div>
                    <div className="text-sm font-semibold">Aisha Rahman</div>
                    <div className="text-xs opacity-90">Co-founder & CEO</div>
                    <div className="mt-1 text-xs leading-relaxed opacity-90">
                      {/* EDIT: short bio */}
                      Product leader focused on fit systems and human-centered ML.
                    </div>
                  </div>
                </li>

                {/* Person 2 */}
                <li className="flex items-start gap-3">
                  <img
                    src="/assets/team-two.webp"
                    alt="CTO"
                    className="h-12 w-12 rounded-full object-cover flex-shrink-0"
                    width="48"
                    height="48"
                  />
                  <div>
                    <div className="text-sm font-semibold">Daniel Park</div>
                    <div className="text-xs opacity-90">Co-founder & CTO</div>
                    <div className="mt-1 text-xs leading-relaxed opacity-90">
                      {/* EDIT: short bio */}
                      ML engineer and 3D researcher building scalable capture pipelines.
                    </div>
                  </div>
                </li>
              </ul>

           

{/* small CTA */}
<div className="mt-6">
  <Button
    asChild
    className="
      text-sm px-5 py-2.5
      sm:text-base sm:px-6 sm:py-3
      font-medium
    "
  >
    <a href="#team">Meet the Team</a>
  </Button>
</div>

            </div>
          </motion.aside>
        </div>
      </div>
    </section>
  );
}
