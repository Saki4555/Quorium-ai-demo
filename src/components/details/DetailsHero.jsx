"use client";

import { Button } from "../ui/button";
import { motion } from "motion/react";
import { ArrowRight, Shield, Server } from "lucide-react";
import Link from "next/link";

export default function DetailsHero() {
  const fadeIn = { hidden: { opacity: 0, y: 12 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };
  return (
    <motion.section id="get-started" className="pb-20 pt-32 lg:pt-36 bg-linear-to-b from-background/40 to-transparent overflow-hidden" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
      <div  />
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="space-y-6">
            <motion.h1 className="text-3xl sm:text-5xl font-extrabold leading-tight" variants={fadeIn}>
              Accurate 3D Body Capture for Production & Enterprise
            </motion.h1>
            <motion.p className="text-base sm:text-lg text-muted-foreground max-w-2xl" variants={fadeIn}>
              Quorium-ai delivers sub-millimeter 3D body reconstruction, robust
              biometric metrics, and privacy-first data processing for retailers,
              healthcare providers, and developers. Choose cloud or on-device
              inference to meet compliance and scale.
            </motion.p>

            <div className="flex flex-wrap gap-3 items-center">
              <Button asChild className="px-6 py-3 font-medium">
                <Link href="/#subscribe">Request a Demo</Link>
              </Button>
              <Button variant="outline" asChild className="px-5 py-3">
                <a href="#tech-details">View Specs</a>
              </Button>
            </div>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-muted/10">
                  <Server className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <div className="text-sm font-semibold">Low Latency</div>
                  <div className="text-xs text-muted-foreground">Cloud & on-device options</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-muted/10">
                  <Shield className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <div className="text-sm font-semibold">Privacy-first</div>
                  <div className="text-xs text-muted-foreground">Client-side inference & minimal retention</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-muted/10">
                  <ArrowRight className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <div className="text-sm font-semibold">Interoperable</div>
                  <div className="text-xs text-muted-foreground">GLTF, OBJ, PLY export & SDKs</div>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden shadow-md bg-card">
            <img
              loading="lazy"
              src="/assets/six.jpg"
              alt="3D capture example"
              className="w-full h-full object-cover min-h-80"
            />
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export { DetailsHero };
