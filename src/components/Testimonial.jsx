"use client";

import { motion } from "motion/react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const TESTIMONIALS = [
  {
    quote:
      "Quorium‑ai transformed our product workflow — fast scans with production‑grade results.",
    name: "Sarah Kim",
    role: "Head of Product, FitStyle Inc.",
  },
  {
    quote:
      "We halved prototyping time. Integration was seamless and support excellent.",
    name: "Daniel Park",
    role: "Lead Designer, ActiveWear Co.",
  },
  {
    quote:
      "Personalized fitness at scale became possible thanks to accurate 3D models.",
    name: "Emily Chen",
    role: "Fitness Director, Peak Performance",
  },
  {
    quote:
      "The AI scanning process is incredibly fast and extremely reliable.",
    name: "Michael Lee",
    role: "CTO, ApparelTech",
  },
  {
    quote:
      "Using Quorium‑ai, our healthcare assessments are now precise and easy to gather.",
    name: "Olivia Wong",
    role: "Clinical Lead, HealthMetrics",
  },
  {
    quote:
      "Integrating Quorium‑ai into our workflow has streamlined design and manufacturing.",
    name: "James Carter",
    role: "Senior Product Manager, MotionWear",
  },
];

const cardAnimation = {
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0 },
  transition: (i) => ({
    duration: 0.6,
    delay: i * 0.08,
    ease: [0.17, 0.55, 0.55, 1],
  }),
};

export default function Testimonials() {
  return (
    <section id="testimonials" className="max-w-7xl overflow-hidden mx-auto px-6 py-20">
      <div className="text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
          className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight"
        >
          What our clients say
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-4 max-w-3xl mx-auto text-sm sm:text-base text-muted-foreground"
        >
          Real feedback from early adopters using Quorium‑ai for apparel, fitness, and health solutions.
        </motion.p>
      </div>

     <Carousel className="w-full relative group">
        <CarouselContent className="-ml-4">
          {TESTIMONIALS.map((t, i) => (
            <CarouselItem
              key={i}
              className="pl-4 sm:basis-full md:basis-1/2 lg:basis-1/3"
            >
              <motion.div
                initial={cardAnimation.initial}
                whileInView={cardAnimation.whileInView}
                transition={cardAnimation.transition(i)}
                viewport={{ once: true, amount: 0.5 }}
                className="bg-card border border-border/70 rounded-3xl p-8 flex flex-col justify-between h-full transition-shadow duration-300 hover:shadow-lg "
              >
                <blockquote className="flex flex-col h-full">
                  <p className="text-lg leading-relaxed mb-8 grow">
                    &quot;{t.quote}&quot;
                  </p>
                  <footer className="flex items-center gap-4 mt-auto">
                    <Avatar className="h-14 w-14 border-2 border-primary/50">
                      <AvatarFallback>
                        {t.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div className="text-left">
                      <div className="font-bold text-base tracking-tight">{t.name}</div>
                      <div className="text-sm text-primary/80">{t.role}</div>
                    </div>
                  </footer>
                </blockquote>
              </motion.div>
            </CarouselItem>
          ))}
        </CarouselContent>
        
        {/* Desktop: Buttons on the sides, inside container */}
        <CarouselPrevious className="hidden md:flex scale-0 transition-transform duration-200 group-hover:scale-100 left-0 lg:left-4" />
        <CarouselNext className="hidden md:flex scale-0 transition-transform duration-200 group-hover:scale-100 right-0 lg:right-4" />
        
        {/* Mobile: Buttons below content */}
        <div className="flex md:hidden justify-center  gap-4 mt-8">
          <CarouselPrevious className="static translate-y-0" />
          <CarouselNext className="static translate-y-0" />
        </div>
      </Carousel>
    </section>
  );
}
