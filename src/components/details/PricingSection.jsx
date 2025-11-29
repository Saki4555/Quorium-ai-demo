"use client";
import { motion } from "motion/react";
import { Button } from "../ui/button";

const Plan = ({ name, price, perks, featured }) => (
  <article className={`border border-border rounded-2xl p-6 ${featured ? "bg-primary/10" : "bg-card/60"}`}>
    <div className="flex items-center justify-between">
      <div>
        <h3 className="text-lg font-semibold">{name}</h3>
        <p className="text-xs text-muted-foreground mt-1">{price}</p>
      </div>
      <div>
        <Button asChild size="sm" className="px-4 py-2">
          <a href="#contact">Contact Sales</a>
        </Button>
      </div>
    </div>

    <ul className="mt-4 text-sm grid gap-2">
      {perks.map((p, i) => (
        <li key={i} className="text-muted-foreground">{p}</li>
      ))}
    </ul>
  </article>
);

export default function PricingSection() {
  const fadeInUp = { hidden: { opacity: 0, y: 18 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };
  return (
    <motion.section id="pricing" className="py-24" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.25 }} variants={fadeInUp}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold">Flexible Pricing</h2>
          <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">Developer friendly tiers for evaluation and enterprise-grade agreements for high-volume customers.</p>
        </div>

        <div className="grid gap-6 grid-cols-1 md:grid-cols-3">
          <Plan name="Developer" price="Free Trial" perks={["Up to 50 captures", "Community support", "SDK access"]} />
          <Plan name="Pro" price="$29 / mo" perks={["Higher throughput", "Priority support", "API access & exports"]} featured />
          <Plan name="Enterprise" price="Custom" perks={["SAML & SSO", "SLAs & premium support", "On-prem or dedicated cloud"]} />
        </div>
      </div>
    </motion.section>
  );
}

export { PricingSection };
