import { useState } from "react";
import { ArrowUpRight, Minus, Plus } from "lucide-react";

const items = [
  {
    question: "Is TaskFlow really free?",
    answer:
      "Yes! The Free plan is free forever, with unlimited personal tasks, up to 3 projects, and space to collaborate with up to 3 people. Upgrade only when you need more.",
  },
  {
    question: "Can I use TaskFlow with my team?",
    answer:
      "Yes. The Free plan includes space for up to 3 people. Pro adds unlimited projects and collaborators, so a growing team can share the same calm workspace.",
  },
  {
    question: "Can I access my tasks on mobile?",
    answer:
      "Yes. Desktop and mobile access is included on every plan, so your tasks, projects, and progress stay with you wherever the day takes you.",
  },
  {
    question: "Can I change or cancel my plan?",
    answer:
      "Any time. There are no contracts and no hidden fees. Move to Pro when you need more, or return to Free whenever you like.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="section faq" id="faq">
      <div className="container faq-grid">
        <div className="faq-intro">
          <p className="eyebrow">A little more clarity</p>
          <h2>
            Good Questions.
            <br />
            Clear Answers.
          </h2>
          <p>Everything else you might be wondering.</p>
          <div className="faq-help">
            <span>Still have a question?</span>
            <a href="#footer">
              We’re happy to help
              <ArrowUpRight size={15} aria-hidden="true" />
            </a>
          </div>
        </div>

        <div className="faq-list">
          {items.map((item, index) => {
            const open = openIndex === index;
            return (
              <article key={item.question} className={`faq-item ${open ? "is-open" : ""}`}>
                <h3>
                  <button
                    type="button"
                    aria-expanded={open}
                    onClick={() => setOpenIndex(open ? -1 : index)}
                  >
                    {item.question}
                    {open ? <Minus size={16} /> : <Plus size={16} />}
                  </button>
                </h3>
                <div className="faq-answer">
                  <div>
                    <p>{item.answer}</p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
