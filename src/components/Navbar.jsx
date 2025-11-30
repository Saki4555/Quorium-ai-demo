"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

 

  const navLinks = [
    { href: "/#home", label: "Home" },
    { href: "/#features", label: "Features" },
    { href: "/#about", label: "About" },
    { href: "/#services", label: "Services" },
    { href: "/#testimonials", label: "Testimonials" },
    { href: "/#team", label: "Team" },
    { href: "/details", label: "Overview" },
  ];

  // Detect scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) setScrolled(true);
      else setScrolled(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  

  const menuVariants = {
    closed: { x: "-100%", opacity: 0 },
    open: { x: 0, opacity: 1 },
  };

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <>
      {/* Header */}
      <header
        className={`fixed top-0 left-0 z-105 right-0  transition-all overflow-hidden duration-300 ${
          scrolled
            ? "bg-background/90 backdrop-blur-md border-b"
            : "bg-white/50"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="font-semibold text-xl tracking-tight ">
            Quoran-ai
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-sm font-medium hover:opacity-80 transition"
              >
                {l.label}
              </Link>
            ))}
            <Button asChild>
              <Link href="/#subscribe">Get Demo</Link>
            </Button>
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden ">
            <button
              onClick={() => setOpen(true)}
              className="p-2 rounded-md"
              aria-label="Open menu"
            >
              <svg
                width="24"
                height="24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Sidebar + Overlay */}
      <AnimatePresence>
        {open && (
          <>
            {/* Overlay */}
            <motion.div
              key="overlay"
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={overlayVariants}
              transition={{ duration: 0.2 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 bg-black/30 z-105"
            />

            {/* Sidebar */}
            <motion.aside
              key="sidebar"
              initial="closed"
              animate="open"
              exit="closed"
              variants={menuVariants}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed top-0 left-0 bottom-0 w-[80vw] sm:w-[300px] bg-background/95 backdrop-blur-md shadow-lg z-115"
            >
              <div className="flex flex-col h-full px-6 pt-6 pb-8">
                {/* Header with Close */}
                <div className="flex justify-between items-center mb-8">
                  <span className="font-semibold text-lg">Quoran-ai</span>
                  <button
                    onClick={() => setOpen(false)}
                    className="p-2 rounded-md"
                    aria-label="Close menu"
                  >
                    <svg
                      width="24"
                      height="24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M6 6l12 12M6 18L18 6" />
                    </svg>
                  </button>
                </div>

                {/* Links */}
                <nav className="flex flex-col gap-4 flex-grow">
                  {navLinks.map((l) => (
                    <a
                      key={l.href}
                      href={l.href}
                      onClick={() => setOpen(false)}
                      className="py-3 px-4 text-base font-medium hover:bg-muted/5 rounded-md transition"
                    >
                      {l.label}
                    </a>
                  ))}
                </nav>

                {/* CTA */}
                <div className="mt-auto">
                  <Button className="w-full" asChild>
                    <a href="#subscribe" onClick={() => setOpen(false)}>
                      Get Demo
                    </a>
                  </Button>
                </div>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
