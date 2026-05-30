export default function Footer() {
  return (
    <footer className="pb-10">
      <div className="max-w-7xl mx-auto px-8">
        <div
          className="
            rounded-[40px]
            border border-white/10
            bg-white/5
            backdrop-blur-2xl
            overflow-hidden
          "
        >
          {/* Main Footer */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-12 p-12 md:p-16">
            {/* Brand */}
            <div className="md:col-span-2">
              <div className="text-4xl font-extrabold text-white mb-6">
                in<span className="text-cyan-200">prava</span>
              </div>

              <p className="text-white/70 leading-relaxed max-w-sm">
                Helping ambitious companies scale through Recruitment Process
                Outsourcing, Virtual Assistants, and Development services — all
                under one trusted partner.
              </p>

              <div className="flex gap-4 mt-8">
                <a
                  href="#"
                  className="
                    w-10 h-10
                    rounded-xl
                    bg-white/10
                    border border-white/10
                    flex items-center justify-center
                    text-white/70
                    hover:text-white
                    hover:bg-white/15
                    transition-all
                  "
                >
                  in
                </a>

                <a
                  href="#"
                  className="
                    w-10 h-10
                    rounded-xl
                    bg-white/10
                    border border-white/10
                    flex items-center justify-center
                    text-white/70
                    hover:text-white
                    hover:bg-white/15
                    transition-all
                  "
                >
                  X
                </a>
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-white font-bold mb-5">Services</h4>

              <div className="flex flex-col gap-3">
                <a
                  href="#services"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  Recruitment Process Outsourcing
                </a>

                <a
                  href="#services"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  Virtual Assistants
                </a>

                <a
                  href="#services"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  Software Development
                </a>

                <a
                  href="#services"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  Consulting
                </a>
              </div>
            </div>

            {/* Company */}
            <div>
              <h4 className="text-white font-bold mb-5">Company</h4>

              <div className="flex flex-col gap-3">
                <a
                  href="#"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  About
                </a>

                <a
                  href="#results"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  Results
                </a>

                <a
                  href="#"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  Careers
                </a>

                <a
                  href="#"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  Partners
                </a>
              </div>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-white font-bold mb-5">Contact</h4>

              <div className="flex flex-col gap-3">
                <a
                  href="mailto:hello@inprava.com"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  hello@inprava.com
                </a>

                <a
                  href="#contact"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  Book a Demo
                </a>

                <a
                  href="#"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  LinkedIn
                </a>

                <a
                  href="#"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  Privacy Policy
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-white/10 px-12 py-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-white/50 text-sm">
                © 2025 Inprava. All rights reserved.
              </p>

              <div className="flex items-center gap-6 text-sm">
                <a
                  href="#"
                  className="text-white/50 hover:text-white transition-colors"
                >
                  Terms
                </a>

                <a
                  href="#"
                  className="text-white/50 hover:text-white transition-colors"
                >
                  Privacy
                </a>

                <a
                  href="#"
                  className="text-white/50 hover:text-white transition-colors"
                >
                  Cookies
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
