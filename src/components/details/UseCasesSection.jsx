"use client";
import { motion } from "motion/react";
import { Shirt, Heart, MapPin, Zap } from "lucide-react";

function UseCase({ icon: Icon, title, description, image }) {
  return (
    <article className="flex flex-col sm:flex-row gap-4 items-center bg-card/60 border border-border rounded-2xl p-6 hover:shadow-md transition-shadow">
      <div className="rounded-lg p-3 bg-muted/10">
        <Icon className="h-6 w-6 text-primary" />
      </div>
      <div className="flex-1">
        <h4 className="text-sm font-semibold">{title}</h4>
        <p className="mt-2 text-xs text-muted-foreground">{description}</p>
      </div>
      <div className="w-28 rounded-lg overflow-hidden shadow-sm hidden md:block">
        <img loading="lazy" src={image} alt="use-case preview" className="object-cover  w-full h-full" />
      </div>
    </article>
  );
}

export default function UseCasesSection() {
  const fadeInUp = { hidden: { opacity: 0, y: 18 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };
  return (
    <motion.section id="use-cases" className="py-20 bg-card/40" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.25 }} variants={fadeInUp}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold">Use Cases & Industry Examples</h2>
          <p className="mt-3 text-muted-foreground max-w-3xl mx-auto">Quoran-ai helps teams reduce returns, speed clinical care, and create immersive experiences. Here are a few real-world examples.</p>
        </div>

        <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
          <UseCase
            icon={Shirt}
            title="Apparel & Retail"
            description="Reduce returns with accurate virtual try-on and size recommendations — integrate with ecommerce and PLM systems."
            image="/assets/one.jpeg"
          />

          <UseCase
            icon={Heart}
            title="Healthcare & Telemedicine"
            description="Remote biometric capture to track patient metrics, posture, and recovery progress without in-person visits."
            image="/assets/three.jpeg"
          />

          <UseCase
            icon={Zap}
            title="Sports & Performance"
            description="Biomechanical insights, motion-aware metrics, and calibration for wearables and training tools."
            image="/assets/four.jpeg"
          />

          <UseCase
            icon={MapPin}
            title="AR/VR & Avatars"
            description="Create accurate avatars and workflows for virtual product fitting, gaming, and social experiences."
           image="/assets/two.jpeg"
          />
        </div>
      </div>
    </motion.section>
  );
}

export { UseCasesSection };
