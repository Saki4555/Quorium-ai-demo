"use client";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import NumberFlow from "@number-flow/react";
import { BadgeCheck } from "lucide-react";
import { motion } from "framer-motion";
const PAYMENT_FREQUENCIES = ["monthly", "yearly"];
const TIERS = [
  {
    id: "individuals",
    name: "Individuals",
    price: {
      monthly: "Free",
      yearly: "Free",
    },
    description: "An easy way to try Quoran-ai and capture your first 3D models.",
    features: [
      "Phone capture & single export",
      "On-device inference option",
      "GLTF / OBJ export",
      "Basic measurement set",
      "Community support",
    ],
    cta: "Get Started",
  },
  {
    id: "teams",
    name: "Teams",
    price: {
      monthly: 90,
      yearly: 75,
    },
    description: "Scale capture workflows for small teams with collaboration tools and enhanced exports.",
    features: [
      "Team seats & role controls",
      "Priority export formats",
      "30s capture & quick processing",
      "Batch uploads & monitoring",
      "SLA-ready support",
    ],
    cta: "Get Started",
    popular: true,
  },
  {
    id: "organizations",
    name: "Organizations",
    price: {
      monthly: 120,
      yearly: 100,
    },
    description: "Enterprise-grade pipelines for large-scale capture and integration.",
    features: [
      "High-throughput capture",
      "Advanced analytics & keypoints",
      "PLM / CAD integrations",
      "Enterprise export & data formats",
      "SAML / SSO support",
    ],
    cta: "Get Started",
  },
  {
    id: "enterprise",
    name: "Enterprise",
    price: {
      monthly: "Custom",
      yearly: "Custom",
    },
    description: "Custom deployments, security controls, and dedicated SLAs for enterprises.",
    features: [
      "SAML & SSO, dedicated cloud or on-prem",
      "Compliance & audit logs",
      "Unlimited seats & priority SLA",
      "Custom onboarding & training",
      "Integration & migration support",
    ],
    cta: "Contact Sales",
    highlighted: true,
  },
];
const HighlightedBackground = () => (
  <div className="absolute inset-0    opacity-100 dark:opacity-30" />
);
const PopularBackground = () => (
  <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(240,119,119,0.1),rgba(255,255,255,0))] dark:bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(220,119,118,0.3),rgba(255,255,255,0))]" />
);
const Tab = ({ text, selected, setSelected, discount = false }) => {
  return (
    <button
      onClick={() => setSelected(text)}
      aria-pressed={selected}
      className={cn(
        "relative w-fit px-4 py-2  text-sm capitalize transition-colors",
        selected ? "text-primary font-semibold" : "text-foreground/90",
        discount && "flex items-center justify-center gap-2.5",
      )}>
      <span className="relative z-10">{text}</span>
      {selected && (
        <motion.span
          layoutId="tab"
          transition={{ type: "spring", duration: 0.4 }}
          className="bg-card/60 dark:bg-input/30 absolute inset-0 z-0 rounded-full shadow-sm"></motion.span>
      )}
      {discount && (
        <Badge
          className={cn(
            "relative z-10 text-xs whitespace-nowrap shadow-none",
            selected ? "bg-primary/10 text-primary" : "bg-muted/10 text-muted-foreground",
          )}>
          Save 35%
        </Badge>
      )}
    </button>
  );
};
const PricingCard = ({ tier, paymentFrequency }) => {
  const price = tier.price[paymentFrequency];
  const isHighlighted = tier.highlighted;
  const isPopular = tier.popular;

  return (
    <div
      className={cn(
        "relative flex flex-col gap-8 overflow-hidden rounded-2xl border border-border p-6 shadow-sm",
        isHighlighted ? "bg-accent  text-accent-foreground" : "bg-card/60 text-foreground",
        isPopular && "ring-2 ring-primary/20",
      )}
    >
      {isHighlighted && <HighlightedBackground />}
      {isPopular && <PopularBackground />}

      {/* FIX: Separated the H2 and the Badge into a flex container. 
         This prevents "div inside h2" hydration errors. 
      */}
      <div className="flex items-center gap-3">
        <h3 className="text-lg font-semibold capitalize">{tier.name}</h3>
        {isPopular && (
          <Badge className="bg-primary px-2 py-0 text-primary-foreground hover:bg-primary/90">
            🔥 Popular
          </Badge>
        )}
      </div>

      <div className="relative h-12">
        {typeof price === "number" ? (
          <>
            <NumberFlow
              format={{
                style: "currency",
                currency: "USD",
                trailingZeroDisplay: "stripIfInteger",
              }}
              value={price}
              className="text-3xl sm:text-4xl font-semibold"
            />
            <p className="-mt-2 text-xs font-medium text-muted-foreground">Per user / month</p>
          </>
        ) : (
          <h1 className="text-3xl sm:text-4xl font-semibold">{price}</h1>
        )}
      </div>

      <div className="flex-1 space-y-2">
        <h4 className="text-sm font-medium text-muted-foreground">{tier.description}</h4>
        <ul className="space-y-2">
          {tier.features.map((feature, index) => (
            <li
              key={index}
              className={cn(
                "flex items-center gap-2 text-sm font-medium",
                isHighlighted ? "text-foreground/70" : "text-foreground/60",
              )}
            >
              <BadgeCheck strokeWidth={1} size={16} className={cn("shrink-0",isHighlighted ? "text-accent-foreground" : "text-primary")} />
              {feature}
            </li>
          ))}
        </ul>
      </div>

      <Button
        variant={isHighlighted ? "default": "outline"}
        className={cn("h-fit w-full rounded-lg ", isHighlighted && "px-6 py-3 ")}
      >
        {tier.cta}
      </Button>
    </div>
  );
};
export default function PricingSectionModern() {
  const [selectedPaymentFreq, setSelectedPaymentFreq] = useState(
    PAYMENT_FREQUENCIES[0],
  );
  return (
    <section className="py-24">
      <div className="max-w-6xl mx-auto px-6 flex flex-col items-center gap-10">
      <div className="space-y-7 text-center">
        <div className="space-y-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold">Plans & Pricing</h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-3xl mx-auto">Flexible plans built for teams and scale — choose the right fit based on cadence, throughput, and deployment needs. Annual plans include credits and improved SLAs.</p>
        </div>
        <div className="mx-auto flex w-fit rounded-full bg-muted">
          {PAYMENT_FREQUENCIES.map((freq) => (
            <Tab
              key={freq}
              text={freq}
              selected={selectedPaymentFreq === freq}
              setSelected={(text) => setSelectedPaymentFreq(text)}
              discount={freq === "yearly"}
            />
          ))}
        </div>
      </div>

      <div className="grid w-full max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
        {TIERS.map((tier, i) => (
          <PricingCard
            key={i}
            tier={tier}
            paymentFrequency={selectedPaymentFreq}
          />
        ))}
      </div>
      </div>
    </section>
  );
}