import { BriefOptimizerForm } from "./brief-optimizer-form";

export function BriefOptimizer() {
  return (
    <section id="optimizer" className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="space-y-4">
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">AI-Powered Tool</div>
            <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Optimize Your Marketing Brief
            </h2>
            <p className="max-w-[600px] text-foreground/80 md:text-xl/relaxed">
              Unsure where to start? Paste your draft marketing brief, campaign plan, or even just a few ideas into our AI-powered optimizer. It will provide actionable suggestions to improve clarity, define your target audience, and boost overall effectiveness.
            </p>
          </div>
          <div className="flex items-center justify-center">
            <BriefOptimizerForm />
          </div>
        </div>
      </div>
    </section>
  );
}
