import { HeroSection } from "@/components/hero-section"
import { TrustedProviderSection } from "@/components/trusted-provider-section"
import { AboutSection } from "@/components/about-section"
import { FAQSection } from "@/components/faq-section"
import { SpecialitiesSection } from "@/components/specialities-section"
import { RegisterSection } from "@/components/register-section"
import { FooterSection } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <TrustedProviderSection />
      <AboutSection />
      <FAQSection />
      <SpecialitiesSection />
      <RegisterSection />
      <FooterSection />
    </main>
  )
}
