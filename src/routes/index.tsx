import { createFileRoute } from '@tanstack/react-router'
import HeroSection from "@/components/hero-section.tsx";
import Features from "@/components/features-1.tsx";
import Pricing from "@/components/pricing.tsx";
import ContentSection from "@/components/content-4.tsx";
import FooterSection from "@/components/footer.tsx";
import TeamSection from "@/components/team.tsx";

export const Route = createFileRoute('/')({ component: App })

function App() {

  return (
      <>
          <HeroSection/>
          <Features/>
          <TeamSection/>
          <Pricing/>
          <ContentSection/>
          <FooterSection/>
      </>
  )
}
