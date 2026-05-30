export default function Hero() {
  return (
    <section className="relative pt-44 pb-24">
      {/* Glow Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute left-0 top-20 h-[500px] w-[500px] rounded-full bg-white/10 blur-3xl" />
        <div className="absolute right-0 top-40 h-[500px] w-[500px] rounded-full bg-pink-300/20 blur-3xl" />
        <div className="absolute left-1/2 top-64 h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-cyan-300/10 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-8">
        {/* Label */}
        <div className="text-center">
          <p className="uppercase tracking-[0.35em] text-white/70 font-semibold text-xs mb-8">
            IT SERVICES • RPO • VIRTUAL ASSISTANTS • DEVELOPMENT
          </p>

          {/* Heading */}
          <h1 className="max-w-4xl mx-auto text-white text-4xl md:text-6xl lg:text-7xl font-extrabold leading-[0.95] tracking-tight">
            Repeatable growth,
            <br />
            powered by{" "}
            <span className="italic text-white/75">the right people</span>
          </h1>

          {/* Subheading */}
          <p className="max-w-3xl mx-auto mt-8 text-xl md:text-2xl text-white/75 leading-relaxed">
            Inprava helps growing companies align hiring, operations, and
            software delivery through one trusted partner — so you scale without
            the chaos.
          </p>

          {/* CTAs */}
          <div className="mt-12 flex flex-wrap justify-center gap-4">
            <a
              href="#contact"
              className="
                bg-white
                text-slate-900
                px-8 py-4
                rounded-xl
                font-bold
                shadow-lg
                hover:bg-slate-100
                transition-all
              "
            >
              Start Free
            </a>

            <a
              href="#contact"
              className="
                border
                border-white/20
                bg-white/5
                backdrop-blur-xl
                text-white
                px-8 py-4
                rounded-xl
                font-semibold
                hover:bg-white/10
                transition-all
              "
            >
              Book a Demo
            </a>
          </div>

          {/* Social Proof */}
          <div className="mt-12 flex flex-wrap justify-center gap-8 text-white/60 text-sm">
            <span>★★★★★ 4.8 on G2</span>
            <span>★★★★★ 4.9 on Clutch</span>
            <span>98% Client Retention</span>
            <span>3x Faster Hiring</span>
          </div>
        </div>

        {/* Dashboard Card */}
        <div className="mt-20">
          <div
            className="
              overflow-hidden
              rounded-[32px]
              border border-white/10
              bg-white/10
              backdrop-blur-2xl
              shadow-[0_25px_80px_rgba(0,0,0,0.25)]
            "
          >
            {/* Browser Header */}
            <div className="flex items-center gap-2 border-b border-white/10 bg-white/5 px-6 py-4">
              <div className="h-3 w-3 rounded-full bg-red-400" />
              <div className="h-3 w-3 rounded-full bg-yellow-400" />
              <div className="h-3 w-3 rounded-full bg-green-400" />

              <div className="ml-4 rounded-full bg-white/10 px-4 py-1 text-xs text-white/60">
                app.inprava.com/dashboard
              </div>
            </div>

            {/* Dashboard Content */}
            <div className="p-8">
              <div className="grid md:grid-cols-4 gap-4 mb-6">
                {[
                  {
                    label: "Active Roles",
                    value: "24",
                  },
                  {
                    label: "VAs Deployed",
                    value: "12",
                  },
                  {
                    label: "Projects",
                    value: "18",
                  },
                  {
                    label: "Time To Fill",
                    value: "14d",
                  },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="
                      rounded-2xl
                      border border-white/10
                      bg-white/5
                      p-5
                    "
                  >
                    <p className="text-white/60 text-sm">{item.label}</p>

                    <p className="mt-2 text-3xl font-bold text-white">
                      {item.value}
                    </p>
                  </div>
                ))}
              </div>

              {/* Screenshot Area */}
              <div
                className="
                  h-[400px]
                  rounded-2xl
                  border border-white/10
                  bg-black/20
                  flex items-center justify-center
                "
              >
                <p className="text-white/50 text-lg">
                  Replace with your dashboard screenshot
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Trusted Companies */}
        <div className="mt-16 text-center">
          <p className="text-white/50 text-sm uppercase tracking-[0.25em] mb-8">
            Trusted by growing companies
          </p>

          <div className="flex flex-wrap justify-center gap-10 text-white/30 font-bold text-lg">
            <span>TechCorp</span>
            <span>NovaBuild</span>
            <span>ScaleOps</span>
            <span>Meridian</span>
            <span>PeakHire</span>
            <span>SwiftOps</span>
          </div>
        </div>
      </div>
    </section>
  );
}
