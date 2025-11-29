"use client";

import { Button } from "./ui/button";
import { motion } from "motion/react";

export default function Subscribe() {
  // Motion variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const hoverScale = { scale: 1.05, transition: { duration: 0.2 } };

  return (
    <section
      id="subscribe"
      aria-labelledby="subscribe-heading"
      className="max-w-5xl mx-auto px-6 py-16 mb-20 rounded-2xl bg-card/70 border border-border overflow-hidden relative"
    >
      {/* Optional soft decorative shape */}
      <div
        aria-hidden="true"
        className="absolute -right-24 -top-24 w-[320px] h-[320px] rounded-full bg-gradient-to-br from-primary/10 to-accent/6 blur-3xl pointer-events-none"
      />

      <motion.div
        className="relative z-10 grid gap-8 lg:grid-cols-2 lg:items-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={{
          visible: { transition: { staggerChildren: 0.15 } },
        }}
      >
        <motion.div variants={fadeInUp}>
          <h3
            id="subscribe-heading"
            className="text-3xl sm:text-4xl font-semibold leading-tight"
          >
            Stay Updated with Quorium‑ai
          </h3>
          <p className="mt-3 text-base sm:text-lg leading-relaxed opacity-90 max-w-lg">
            Get the latest on product updates, early‑access invites, and 3D body‑scan insights — delivered straight to your inbox.
          </p>
        </motion.div>

        <motion.form
          action="#"
          method="POST"
          onSubmit={(e) => e.preventDefault()}
          className="w-full sm:w-auto"
          variants={fadeInUp}
        >
          <motion.div
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3"
            whileHover={hoverScale}
          >
            <label htmlFor="modern-email" className="sr-only">
              Email address
            </label>
            <input
              id="modern-email"
              name="email"
              type="email"
              required
              placeholder="you@company.com"
              className="min-w-0 px-5 py-4 rounded-lg border border-accent bg-background/50 focus:outline-none focus:ring-2 focus:ring-offset-0 focus:ring-primary text-foreground"
            />

            <Button
              type="submit"
              className="
                shrink-0
                text-base px-7 py-4
                sm:text-lg sm:px-8 sm:py-5
                font-semibold
              "
            >
              Subscribe
            </Button>
          </motion.div>

          <motion.p className="mt-4 text-xs opacity-80" variants={fadeInUp}>
            No spam — unsubscribe anytime.
          </motion.p>
        </motion.form>
      </motion.div>
    </section>
  );
}
