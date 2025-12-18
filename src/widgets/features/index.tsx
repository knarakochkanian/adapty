"use client";

import Section from "@shared/ui/section";
import Card from "@shared/ui/card";
import { features } from "@shared/content/home";

const chipBase =
  "rounded-full border border-accent-700/10 bg-primary-500/5 px-3 py-1 text-xs font-semibold text-accent-700";

export default function Features() {
  return (
    <Section id="features" className="bg-white py-0">
      <div className="flex flex-col gap-10">
        <div className="flex flex-col gap-2 text-center">
          <h2 className="font-display text-3xl font-semibold text-accent-700 sm:text-4xl">
            Help your team run the mobile subscription business.
          </h2>
          <p className="text-lg text-accent-700/80">Faster and cheaper.</p>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {features.map((feature) => (
            <Card
              key={feature.title}
              className="group flex h-full flex-col gap-4 border-none bg-[#faf9fc] shadow-sm transition hover:shadow-md"
            >
                <img
                  src={feature.image.src}
                  alt={feature.image.alt}
                  className="h-full w-full object-cover"
                />

              <a href='/' className="flex items-center justify-between px-1">
                <h3 className="text-lg font-semibold text-black transition group-hover:text-primary-600">
                  {feature.title}
                </h3>
                <span className="text-lg text-primary-600 transition group-hover:translate-x-1">›</span>
              </a>
              <div className="flex flex-wrap gap-2">
                {feature.chips.map((chip) => (
                  <span key={chip} className={chipBase}>
                    {chip}
                  </span>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </Section>
  );
}
