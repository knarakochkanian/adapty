"use client";

import Section from "@shared/ui/section";
import Button from "@shared/ui/button";
import { ctaContent } from "@shared/content/home";

export default function CallToAction() {
  return (
    <Section id="cta" className="py-16">
      <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-r from-primary-500/20 via-white/5 to-orange-400/10 p-10 text-center">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.2),transparent_30%)]" />
        <div className="relative space-y-4">
          <h3 className="font-display text-3xl font-semibold text-white sm:text-4xl">
            {ctaContent.title}
          </h3>
          <p className="text-white/80">{ctaContent.description}</p>
          <div className="flex flex-wrap justify-center gap-3">
            <Button
              label={ctaContent.primary}
              onClick={() => console.log("cta-primary")}
              className="px-5 py-3"
            />
            <Button
              variant="ghost"
              label={ctaContent.secondary}
              onClick={() => console.log("cta-secondary")}
              className="px-5 py-3"
            />
          </div>
        </div>
      </div>
    </Section>
  );
}
