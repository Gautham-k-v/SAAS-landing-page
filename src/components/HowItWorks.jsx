import { Check, Folder, Plus } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Create Your Workspace",
    text: "Make yourself at home. Start a personal workspace or bring your team along.",
  },
  {
    number: "02",
    title: "Organise Your Tasks",
    text: "Add your tasks, set your priorities, and give every idea a place to go.",
  },
  {
    number: "03",
    title: "Track Your Progress",
    text: "Turn small wins into big results. See your progress, one day at a time.",
  },
];

const checklist = [
  { label: "Plan your week", done: true },
  { label: "Prioritise what matters", done: true },
  { label: "Get into your flow", done: false },
];

const bars = [42, 58, 46, 70, 62, 78, 100];

function StepPreview({ index }) {
  if (index === 0) {
    return (
      <div className="step-preview step-workspace">
        <div className="preview-row">
          <Folder size={15} />
          <strong>Your next great idea</strong>
        </div>
        <p>taskflow.app / my-workspace</p>
        <span>
          <Plus size={12} strokeWidth={2.5} /> Create workspace
        </span>
      </div>
    );
  }

  if (index === 1) {
    return (
      <div className="step-preview step-list">
        {checklist.map((item) => (
          <div key={item.label}>
            <span className={item.done ? "is-done" : ""}>
              {item.done ? <Check size={11} strokeWidth={3} /> : null}
            </span>
            {item.label}
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="step-preview step-chart">
      <p>Your weekly momentum</p>
      <div className="chart">
        {bars.map((height, barIndex) => (
          <span
            key={height + barIndex}
            className={barIndex === bars.length - 1 ? "is-current" : ""}
            style={{ height: `${height}%` }}
          />
        ))}
      </div>
    </div>
  );
}

export default function HowItWorks() {
  return (
    <section className="section how" id="how-it-works">
      <div className="container">
        <header className="section-head">
          <p className="eyebrow">From to-do to ta-da</p>
          <h2>Get Started in Three Simple Steps</h2>
          <p>Less setup. More getting things done.</p>
        </header>

        <ol className="steps">
          {steps.map((step, index) => (
            <li key={step.number}>
              <span className="step-number">{step.number}</span>
              <StepPreview index={index} />
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
