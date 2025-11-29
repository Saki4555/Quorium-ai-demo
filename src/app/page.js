import AboutUs from "@/components/AboutUs";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import LightRays from "@/components/LightRays";
import Services from "@/components/Services";
import Subscribe from "@/components/Subscribe";
import Team from "@/components/Team";
import Testimonials from "@/components/Testimonial";
import Image from "next/image";

export default function Home() {
  return (
   <>
  
   <Hero />
   <Features />
   <AboutUs />
   <Services />
   <Testimonials />
   <Team />
   <Subscribe />
  
   </>
  );
}
