import { Check, Sparkles } from "lucide-react";
import Button from "./Button";

const plans = [
  {
    name: "Free Plan",
    description: "For a little more clarity, every day.",
    price: "$0",
    note: "Free forever. Really.",
    features: [
      "Unlimited personal tasks",
      "Up to 3 projects",
      "Basic progress tracking",
      "Collaborate with up to 3 people",
      "Desktop & mobile access",
    ],
    cta: "Get Started Free",
    href: "#pricing",
    variant: "secondary",
    arrow: false,
  },
  {
    name: "Pro Plan",
    description: "For your next level of productivity.",
    price: "$9",
    note: "Per person, billed monthly",
    featured: true,
    features: [
      "Everything in Free, plus",
      "Unlimited projects & collaborators",
      "Advanced productivity insights",
      "Custom workflows & priorities",
      "Priority support",
    ],
    cta: "Get Started with Pro",
    href: "#pricing",
    variant: "primary",
    arrow: true,
  },
];

export default function Pricing() {
  return (
    <section className="section pricing" id="pricing">
      <div className="container">
        <header className="section-head">
          <p className="eyebrow">Big possibilities. Small price.</p>
          <h2>Simple Pricing for Everyone</h2>
          <p>Start for free. Upgrade when you’re ready.</p>
        </header>

        <div className="plan-grid">
          {plans.map((plan) => (
            <article
              key={plan.name}
              className={`plan ${plan.featured ? "is-featured" : ""}`}
            >
              {plan.featured ? (
                <span className="popular">
                  <Sparkles size={12} aria-hidden="true" />
                  Most popular
                </span>
              ) : null}
              <h3>{plan.name}</h3>
              <p className="plan-desc">{plan.description}</p>
              <p className="price">
                <strong>{plan.price}</strong>
                <span>/ month</span>
              </p>
              <p className="plan-note">{plan.note}</p>
              <ul>
                {plan.features.map((feature) => (
                  <li key={feature}>
                    <Check size={15} strokeWidth={2.5} aria-hidden="true" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Button href={plan.href} variant={plan.variant} arrow={plan.arrow}>
                {plan.cta}
              </Button>
            </article>
          ))}
        </div>
        <p className="pricing-foot">
          No hidden fees. No commitments. Just better days.
        </p>
      </div>
    </section>
  );
}
