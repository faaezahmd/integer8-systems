import Hero from "@/components/Hero";
import ServicesOverview from "@/components/ServicesOverview";
import WhyUs from "@/components/WhyUs";
import FeaturedCaseStudies from "@/components/FeaturedCaseStudies";
import CTA from "@/components/CTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesOverview />
      <WhyUs />
      <FeaturedCaseStudies />
      <CTA />
    </>
  );
}
