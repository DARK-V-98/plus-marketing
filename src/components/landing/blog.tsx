export function Blog() {
  const clients = ["CGV", "Hmall", "Dohm", "LOTTE", "NAVER", "SK telecom", "saramin", "coupang", "MBC", "KBS"];

  return (
    <section id="blog" className="w-full py-12 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-6 text-center">
          <h2 className="text-2xl font-semibold tracking-tight text-foreground/90">
            Trusted by 350+ happy customers
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6 pt-4">
            {clients.map((client) => (
              <span key={client} className="text-2xl font-bold text-foreground/40 grayscale filter transition-all hover:text-foreground/80 hover:grayscale-0">
                {client}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
