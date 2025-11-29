// components/FooterModern.jsx
import { IconMail } from "@tabler/icons-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-background text-foreground/80 relative">
      {/* subtle accent line */}
      <div className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-primary/40 via-accent/30 to-primary/40" />

      <div className="max-w-7xl mx-auto px-6 py-12 lg:py-16 flex flex-col lg:flex-row items-center justify-between gap-8">
        {/* Brand */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
          <span className="font-bold text-2xl lg:text-3xl">Quorium‑ai</span>
          <span className="mt-1 text-sm opacity-80">
            Revolutionizing 3D Body Data
          </span>
        </div>

        {/* Navigation links */}
        <nav className="flex flex-wrap justify-center gap-6 text-sm">
          <Link href="/#home" className="hover:text-primary transition">
            Home
          </Link>
          <Link href="/#features" className="hover:text-primary transition">
            Features
          </Link>

          <Link href="/#services" className="hover:text-primary transition">
            Services
          </Link>
          <Link href="/#about" className="hover:text-primary transition">
            About
          </Link>
          <Link href="/#team" className="hover:text-primary transition">
            Team
          </Link>
          <Link href="/#contact" className="hover:text-primary transition">
            Contact
          </Link>
          <Link
            href="/details#solution"
            className="hover:text-primary transition"
          >
            Learn More
          </Link>
        </nav>

        {/* Contact info */}
        <div className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition">
            <IconMail size={20} stroke={2} className="text-primary" />
          </div>
          <a
            href="mailto:info@quorium-ai.online"
            className="text-sm hover:text-primary transition font-medium"
          >
            info@quorium-ai.online
          </a>
        </div>
      </div>

      <div className="border-t border-border mt-6 py-4 text-center text-xs opacity-70">
        © {new Date().getFullYear()} Quorium‑ai. All rights reserved.
      </div>
    </footer>
  );
}
