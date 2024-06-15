"use client";
import Footer from "@/components/Footer";
import CarouselSection from "@/components/Sections/CarouselSection";
import FeaturedSection from "@/components/Sections/FeaturedSection";
import GetInTouchSection from "@/components/Sections/GetInTouchSection";
import HeroSection from "@/components/Sections/HeroSection";
import { Fragment } from "react";

export default function Home() {

  return (
    <Fragment>
      <HeroSection />
      <CarouselSection />
      <FeaturedSection />
      <GetInTouchSection />
      <Footer />
    </Fragment>
  );
}
