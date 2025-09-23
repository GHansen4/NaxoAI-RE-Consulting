import Link from "next/link";

const packages = [
  {
    name: "Starter – AI Assistant",
    price: "From $249/mo",
    blurb:
      "Win back 5–8 hours a week and turn more site visitors into leads—without adding to your workload.",
    cta: { label: "Get started", href: "/book" },
    features: [
      "Never miss a website lead again — how: AI chatbot answers FAQs and captures contact info 24/7",
      "Write listings, emails, and replies 3× faster — how: pre-built, on-brand AI templates",
      "Show up on social even when you're busy — how: weekly caption ideas delivered to your inbox",
      "Reduce admin back-and-forth — how: quick automations for common inquiries",
      "Stay focused on clients — how: we maintain and troubleshoot everything for you",
    ],
    badge: "Best for solo agents",
    roiNote: "One extra closing often covers a year.",
  },
  {
    name: "Growth – AI Marketing Engine",
    price: "Most agents invest ~$599/mo",
    blurb:
      "Keep a consistent presence online and talk only to qualified prospects while routine marketing runs itself.",
    cta: { label: "Scale my marketing", href: "/book" },
    features: [
      "Post consistently without manual effort — how: automated content calendar + scheduling",
      "Publish MLS-ready listings in minutes — how: low-code workflow from notes/photos",
      "Talk to warmer leads, not tire-kickers — how: chatbot pre-qualifies buyers/sellers",
      "Know what's working at a glance — how: monthly performance summary delivered to you",
      "Avoid tool fatigue — how: we run and update the stack end-to-end",
      "Includes everything in Starter",
    ],
    highlight: true,
    badge: "Most popular",
    roiNote: "One extra closing often covers a year.",
  },
  {
    name: "Pro – AI Team in a Box",
    price: "From $999/mo",
    blurb:
      "Operate like you have a full admin + marketing team: instant follow-ups, ready-to-launch listings, and scheduling across channels.",
    cta: { label: "Run it for me", href: "/book" },
    features: [
      "Follow up instantly after every showing — how: personalized email & text sequences",
      "Launch a complete listing package same day — how: MLS copy, social posts, handouts, video script",
      "Be available 24/7 without being online — how: web, FB Messenger & SMS chatbot with scheduling",
      "Get proactive optimization, not just maintenance — how: quarterly strategy review",
      "Spend your time on clients and negotiations — how: we handle the ops behind the scenes",
      "Includes everything in Growth",
    ],
    badge: "For top producers",
    roiNote: "One extra closing often covers a year.",
  },
];


export default function PricingSection() {
  return (
    <section id="pricing" className="scroll-mt-28 md:scroll-mt-32 section-spacing-large bg-white" aria-labelledby="pricing-heading">
      <div className="mx-auto max-w-7xl container-padding">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <h2 id="pricing-heading" className="text-3xl font-semibold tracking-tight text-primary-900 sm:text-4xl">
            Simple, transparent pricing.
          </h2>
          <p className="mt-3 text-gray-600">
            No surprise fees, no long-term contracts. Just honest pricing for real results.
          </p>
        </div>

        {/* Packages */}
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {packages.map((p) => (
            <div
              key={p.name}
              className={`relative flex flex-col rounded-2xl border border-gray-200 bg-white p-6 shadow-sm ${
                p.highlight ? "ring-2 ring-blue-600" : ""
              }`}
            >
              {p.badge && (
                <span className="absolute -top-3 left-6 inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700">
                  {p.badge}
                </span>
              )}
              <h3 className="text-xl font-semibold text-primary-900">{p.name}</h3>
              <p className="mt-1 text-sm text-gray-600">{p.blurb}</p>
              <p className="mt-4 text-2xl font-semibold text-primary-900">{p.price}</p>
              <p className="mt-1 text-xs text-gray-600">
                One extra closing per year easily covers your investment.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-gray-700">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <svg className="mt-1 h-5 w-5 flex-none" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path
                        fillRule="evenodd"
                        d="M16.704 5.29a1 1 0 0 1 .006 1.414l-7.2 7.25a1 1 0 0 1-1.43.006L3.29 9.96a1 1 0 1 1 1.42-1.41l3.01 3.02 6.49-6.54a1 1 0 0 1 1.494.26z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                <Link
                  href={p.cta.href}
                  className={`inline-flex w-full items-center justify-center rounded-xl px-4 py-2.5 text-sm font-semibold shadow-sm transition
                    ${
                      p.highlight
                        ? "bg-blue-600 text-white hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                        : "border border-blue-600 text-blue-600 bg-white hover:bg-blue-600 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                    }`}
                >
                  {p.cta.label}
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}