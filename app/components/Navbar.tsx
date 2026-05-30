import Link from "next/link";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-6 pt-5">
        <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 backdrop-blur-2xl shadow-[0_8px_40px_rgba(0,0,0,0.15)] px-8 py-4">
          {/* Logo */}
          <Link href="/" className="group">
            <div className="text-3xl font-extrabold tracking-tight text-white">
              in
              <span className="text-cyan-200 group-hover:text-white transition-colors">
                prava
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-10">
            <Link
              href="#services"
              className="text-white/80 hover:text-white transition-colors text-sm font-medium"
            >
              Services
            </Link>

            <Link
              href="#how"
              className="text-white/80 hover:text-white transition-colors text-sm font-medium"
            >
              How It Works
            </Link>

            <Link
              href="#results"
              className="text-white/80 hover:text-white transition-colors text-sm font-medium"
            >
              Results
            </Link>

            <Link
              href="#contact"
              className="text-white/80 hover:text-white transition-colors text-sm font-medium"
            >
              Contact
            </Link>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <Link
              href="#contact"
              className="hidden md:block text-white/80 hover:text-white text-sm font-medium transition-colors"
            >
              Sign In
            </Link>

            <Link
              href="#contact"
              className="
                hidden md:flex
                items-center
                px-5 py-3
                rounded-xl
                border
                border-white/20
                bg-white/5
                text-white
                text-sm
                font-semibold
                hover:bg-white/10
                hover:border-white/40
                transition-all
              "
            >
              Start Free
            </Link>

            <Link
              href="#contact"
              className="
                flex items-center
                px-6 py-3
                rounded-xl
                bg-white
                text-slate-900
                text-sm
                font-bold
                hover:bg-slate-100
                transition-all
                shadow-lg
              "
            >
              Book a Demo
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
