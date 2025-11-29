"use client";

import React from "react";
import { motion } from "motion/react";


import { Button } from "./ui/button";

/**
 * Team.jsx
 *
 * - Responsive grid (1 / 2 / 3 / 4 columns depending on viewport)
 * - Cards: avatar, name, role, short bio, social links
 * - Subtle motion: stagger fade-up on enter, lift on hover
 */

const TEAM = [
  {
    name: "Aisha Rahman",
    role: "Co-founder & CEO",
    bio: "Product & design leader focused on fit systems and human-centered ML.",
    img: "/assets/team-one.webp",
    links: { linkedin: "#", twitter: "#" },
  },
  {
    name: "Daniel Park",
    role: "Co-founder & CTO",
    bio: "ML engineer and 3D researcher building scalable capture pipelines.",
    img: "/assets/team-two.webp",
    links: { linkedin: "#", twitter: "#" },
  },
  {
    name: "Maya Ortiz",
    role: "Head of Product",
    bio: "Design-driven PM focused on developer experience and SDKs.",
    img: "/assets/team-three.webp",
    links: { linkedin: "#", twitter: "#" },
  },
  {
    name: "Liam Chen",
    role: "Lead ML Engineer",
    bio: "Works on 3D reconstruction, optimization, and on-device models.",
    img: "/assets/team-four.webp",
    links: { linkedin: "#", twitter: "#" },
  },
];

// ---- ANIMATION VARIANTS ---- //

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 14 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: "easeOut" },
  },
};

export default function Team() {
  return (
    <section
      id="team"
      aria-labelledby="team-heading"
      className="max-w-7xl mx-auto px-6 py-20"
    >
      <div className="mx-auto max-w-6xl text-center mb-10">
        <h2
          id="team-heading"
          className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight"
        >
          Meet the team
        </h2>
        <p className="mt-4 max-w-3xl mx-auto text-sm sm:text-base opacity-90">
          Small team, big impact — engineers, designers and researchers building
          accessible 3D body capture.
        </p>
      </div>

      {/* ---- TEAM GRID WITH STAGGER ANIMATION ---- */}
      <motion.div
        className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
      >
        {TEAM.map((member, i) => (
          <motion.article
            key={member.name}
            variants={item}
            className="bg-card/60 border border-border rounded-2xl p-6 flex flex-col items-center text-center"
            whileHover={{
              y: -6,
              boxShadow: "0 12px 30px rgba(12, 18, 28, 0.08)",
            }}
            transition={{ type: "spring", stiffness: 300, damping: 22 }}
            aria-labelledby={`team-${i}-name`}
          >
            <div className="w-28 h-28 rounded-full overflow-hidden ring-1 ring-border">
              <img
                src={member.img}
                alt={member.name}
                className="object-cover w-full h-full"
                loading="lazy"
                width="112"
                height="112"
              />
            </div>

            <h3 id={`team-${i}-name`} className="mt-4 text-base font-semibold">
              {member.name}
            </h3>
            <div className="text-xs opacity-80 mt-1">{member.role}</div>

            <p className="mt-5 text-sm leading-relaxed opacity-95">
              {member.bio}
            </p>

            
          </motion.article>
        ))}
      </motion.div>

      {/* ---- CTA BUTTON ---- */}
      <div className="mt-10 text-center">
        <Button
          asChild
          className="
            text-sm px-5 py-2.5
            sm:text-base sm:px-6 sm:py-3
            font-medium
          "
        >
          <a href="#careers">Join the team</a>
        </Button>
      </div>
    </section>
  );
}
