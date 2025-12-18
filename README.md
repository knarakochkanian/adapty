STAGE 1 (test assignment only). Build a SINGLE Home page inspired by https://adapty.io/ (homepage).
Tech: React + TypeScript + Tailwind. Prefer Next.js App Router.

IMPORTANT ARCHITECTURE:
Use FSD (Feature-Sliced Design) + SOLID.

No big "components" dump folder.
Separate layers: app, pages, widgets, features, entities, shared.
Keep components small, single responsibility.
Use composition over inheritance.
No business logic inside UI components; move to hooks/services where appropriate.
SCOPE (ONLY one page):
Header, Hero, SocialProof (logos), Features, Testimonials, CTA, Footer.
Responsive (mobile/tablet/desktop). Subtle hover/transition.

DATA:
All texts and lists must be in typed constants (arrays) in a dedicated content module.
Render lists via map(). No API calls. Buttons use console.log.

DELIVERABLE:
Generate the full runnable code + folder structure + run commands.

PROCESS NOTE:
Stage 2: schedule a 15–30 min call after submission.
Stage 3: main technical interview after the call.

Now output:

folder structure (FSD)
code for each file
short notes on SOLID decisions (2–5 bullets)
