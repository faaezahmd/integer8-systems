import Hero from "@/components/Hero";
import TrustStrip from "@/components/TrustStrip";
import ServicesOverview from "@/components/ServicesOverview";
import WhyUs from "@/components/WhyUs";
import FeaturedCaseStudies from "@/components/FeaturedCaseStudies";
import Founder from "@/components/Founder";
import CTA from "@/components/CTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <ServicesOverview />
      <WhyUs />
      <FeaturedCaseStudies />
      <Founder />
      <CTA />
    </>
  );
}
