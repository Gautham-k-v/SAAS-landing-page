import { Check, Sparkles } from "lucide-react";
import Button from "./Button";
import DashboardPreview from "./DashboardPreview";

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="pill-badge">
            <Sparkles size={14} aria-hidden="true" />
            A little less busy. A lot more done.
          </p>
          <h1>
            Organise Your
            <br />
            Work.
            <br />
            <span>Achieve More.</span>
          </h1>
          <p className="lede">
            The smarter way to manage your tasks, organise projects, and stay
            productive every day.
          </p>
          <div className="hero-actions">
            <Button href="#pricing" arrow>
              Get Started Free
            </Button>
            <Button href="#features" variant="secondary">
              Explore Features
            </Button>
          </div>
          <p className="reassure">
            <Check size={15} strokeWidth={2.5} aria-hidden="true" />
            Free forever. No credit card needed.
          </p>
        </div>
        <DashboardPreview />
      </div>
    </section>
  );
}
