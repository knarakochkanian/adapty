"use client";

import Button from "@shared/ui/button";
import Section from "@shared/ui/section";
import { heroContent } from "@shared/content/home";

export default function Hero() {
  return (
    <Section
      id="hero"
    >
      <div className="relative">
        <div className="absolute left-4 top-4 h-28 w-28 rounded-full bg-primary-500/10 blur-3xl" />
        <div className="absolute right-6 bottom-6 h-24 w-24 rounded-full bg-primary-500/10 blur-3xl" />
        <div className="relative grid items-center gap-12 lg:grid-cols-2">
          <div className="space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full bg-primary-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-primary-600">
              {heroContent.badge}
            </span>
            <h1 className="text-gradient-anim font-display text-4xl max-w-[376px] font-semibold leading-tight sm:text-5xl lg:text-6xl">
              {heroContent.title}
            </h1>
            <p className="text-lg text-black/70">{heroContent.subtitle}</p>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
              <div className="relative w-full max-w-xl">
                <input
                  type="email"
                  placeholder={heroContent.formPlaceholder}
                  className="w-full rounded-full border border-[#d6d1e0] bg-white px-5 pr-48 py-4 text-base text-black outline-none shadow-sm transition focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20"
                />
                <div className="absolute right-2 top-1/2 -translate-y-1/2">
                  <Button
                    label={heroContent.primaryCta}
                    onClick={() => console.log("primary-cta")}
                    className="h-12 w-44 rounded-full text-base shadow-lg shadow-primary-500/25"
                  />
                </div>
              </div>
              <button
                type="button"
                onClick={() => console.log("secondary-cta")}
                className="text-base w-44 font-semibold text-primary-600 transition hover:text-primary-700"
              >
                {heroContent.secondaryCta} →
              </button>
            </div>

            <div className="grid grid-cols-3 gap-3 sm:max-w-md">
              {heroContent.metrics.map((metric) => (
                <div
                  key={metric.label}
                  className="rounded-2xl border border-primary-500/15 bg-white px-4 py-4 text-left shadow-sm"
                >
                  <div className="text-2xl font-semibold text-primary-600">{metric.value}</div>
                  <div className="text-xs text-accent-700/70">{metric.label}</div>
                </div>
              ))}
            </div>
          </div>

    
          <div className="relative flex h-[620px] w-full items-center justify-center lg:h-[680px] lg:justify-start">
            <img
              src={heroContent.heroPhoneImage.src}
              alt={heroContent.heroPhoneImage.alt}
              className="relative z-20 w-[220px] max-w-[240px] overflow-hidden  lg:absolute lg:left-0 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-2"
            />
            <img
              src={heroContent.heroDashboardImage.src}
              alt={heroContent.heroDashboardImage.alt}
              className="absolute right-[-200px] top-1/2 h-[580px] hidden w-full max-w-[620px] -translate-y-1/2 overflow-hidden lg:block"
            />
          </div>
        </div>
        </div>

    </Section>
  );
}
