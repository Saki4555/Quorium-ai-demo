"use client";


import LightRays from "./LightRays";
import { Button } from "./ui/button";
import Link from "next/link";
import { motion } from "motion/react";


const Hero = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };
  const buttonHover = { scale: 1.05, transition: { duration: 0.2 } };

  return (
    <div id="home" className="h-[80vh] lg:h-screen relative overflow-hidden">
      {/* Light rays background */}
      <LightRays
        raysOrigin="top-center"
        raysColor="#6F00FF"
        raysSpeed={1.4}
        lightSpread={0.75}
        rayLength={1.6}
        followMouse={false}
        noiseAmount={0.08}
        distortion={0.09}
        className="absolute inset-0"
      />

     

      {/* Main hero content */}
      <div className="absolute mt-16 z-10 overflow-hidden inset-0 flex flex-col items-center justify-center text-center px-6 text-foreground">
        <div className="absolute inset-0 bg-background/30 backdrop-blur-sm" />

        <motion.h1
          className="relative text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] max-w-4xl"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
        >
          Capture Your Body in 3D — Instantly, With Just a Phone.
        </motion.h1>

        <motion.p
          className="relative mt-6 text-base sm:text-lg lg:text-xl max-w-2xl leading-relaxed"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          transition={{ delay: 0.2 }}
        >
          Quorium-ai uses cutting-edge AI to turn everyday devices into powerful 3D-body scanners.
        </motion.p>

          <motion.div
            className="relative mt-10 flex flex-row gap-4"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          transition={{ delay: 0.4 }}
        >
            <motion.div whileHover={buttonHover}>
              <Link href="/details#get-started">
                <Button
                  asChild
                  className="text-sm px-6 py-3 sm:text-base sm:px-7 sm:py-3.5 lg:text-lg lg:px-9 lg:py-4 font-medium"
                >
                  <span>Get Started</span>
                </Button>
              </Link>
            </motion.div>

            <motion.div whileHover={buttonHover}>
              <Link href="/details#solution" >
                <Button
                  variant="outline"
                  asChild
                  className="text-sm px-6 py-3 sm:text-base sm:px-7 sm:py-3.5 lg:text-lg lg:px-9 lg:py-4 font-medium"
                >
                  <span>Learn More</span>
                </Button>
              </Link>
            </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
