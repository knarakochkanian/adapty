import Section from "@shared/ui/section";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#191919] text-white">
      <Section className="py-10 !px-0" maxWidthClass="max-w-[1100px]">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col items-start justify-between gap-4 lg:flex-row lg:items-center">
            <div className="max-w-xl text-left text-xl font-semibold leading-tight">
              Get started today or schedule a demo for your personal onboarding
            </div>
            <div className="flex flex-wrap gap-3">
              <button
                type="button"
                className="rounded-full border border-white px-5 py-3 text-sm font-semibold text-white transition hover:border-primary-500 hover:text-primary-200"
                onClick={() => console.log("start-for-free")}
              >
                Start for free
              </button>
              <button
                type="button"
                className="rounded-full bg-primary-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-primary-500/40 transition hover:bg-primary-600"
                onClick={() => console.log("schedule-demo")}
              >
                Schedule a demo
              </button>
            </div>
          </div>

          <div className="h-px w-full bg-white/10" />

          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="text-2xl font-semibold">adapty</div>
            <div className="flex items-center gap-5 text-xl text-white">
              <span className="hover:text-primary-200">X</span>
              <span className="hover:text-primary-200">in</span>
              <span className="hover:text-primary-200">GH</span>
              <span className="hover:text-primary-200">YT</span>
            </div>
          </div>

          <div className="h-px w-full bg-white/10" />

          <FooterNav />

          <div className="flex flex-col gap-3 text-xs text-white/60 sm:flex-row sm:items-center sm:justify-between">
            <div>© {new Date().getFullYear()} Adapty Tech Inc.</div>
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 rounded-md border border-white/10 px-3 py-1 text-white/80">
                <span role="img" aria-label="UK flag">
                  🇬🇧
                </span>
                English
              </div>
            </div>
          </div>
        </div>
      </Section>
    </footer>
  );
}

export function FooterNav() {
  return (
    <nav className="mx-auto w-full max-w-[1100px]">
      <div className="grid grid-cols-6 items-start gap-x-12 gap-y-0">
        <div className="min-w-0">
          <FooterSection title="Paywall management">
            <FooterItem>Paywall builder</FooterItem>
            <FooterItem>Onboarding builder</FooterItem>
            <FooterItem>AI generator</FooterItem>
            <FooterItem>A/B testing</FooterItem>
            <FooterItem>Autopilot</FooterItem>
            <FooterItem>Targeting</FooterItem>
            <FooterItem>Localization</FooterItem>
            <FooterItem>Remote config</FooterItem>
          </FooterSection>

          <div className="mt-10" />

          <FooterSection title="Infrastructure">
            <FooterItem>Subscription SDK</FooterItem>
            <FooterItem>Subscriber sync</FooterItem>
            <FooterItem>Fallback paywalls</FooterItem>
            <FooterItem>Refund saver</FooterItem>
            <FooterItem>Integrations</FooterItem>
          </FooterSection>
        </div>

        <div className="min-w-0">
          <FooterSection title="Roles">
            <FooterItem>For developers</FooterItem>
            <FooterItem>For marketers</FooterItem>
            <FooterItem>For app owners</FooterItem>
          </FooterSection>

          <div className="mt-10" />

          <FooterSection title="Stages">
            <FooterItem>Indie</FooterItem>
            <FooterItem>Startups</FooterItem>
            <FooterItem>Publishers</FooterItem>
            <FooterItem>Enterprise</FooterItem>
          </FooterSection>

          <div className="mt-10" />

          <FooterSection title="Cases">
            <FooterItem>Integrate subscriptions</FooterItem>
            <FooterItem>Grow app revenue</FooterItem>
            <FooterItem>Analyze performance</FooterItem>
            <FooterItem>Read our cases</FooterItem>
          </FooterSection>
        </div>

        <div className="min-w-0">
          <FooterSection title="Migrate from">
            <FooterItem>RevenueCat</FooterItem>
            <FooterItem>Purchasely</FooterItem>
            <FooterItem>Qonversion</FooterItem>
            <FooterItem>Superwall</FooterItem>
          </FooterSection>

          <div className="mt-10" />

          <FooterSection title="SDK">
            <FooterItem>iOS</FooterItem>
            <FooterItem>Android</FooterItem>
            <FooterItem>React Native</FooterItem>
            <FooterItem>Flutter</FooterItem>
            <FooterItem>FlutterFlow</FooterItem>
            <FooterItem>Kotlin Multiplatform</FooterItem>
            <FooterItem>Capacitor</FooterItem>
            <FooterItem>Unity</FooterItem>
            <FooterItem>Stripe</FooterItem>
          </FooterSection>
        </div>

        <div className="min-w-0">
          <FooterSection title="Resources">
            <FooterItem>Blog</FooterItem>
            <FooterItem>Ebooks</FooterItem>
            <FooterItem>Podcast</FooterItem>
            <FooterItem>Webinars</FooterItem>
            <FooterItem>Events</FooterItem>
            <FooterItem>Glossary</FooterItem>
            <FooterItem>Documentation</FooterItem>
            <FooterItem>Paywall library</FooterItem>
            <FooterItem>LTV prediction model</FooterItem>
            <FooterItem>Apple fiscal calendar</FooterItem>
            <FooterItem>Apple receipt checker</FooterItem>
            <FooterItem>Subscription calculator</FooterItem>
            <FooterItem>Refund saver calculator</FooterItem>
            <FooterItem>In-app subscription reports</FooterItem>
            <FooterItem>Community</FooterItem>
          </FooterSection>
        </div>

        <div className="min-w-0">
          <FooterSection title="Analytics">
            <FooterItem>Revenue analytics</FooterItem>
            <FooterItem>LTV analytics</FooterItem>
            <FooterItem>AI predictive analytics</FooterItem>
            <FooterItem>Apple ads manager</FooterItem>
          </FooterSection>
        </div>

        <div className="min-w-0">
          <FooterSection title="Company">
            <FooterItem>About us</FooterItem>
            <FooterItem>Contact us</FooterItem>
            <FooterItem>Careers</FooterItem>
            <FooterItem>Terms</FooterItem>
            <FooterItem>Privacy policy</FooterItem>
            <FooterItem>Data protection</FooterItem>
            <FooterItem>System status</FooterItem>
            <FooterItem>SOC2 compliance</FooterItem>
            <FooterItem>Become a partner</FooterItem>
          </FooterSection>
        </div>
      </div>
    </nav>
  );
}

function FooterSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="min-w-0">
      <h4 className="text-[14px] font-medium text-white">{title}</h4>
      <ul className="mt-4 flex flex-col gap-3 text-[14px] leading-[1.25] text-white/65">{children}</ul>
    </div>
  );
}

function FooterItem({ children }: { children: React.ReactNode }) {
  return (
    <li>
      <a href="#" className="transition hover:text-white/90 focus:outline-none focus-visible:text-white/90">
        {children}
      </a>
    </li>
  );
}
