import Image from "next/image";
import { HeroSection } from "./components/HeroSection";
import { AboutSection } from "./components/AboutSection";
import { LeadershipSection } from "./components/LeadershipSection";
import { WhyUseSection } from "./components/WhyUseSection";
import AcademicPortfolioSection from "./components/AcedemicPortfolioSection";
import { AdmissionRequirementsSection } from "./components/AdmissionRequirementsSection";
import { ApplicationProcessSection } from "./components/ApplicationProcessSection";
import { CommonApplicationMistakesSection } from "./components/CommonApplicationMistakesSection";
import { FAQSection } from "./components/FAQSection";
import { BulletinBoardSection } from "./components/BulletinBoardSection";
import { OfficialContactsSection } from "./components/OfficialContactsSection";
import { StickyCTA } from "./components/StickyCTA";
import { Footer } from "./components/footer";





export default function Home() {
  return (
<div>
  <HeroSection />
  <AboutSection />
  <LeadershipSection />
  <WhyUseSection />
  <AcademicPortfolioSection />
  <AdmissionRequirementsSection />
  <ApplicationProcessSection />
  <CommonApplicationMistakesSection />
  <FAQSection />
  <BulletinBoardSection />
  {/* <OfficialSourcesSection /> */}
  <OfficialContactsSection />
  <StickyCTA />
 
</div>
  );
}
