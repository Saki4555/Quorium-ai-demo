// components/FooterModern.jsx
import { IconBrandX, IconBrandLinkedin } from "@tabler/icons-react";

export default function Footer() {
  return (
    <footer className="bg-background text-foreground/80 relative">
      {/* subtle accent line */}
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary/40 via-accent/30 to-primary/40" />

      <div className="max-w-7xl mx-auto px-6 py-12 lg:py-16 flex flex-col lg:flex-row items-center justify-between gap-8">
        {/* Brand */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
          <span className="font-bold text-2xl lg:text-3xl">Quoran‑ai</span>
          <span className="mt-1 text-sm opacity-80">
            Revolutionizing 3D Body Data
          </span>
        </div>

        {/* Navigation links */}
        <nav className="flex flex-wrap justify-center gap-6 text-sm">
          <a href="#home" className="hover:text-primary transition">Home</a>
          <a href="#features" className="hover:text-primary transition">Features</a>
          <a href="#services" className="hover:text-primary transition">Services</a>
          <a href="#about" className="hover:text-primary transition">About</a>
          <a href="#team" className="hover:text-primary transition">Team</a>
          <a href="#contact" className="hover:text-primary transition">Contact</a>
        </nav>

        {/* Social icons */}
        <div className="flex items-center gap-4">
          <a href="https://x.com/YourCompany" aria-label="X" className="hover:text-primary transition">
            <IconBrandX size={24} stroke={2} />
          </a>
          <a href="https://linkedin.com/YourCompany" aria-label="LinkedIn" className="hover:text-primary transition">
            <IconBrandLinkedin size={24} stroke={2} />
          </a>
        </div>
      </div>

      <div className="border-t border-border mt-6 py-4 text-center text-xs opacity-70">
        © {new Date().getFullYear()} Quoran‑ai. All rights reserved.
      </div>
    </footer>
  );
}
