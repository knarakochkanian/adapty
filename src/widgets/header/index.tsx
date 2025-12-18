"use client";

import Button from "@shared/ui/button";
import Section from "@shared/ui/section";
import { navItems } from "@shared/content/home";

export default function Header() {
  return (
    <header className="sticky top-0 z-30 backdrop-blur-md">
      <Section className="py-4">
        <div className="flex items-center justify-between rounded-full border border-primary-500/10 bg-white px-4 py-3 shadow-sm">
          <div className="text-lg font-semibold tracking-tight text-accent-700">adapty</div>
          <nav className="hidden items-center gap-6 text-sm text-accent-700/70 md:flex">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} className="hover:text-accent-700">
                {item.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              label="Sign in"
              onClick={() => console.log("sign-in")}
              className="hidden border-accent-700/20 text-accent-700 hover:bg-primary-500/10 hover:text-accent-700 sm:inline-flex"
            />
            <Button
              label="Get started"
              onClick={() => console.log("get-started")}
              className="bg-primary-500 px-5 text-white hover:bg-primary-600"
            />
          </div>
        </div>
      </Section>
    </header>
  );
}
