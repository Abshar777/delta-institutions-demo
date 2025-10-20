import HeroSection from "@/components/page-sections/hero";
import Image from "next/image";
import IntroSection from "@/components/page-sections/introSecftion";
import DeltaGroupSection from "@/components/page-sections/groupSection";
import TestimonialsSection from "@/components/page-sections/testimonialsSection";
import ServicesSection from "@/components/page-sections/awards";
import ScrollingExperienceSection from "@/components/page-sections/ScrollingExperienceSection";
import VideoPopup from "@/components/page-sections/videoPopup";
import BlogsSection from "@/components/page-sections/blogs";

export default function Home() {
  return (
   <>
   <HeroSection/>
   <IntroSection/>
   <DeltaGroupSection/>
   <ServicesSection/>
   <TestimonialsSection/>
   <ScrollingExperienceSection/>
   <VideoPopup/>
   <BlogsSection/>
   </>
  );
}
