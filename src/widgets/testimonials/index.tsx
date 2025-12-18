import Section from "@shared/ui/section";
import Card from "@shared/ui/card";
import Avatar from "@shared/ui/avatar";
import { testimonials } from "@shared/content/home";

export default function Testimonials() {
  return (
    <Section id="testimonials" className="py-0">
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-2">
          <p className="text-sm uppercase tracking-[0.2em] text-primary-500">What teams say</p>
          <h2 className="font-display text-3xl font-semibold text-accent-700 sm:text-4xl">
            Proof from fast-shipping apps
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {testimonials.map((item) => (
            <Card key={item.author} className="flex flex-col gap-4">
              <p className="text-lg text-accent-700">“{item.quote}”</p>
              <div className="flex items-center gap-3 text-sm text-accent-700/80">
                <Avatar name={item.author} />
                <div>
                  <div className="font-semibold text-accent-700">{item.author}</div>
                  <div>{item.role}</div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </Section>
  );
}
