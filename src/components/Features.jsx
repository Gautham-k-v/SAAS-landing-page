import { Check, ChartColumn, Users } from "lucide-react";

const features = [
  {
    icon: Check,
    title: "Smart Task Management",
    text: "A clear mind starts with a clear list. Organise tasks, set priorities, and focus.",
    preview: "tasks",
  },
  {
    icon: ChartColumn,
    title: "Project Tracking",
    text: "See the bigger picture. Keep every project moving in the right direction.",
    preview: "project",
  },
  {
    icon: Users,
    title: "Team Collaboration",
    text: "Great work happens together. Share ideas and keep everyone in sync.",
    preview: "team",
  },
];

function Preview({ type }) {
  if (type === "tasks") {
    const items = [
      { label: "Design a little. Achieve a lot.", done: true },
      { label: "Build your next big thing", done: false },
      { label: "Make time for what matters", done: false },
    ];
    return (
      <div className="preview preview-tasks">
        {items.map((item) => (
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

  if (type === "project") {
    return (
      <div className="preview preview-project">
        <div className="preview-row">
          <strong>Website redesign</strong>
          <em>76%</em>
        </div>
        <p>In progress</p>
        <div className="bar">
          <span style={{ width: "76%" }} />
        </div>
        <small>18 of 24 tasks completed</small>
      </div>
    );
  }

  return (
    <div className="preview preview-team">
      <div className="preview-row">
        <Users size={14} />
        <strong>One team. On the same page.</strong>
      </div>
      <p>Looking good! Ready to share the first version with everyone?</p>
      <span className="aligned">
        <Check size={12} strokeWidth={3} /> All aligned
      </span>
    </div>
  );
}

export default function Features() {
  return (
    <section className="section features" id="features">
      <div className="container">
        <header className="section-head">
          <p className="eyebrow">Less busywork. More momentum.</p>
          <h2>Everything You Need to Stay Productive</h2>
          <p>One calm space for everything on your plate.</p>
        </header>

        <div className="feature-grid">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <article key={feature.title} className="feature-card">
                <Preview type={feature.preview} />
                <h3>
                  <Icon size={16} aria-hidden="true" />
                  {feature.title}
                </h3>
                <p>{feature.text}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
