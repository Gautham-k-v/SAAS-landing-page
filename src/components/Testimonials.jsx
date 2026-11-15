import { Star } from "lucide-react";

const testimonials = [
  {
    quote:
      "TaskFlow gives all my ideas a home. I spend less time organising and more time doing the work I love.",
    name: "Maya Chen",
    role: "Freelance designer",
    skin: "#E7C2A6",
    hair: "#2A211C",
    shirt: "#625CF6",
  },
  {
    quote:
      "Finally, a task manager that doesn’t feel like another task. My projects are clearer, and my days feel lighter.",
    name: "Alex Morgan",
    role: "Software developer",
    skin: "#C98A62",
    hair: "#1C1A24",
    shirt: "#3E3A66",
  },
  {
    quote:
      "Between classes and side projects, things used to slip through. Now I know exactly what to focus on next.",
    name: "Jordan Lee",
    role: "University student",
    skin: "#F0CDB4",
    hair: "#6B3E2E",
    shirt: "#7C74F2",
  },
];

function Portrait({ person }) {
  return (
    <svg className="portrait" viewBox="0 0 64 64" aria-hidden="true">
      <circle cx="32" cy="32" r="32" fill="#F3F1FB" />
      <path d="M8 58c4-12 12-18 24-18s20 6 24 18" fill={person.shirt} />
      <circle cx="32" cy="26" r="12" fill={person.skin} />
      <path
        d="M20 26c1-12 8-18 12-18s11 6 12 18c-3-3-7-4-12-4s-9 1-12 4z"
        fill={person.hair}
      />
      <circle cx="27.5" cy="26" r="1.2" fill="#2A2438" />
      <circle cx="36.5" cy="26" r="1.2" fill="#2A2438" />
      <path
        d="M28.5 31.5c1.2 1.4 5.8 1.4 7 0"
        fill="none"
        stroke="#8A5A48"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function Testimonials() {
  return (
    <section className="section testimonials" id="testimonials">
      <div className="container">
        <header className="section-head">
          <p className="eyebrow">Good work. Great company.</p>
          <h2>Loved by Productive People</h2>
          <p>A little more focus goes a long way.</p>
        </header>

        <div className="quote-grid">
          {testimonials.map((person) => (
            <figure key={person.name} className="quote-card">
              <div className="stars" aria-label="5 stars">
                {Array.from({ length: 5 }, (_, index) => (
                  <Star key={index} size={14} fill="currentColor" strokeWidth={0} />
                ))}
              </div>
              <blockquote>“{person.quote}”</blockquote>
              <figcaption>
                <Portrait person={person} />
                <span>
                  <strong>{person.name}</strong>
                  {person.role}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
