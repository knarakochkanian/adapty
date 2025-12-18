/* eslint-disable react/jsx-no-useless-fragment */
"use client";

import Header from "@widgets/header";
import Hero from "@widgets/hero";
import SocialProof from "@widgets/social-proof";
import Features from "@widgets/features";
import Testimonials from "@widgets/testimonials";
import CallToAction from "@widgets/cta";
import Footer from "@widgets/footer";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col">
      <Header />
      <Hero />
      <SocialProof />
      <Features />
      <Testimonials />
      <CallToAction />
      <Footer />
    </main>
  );
}
