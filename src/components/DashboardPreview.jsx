import {
  Calendar,
  Check,
  Folder,
  LayoutGrid,
  ListTodo,
  Users,
} from "lucide-react";

const stats = [
  { label: "Tasks done", value: "24", meta: "+12%", tone: "up" },
  { label: "In progress", value: "08", meta: "This week", tone: "quiet" },
  { label: "Focus time", value: "6.5h", meta: "+18%", tone: "up" },
];

const tasks = [
  { title: "Review landing page design", done: true, tag: "High", tone: "high" },
  { title: "Plan the next sprint", done: false },
  { title: "Share project updates", done: false, tag: "Medium", tone: "medium" },
];

const projects = [
  { name: "Website redesign", progress: 76 },
  { name: "Product launch", progress: 54 },
];

const navItems = [
  { label: "Overview", icon: LayoutGrid, active: true },
  { label: "My tasks", icon: ListTodo },
  { label: "Projects", icon: Folder },
  { label: "Calendar", icon: Calendar },
  { label: "Team", icon: Users },
];

export default function DashboardPreview() {
  return (
    <div className="dashboard" aria-hidden="true">
      <aside className="dash-side">
        <div className="dash-brand">
          <span className="logo-mark">
            <Check size={12} strokeWidth={3} />
          </span>
          TaskFlow
        </div>

        <p className="dash-kicker">Workspace</p>
        <ul className="dash-nav">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <li key={item.label} className={item.active ? "is-active" : ""}>
                <Icon size={14} />
                {item.label}
              </li>
            );
          })}
        </ul>

        <div className="dash-grow">
          <strong>Room to grow</strong>
          <p>Make space for your next big idea.</p>
          <span>Explore Pro →</span>
        </div>
      </aside>

      <div className="dash-main">
        <p className="dash-crumb">My workspace / Overview</p>
        <h3>A little progress, every day.</h3>
        <p className="dash-date">Monday, October 19 · Let’s make it a great week.</p>

        <div className="dash-stats">
          {stats.map((stat) => (
            <article key={stat.label}>
              <span>{stat.label}</span>
              <strong>{stat.value}</strong>
              <em className={stat.tone}>{stat.meta}</em>
            </article>
          ))}
        </div>

        <div className="dash-block">
          <div className="dash-block-head">
            <h4>Today’s tasks</h4>
            <span>View all →</span>
          </div>
          <ul className="dash-tasks">
            {tasks.map((task) => (
              <li key={task.title}>
                <span className={`box ${task.done ? "is-done" : ""}`}>
                  {task.done ? <Check size={11} strokeWidth={3} /> : null}
                </span>
                <span className={task.done ? "is-done-text" : ""}>{task.title}</span>
                {task.tag ? <em className={`pill pill-${task.tone}`}>{task.tag}</em> : null}
              </li>
            ))}
          </ul>
        </div>

        <div className="dash-block">
          <div className="dash-block-head">
            <h4>Your projects</h4>
          </div>
          <ul className="dash-projects">
            {projects.map((project) => (
              <li key={project.name}>
                <div>
                  <span>{project.name}</span>
                  <strong>{project.progress}%</strong>
                </div>
                <div className="bar">
                  <span style={{ width: `${project.progress}%` }} />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
