"use client";

import { useState } from "react";

const problems = [
  {
    icon: "✗",
    title: "Hire through generic agencies?",
    desc: "They don't understand your culture, send mismatched candidates, and disappear after invoicing. You end up managing the agency instead of growing your team.",
    bad: true,
  },
  {
    icon: "✗",
    title: "Manage VAs yourself?",
    desc: "Unvetted assistants require constant supervision, create bottlenecks, and often become another responsibility instead of solving one.",
    bad: true,
  },
  {
    icon: "✗",
    title: "Build everything in-house?",
    desc: "Hiring, onboarding, and retaining full-time talent is expensive, slow, and difficult to scale as business priorities change.",
    bad: true,
  },
  {
    icon: "✓",
    title: "The Inprava approach",
    desc: "One strategic partner for Recruitment, Virtual Assistants, and Development. One team. One workflow. One point of accountability.",
    bad: false,
  },
];

const tabs = [
  {
    num: "01",
    label: "RPO",
    tag: "RECRUITMENT PROCESS OUTSOURCING",
    title: "One partner. Your entire hiring engine.",
    body: "Build a repeatable recruiting process that consistently attracts and converts top talent while reducing operational overhead.",
    points: [
      "Full-cycle recruiting",
      "Candidate sourcing & outreach",
      "ATS management & reporting",
      "Employer branding support",
    ],
  },
  {
    num: "02",
    label: "Virtual Assistants",
    tag: "PRE-VETTED VA SERVICES",
    title: "Get your time back.",
    body: "Dedicated assistants embedded into your workflows, handling recurring tasks so your team can focus on high-impact work.",
    points: [
      "Executive assistance",
      "Inbox & calendar management",
      "CRM updates & reporting",
      "Research & administration",
    ],
  },
  {
    num: "03",
    label: "Development",
    tag: "CUSTOM SOFTWARE DEVELOPMENT",
    title: "Build products that move the business forward.",
    body: "Experienced developers who integrate into your team and deliver production-ready software with clear communication.",
    points: [
      "Web applications",
      "Mobile development",
      "API integrations",
      "QA & testing",
    ],
  },
];

export default function ServicesGrid() {
  const [active, setActive] = useState(0);

  return (
    <>
      {/* Problems Section */}
      <section className="relative py-28">
        <div className="max-w-7xl mx-auto px-8">
          <p className="uppercase tracking-[0.25em] text-white/60 text-xs font-semibold mb-6">
            The State Of The Market
          </p>

          <h2 className="text-5xl md:text-6xl font-bold text-white max-w-4xl mb-16">
            When your company needs to scale, most options create more
            complexity than results.
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {problems.map((item) => (
              <div
                key={item.title}
                className="
                  bg-white/10
                  backdrop-blur-xl
                  border border-white/10
                  rounded-3xl
                  p-8
                  hover:bg-white/15
                  transition-all
                "
              >
                <div
                  className={`
                    w-12 h-12 rounded-full flex items-center justify-center
                    mb-5 text-lg font-bold
                    ${
                      item.bad
                        ? "bg-red-500/20 text-red-300"
                        : "bg-green-500/20 text-green-300"
                    }
                  `}
                >
                  {item.icon}
                </div>

                <h3 className="text-2xl font-bold text-white mb-3">
                  {item.title}
                </h3>

                <p className="text-white/70 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="relative py-28">
        <div className="max-w-7xl mx-auto px-8">
          <p className="uppercase tracking-[0.25em] text-white/60 text-xs font-semibold mb-6">
            Combat Chaos With Clarity
          </p>

          <h2 className="text-5xl md:text-6xl font-bold text-white max-w-5xl mb-16">
            Everything you need to build a repeatable growth system.
          </h2>

          <div className="grid lg:grid-cols-[280px_1fr] gap-8">
            {/* Tabs */}
            <div className="space-y-3">
              {tabs.map((tab, i) => (
                <button
                  key={tab.num}
                  onClick={() => setActive(i)}
                  className={`
                    w-full text-left rounded-2xl p-5 transition-all
                    ${
                      active === i
                        ? "bg-white/15 backdrop-blur-xl border border-white/20"
                        : "bg-white/5 border border-white/5 hover:bg-white/10"
                    }
                  `}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-cyan-200 text-sm font-bold">
                      {tab.num}
                    </span>

                    <span className="text-white font-semibold">
                      {tab.label}
                    </span>
                  </div>
                </button>
              ))}
            </div>

            {/* Content */}
            <div
              className="
                bg-white/10
                backdrop-blur-xl
                border border-white/10
                rounded-[32px]
                p-10
              "
            >
              <p className="text-cyan-200 uppercase tracking-[0.2em] text-xs font-semibold mb-4">
                {tabs[active].tag}
              </p>

              <h3 className="text-4xl font-bold text-white mb-6">
                {tabs[active].title}
              </h3>

              <p className="text-white/70 text-lg leading-relaxed mb-8">
                {tabs[active].body}
              </p>

              <div className="grid md:grid-cols-2 gap-4">
                {tabs[active].points.map((point) => (
                  <div
                    key={point}
                    className="
                      flex items-center gap-3
                      bg-white/5
                      border border-white/10
                      rounded-2xl
                      p-4
                    "
                  >
                    <div className="text-cyan-200 font-bold">→</div>

                    <span className="text-white/90">{point}</span>
                  </div>
                ))}
              </div>

              {/* Mock Dashboard Area */}
              <div
                className="
                  mt-10
                  rounded-3xl
                  bg-black/20
                  border border-white/10
                  p-10
                  min-h-[240px]
                  flex items-center justify-center
                "
              >
                <p className="text-white/50">
                  Service visual / workflow screenshot
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
