export default function CTABanner() {
  return (
    <section id="contact" className="py-32">
      <div className="max-w-6xl mx-auto px-8">
        <div
          className="
            relative overflow-hidden
            rounded-[40px]
            border border-white/10
            bg-white/10
            backdrop-blur-2xl
            p-12 md:p-20
            text-center
            shadow-[0_25px_80px_rgba(0,0,0,0.2)]
          "
        >
          {/* Glow Effects */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute -top-20 -left-20 h-80 w-80 rounded-full bg-white/10 blur-3xl" />
            <div className="absolute -bottom-20 -right-20 h-80 w-80 rounded-full bg-pink-300/10 blur-3xl" />
          </div>

          <div className="relative z-10">
            {/* Label */}
            <p className="uppercase tracking-[0.25em] text-white/60 text-xs font-semibold mb-6">
              Ready To Scale?
            </p>

            {/* Heading */}
            <h2 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-8">
              Ready to shape{" "}
              <span className="italic text-cyan-200">your future?</span>
            </h2>

            {/* Description */}
            <p className="max-w-3xl mx-auto text-white/70 text-xl leading-relaxed mb-12">
              Your job is building a great company. Our job is helping you hire
              faster, operate better, and scale with confidence.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap justify-center gap-4 mb-10">
              <a
                href="mailto:hello@inprava.com"
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
                href="mailto:hello@inprava.com"
                className="
                  border border-white/20
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

            {/* Trust Line */}
            <p className="text-white/50 text-sm">
              No long-term contracts. No unnecessary complexity. Just measurable
              results.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
