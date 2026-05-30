const transformations = [
  {
    label: "Repeatable quality",
    from: "Quality trapped inside individual team members",
    to: "A documented system that consistently produces high-performing outcomes.",
  },
  {
    label: "Visibility & control",
    from: "Managing through assumptions and scattered updates",
    to: "Complete visibility into performance, bottlenecks, and opportunities.",
  },
  {
    label: "Compounding productivity",
    from: "Starting from zero every time",
    to: "A partner that learns your business and gets better over time.",
  },
];

const testimonials = [
  {
    stat: "3x Faster",
    label: "time-to-fill",
    quote:
      "Before Inprava, we managed multiple agencies. Today everything runs through one partner and our hiring process feels effortless.",
    name: "Sarah Mitchell",
    role: "Head of People",
  },
  {
    stat: "48 Hours",
    label: "VA onboarding",
    quote:
      "Our assistant was operational within two days. The amount of time we've recovered is incredible.",
    name: "Rohan Mehta",
    role: "Founder",
  },
  {
    stat: "98%",
    label: "client retention",
    quote:
      "The quality of candidates and communication has been exceptional from day one.",
    name: "James O'Brien",
    role: "CTO",
  },
];

export default function WhyInprava() {
  return (
    <>
      {/* Transformations */}
      <section id="results" className="py-28">
        <div className="max-w-7xl mx-auto px-8">
          <p className="uppercase tracking-[0.25em] text-white/60 text-xs font-semibold mb-6">
            Results That Compound
          </p>

          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 max-w-4xl">
            Make every hire your best hire.
          </h2>

          <p className="text-white/70 text-xl mb-14 max-w-3xl">
            Build repeatable systems that produce predictable outcomes.
          </p>

          <div className="space-y-6">
            {transformations.map((item) => (
              <div
                key={item.label}
                className="
                  bg-white/10
                  backdrop-blur-xl
                  border border-white/10
                  rounded-3xl
                  p-8
                "
              >
                <div className="grid lg:grid-cols-3 gap-8 items-center">
                  <div>
                    <p className="text-cyan-200 uppercase tracking-[0.2em] text-xs font-semibold mb-3">
                      {item.label}
                    </p>

                    <p className="text-white/60">{item.from}</p>
                  </div>

                  <div className="text-center text-white/30 text-4xl">→</div>

                  <div>
                    <p className="text-white font-semibold text-lg">
                      {item.to}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-28">
        <div className="max-w-7xl mx-auto px-8">
          <p className="uppercase tracking-[0.25em] text-white/60 text-xs font-semibold mb-6">
            Client Results
          </p>

          <h2 className="text-5xl md:text-6xl font-bold text-white mb-14">
            Companies stay because the results do.
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((item) => (
              <div
                key={item.name}
                className="
                  bg-white/10
                  backdrop-blur-xl
                  border border-white/10
                  rounded-3xl
                  p-8
                "
              >
                <p className="text-5xl font-bold text-white">{item.stat}</p>

                <p className="text-cyan-200 text-sm mt-2 mb-6">{item.label}</p>

                <p className="text-white/70 italic leading-relaxed mb-8">
                  "{item.quote}"
                </p>

                <div className="border-t border-white/10 pt-5">
                  <p className="text-white font-semibold">{item.name}</p>

                  <p className="text-white/60 text-sm">{item.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Logos */}
      <section className="py-16 overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex items-center gap-20 mx-10">
              {[
                "TechVentures",
                "NovaBuild",
                "ScaleOps",
                "Meridian",
                "ArcSystems",
                "PeakHire",
                "VentureCore",
                "SwiftOps",
              ].map((name) => (
                <span key={name} className="text-white/25 font-bold text-2xl">
                  {name}
                </span>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* Beliefs */}
      <section className="py-28">
        <div className="max-w-7xl mx-auto px-8">
          <p className="uppercase tracking-[0.25em] text-white/60 text-xs font-semibold mb-6">
            Our Philosophy
          </p>

          <h2 className="text-5xl md:text-6xl font-bold text-white mb-14">
            Four beliefs that guide everything we do.
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Growing companies deserve both speed and quality",
                body: "You shouldn't have to sacrifice one to achieve the other.",
              },
              {
                title: "One partner is better than five vendors",
                body: "Reduce complexity and increase accountability.",
              },
              {
                title: "Relationships outperform transactions",
                body: "Long-term partnerships create long-term results.",
              },
              {
                title: "Process creates predictable outcomes",
                body: "The best systems consistently produce the best work.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="
                  bg-white/10
                  backdrop-blur-xl
                  border border-white/10
                  rounded-3xl
                  p-8
                "
              >
                <h3 className="text-2xl font-bold text-white mb-4">
                  {item.title}
                </h3>

                <p className="text-white/70 leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
