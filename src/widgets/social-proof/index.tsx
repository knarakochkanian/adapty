import Section from "@shared/ui/section";
import { logos } from "@shared/content/home";

export default function SocialProof() {
  return (
    <Section className="py-0">
      <div className="flex flex-col items-center gap-6 text-center">
        <p className="text-base font-medium text-[#8a8178]">
          Trusted by 15,000+ apps and the world&apos;s largest app publishers
        </p>
        <div className="flex flex-wrap justify-center gap-4 text-[#8a8178] sm:gap-6 lg:gap-10">
          {logos.map((logo) => (
            <div key={logo.name} className="px-4 py-2 text-base font-semibold">
              {logo.name}
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
