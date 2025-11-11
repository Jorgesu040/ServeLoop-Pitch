"use client"

import { HeroSection } from "@/components/hero-section"
import { WhatWhyHowSection } from "@/components/what-why-how-section"
import { CanvaEmbedSection } from "@/components/canva-embed-section"
import { BenefitsSection } from "@/components/benefits-section"
import { HowItWorksSection } from "@/components/how-it-works-section"
import { FeaturesSection } from "@/components/features-section"
import { WhyDifferentSection } from "@/components/why-different-section"
import { DemoSection } from "@/components/demo-section"
import { SocialProofSection } from "@/components/social-proof-section"
import { PricingSection } from "@/components/pricing-section"
import { FAQSection } from "@/components/faq-section"
import { VideoDemoSection } from "@/components/video-demo-section"
import { Footer } from "@/components/footer"
import { motion } from "framer-motion"

export default function Home() {
  return (
    <motion.main
      className="min-h-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <HeroSection />
      <WhatWhyHowSection />
      <CanvaEmbedSection />
      <BenefitsSection />
      <HowItWorksSection />
      <FeaturesSection />
      <VideoDemoSection />
      <WhyDifferentSection />
      <DemoSection />
      <SocialProofSection />
      <PricingSection />
      <FAQSection />
      <Footer />
    </motion.main>
  )
}
